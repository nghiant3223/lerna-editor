import React, { useState } from "react";
import PropTypes from "prop-types";
import ReactQuill, { Quill } from "react-quill";

const Editor = props => {
  const { value, onChange, placeholder } = props;

  const [internalValue, setInternalValue] = useState(value || "");

  const modules = {
    toolbar: [
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [{ script: "sub" }, { script: "super" }, "formula"],
      ["code", "code-block"],
      [
        { align: "" },
        { align: "center" },
        { align: "right" },
        { align: "justify" }
      ],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" }
      ],
      ["link", "image", "video"],
      ["clean"]
    ]
  };

  const formats = [
    "header",

    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",

    "color",
    "background",

    "script",
    "formula",

    "code",
    "code-block",

    "align",

    "list",
    "indent",
    "bullet",

    "link",
    "image",
    "video"
  ];

  function handleChange(content, delta, source, editor) {
    setInternalValue(content);

    if (onChange) {
      onChange(content, editor.getContents().ops, editor.getText());
    }
  }

  return (
    <ReactQuill
      style={{ textAlign: "center" }}
      value={internalValue}
      onChange={handleChange}
      modules={modules}
      formats={formats}
      placeholder={placeholder}
    />
  );
};

Editor.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string
};

export default Editor;
