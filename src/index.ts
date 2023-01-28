import { AudioEditorFactory } from "./AudioEditorFactory";
import { PhotoEditorFactory } from "./PhotoEditorFactory";
import { VideoEditorFactory } from "./VideoEditorFactory";

const audioEditorFactory = new AudioEditorFactory();
const audioEditor = audioEditorFactory.initEditor();

const photoEditorFactory = new PhotoEditorFactory();
const photoEditor = photoEditorFactory.initEditor();

const videoEditorFactory = new VideoEditorFactory();
const videoEditor = videoEditorFactory.initEditor();
