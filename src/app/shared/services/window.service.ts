import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {

  get windowRef(): Window {
    return window;
  }

}
