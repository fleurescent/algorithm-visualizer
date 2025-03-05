"use client"

import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-python";

import "ace-builds/src-noconflict/theme-tomorrow_night_bright";

import "ace-builds/src-min-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/snippets/python";

export function Editor() {
  return (
    <AceEditor
      className="flex flex-1 flex-col items-stretch min-w-full min-h-full"
      mode="python"
      theme="tomorrow_night_bright"
      name="editor"
      editorProps={{ $blockScrolling: true }}
      enableBasicAutocompletion={true}
      enableLiveAutocompletion={true}
      enableSnippets={true}
      showPrintMargin={false}
    />
  )
}