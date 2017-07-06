import { Component, AfterViewInit, Input, ViewChild } from '@angular/core';
import { Scene } from '../../shared'

declare let VRView: any;

@Component({
  selector: 'app-virtreal',
  templateUrl: './virtreal.component.html',
  styleUrls: ['./virtreal.component.scss']
})
export class VirtRealComponent implements AfterViewInit {

  viewer: any;
  @ViewChild('viewer') viewerElement: any;

  @Input() scenes: Scene;
  @Input() width: any;
  @Input() height: any;

  constructor() {
  }

  ngAfterViewInit() {
    this.viewer = new VRView.Player(`#${this.viewerElement.nativeElement.id}`, {
      image: 'assets/img/mountsthelens.png',
      width: 1200,
      height: 250
    });

    this.viewer.on('ready', () => {

      this.loadScene('world');
      this.viewer.on('click', (event) => event.id ? this.loadScene(event.id) : '');
    });
  }

  loadScene(id) {
    if (id) {
    // Set the image
    this.viewer.setContent({
      image: this.scenes[id].image,
      // preview: this.scenes[id].preview,
    });
    // Add all the hotspots for the scene
    const newScene = this.scenes[id];
    const sceneHotspots = Object.keys(newScene.hotspots);
    for (let i = 0; i < sceneHotspots.length; i++) {
      const hotspotKey = sceneHotspots[i];
      const hotspot = newScene.hotspots[hotspotKey];

      this.viewer.addHotspot(hotspotKey, {
        pitch: hotspot.pitch,
        yaw: hotspot.yaw,
        radius: hotspot.radius,
        distance: hotspot.distance
        });
      }
    }
  }

  getFirstScene() {
    for (const key in this.scenes) {
        if (this.scenes.hasOwnProperty(key)) {
            return key;
        }
    }
    return 0;
  }

}
