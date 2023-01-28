import { Editor } from "./interface/Editor";

export class VideoEditor implements Editor {
  constructor() {
    this.init();
  }

  init(): void {
    console.log('Start intializaing video editor......');
    console.log('End intializaing video editor......');
  }
}
