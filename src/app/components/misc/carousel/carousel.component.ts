import { Component } from '@angular/core';
import { Image } from '../../shared';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss'],
})

export class CarouselComponent {
  public images = IMAGES;
  constructor() {
  }
}

const IMAGES: Image[] = [
  { 'title': 'Carousel slide nr 1', 'url': '/assets/img/mb-bg-06.png' },
  { 'title': 'Carousel slide nr 2', 'url': '/assets/img/mb-bg-05.png' },
  { 'title': 'Carousel slide nr 3', 'url': '/assets/img/mb-bg-06.png' },
  { 'title': 'Carousel slide nr 4', 'url': '/assets/img/mb-bg-05.png' },
  { 'title': 'Carousel slide nr 5', 'url': '/assets/img/mb-bg-06.png' },
];
