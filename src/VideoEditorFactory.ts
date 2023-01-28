import { VideoEditor } from "./VideoEditor";
import { Editor } from "./interface/Editor";
import { EditorFactory } from "./interface/EditorFactory";

export class VideoEditorFactory implements EditorFactory {
  initEditor(): Editor {
    return new VideoEditor();
  }
}
