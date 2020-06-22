import React, { Component, useState } from "react";

import { Editor, EditorContent } from "lerna-editor";

export default function App()  {
const [value, setValue] = useState('1');

    return (
      <div>
          <button onClick={() => setValue("")}>clear</button>
        <Editor
          value={value}
          onChange={(a, b, c) => {
            console.log(a, b, c);
          }}
        />

        <div>the answer is <EditorContent content={"<p>wtf</p>"} inline/></div>
      </div>
    );
}
