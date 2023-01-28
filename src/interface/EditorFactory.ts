import { Editor } from "./Editor";

export interface EditorFactory {
  initEditor(): Editor;
}
