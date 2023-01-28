import { PhotoEditor } from "./PhotoEditor";
import { Editor } from "./interface/Editor";
import { EditorFactory } from "./interface/EditorFactory";

export class PhotoEditorFactory implements EditorFactory {
  initEditor(): Editor {
    return new PhotoEditor();
  }
}
