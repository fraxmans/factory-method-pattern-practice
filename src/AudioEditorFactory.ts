import { AudioEditor } from "./AudioEditor";
import { Editor } from "./interface/Editor";
import { EditorFactory } from "./interface/EditorFactory";

export class AudioEditorFactory implements EditorFactory {
  initEditor(): Editor {
    return new AudioEditor();
  }
}
