import React, { Component } from "react";

import { Editor } from "doodle-editor";

export default class App extends Component {
  render() {
    return (
      <div>
        <Editor
          text="Modern React component module"
          onChange={(a, b, c) => {
            console.log(a, b, c);
          }}
        />
      </div>
    );
  }
}
