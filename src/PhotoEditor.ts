import { Editor } from "./interface/Editor";

export class PhotoEditor implements Editor {
  constructor() {
    this.init();
  }

  init(): void {
    console.log('Start intializaing photo editor......');
    console.log('End intializaing photo editor......');
  }
}
