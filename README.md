# doodle-editor

>

[![NPM](https://img.shields.io/npm/v/doodle-editor.svg)](https://www.npmjs.com/package/doodle-editor) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Introduction

`doodle-editor` is a rich text editor component used for React project

## Install

```bash
npm install --save doodle-editor
```

## Usage

**Before using the editor, you must add the following tags to your `index.html` file**

```html
<link rel="stylesheet" href="https://cdn.quilljs.com/1.2.6/quill.snow.css" />
<link
  rel="stylesheet"
  href="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.css"
/>
<script src="https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.7.1/katex.min.js"></script>
```

### Editor
The following code shows how to use the rich text editor:

```jsx
import React, { Component } from "react";
import { Editor } from "doodle-editor";

class Example extends Component {
  render() {
    return <Editor />;
  }
}
```

##### Properties

| Name           |          Description          |     Type | Default value |
| -------------- | :---------------------------: | -------: | ------------: |
| initialContent | Initial content of the editor | `string` |        `null` |
| placeholder    |   Placeholder of the editor   | `string` |        `null` |

##### Methods

| Name                         |                Description                 | Default value |
| ---------------------------- | :----------------------------------------: | ------------: |
| onChange(html, deltas, text) | Event firing when editor's content changes |        `null` |

### EditorContent
When you want to render the HTML generated from editor, you use the following code:

```jsx
import React, { Component } from "react";
import { EditorContent } from "doodle-editor";

class Example extends Component {
  render() {
    return <EditorContent content={yourHTML} />;
  }
}
```

##### Properties

| Name    |      Description      |     Type | Default value |
| ------- | :-------------------: | -------: | ------------: |
| content | Content of the editor | `string` |        `null` |

## License

MIT © [ntncsebku](https://github.com/ntncsebku)
