import { Editor } from "./interface/Editor";

export class AudioEditor implements Editor {
  constructor() {
    this.init();
  }

  init(): void {
    console.log('Start intializaing audio editor......');
    console.log('End intializaing audio editor......');
  }
}
