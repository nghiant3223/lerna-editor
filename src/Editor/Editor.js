import React from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";

const Editor = props => {
  const { value, onChange, placeholder } = props;

  function handleChange(html) {
    if (!onChange) {
      return;
    }

    onChange(html);
  }

  function getRenderValue(value) {
    if (value === undefined || value === null) {
      return null;
    }
    return value.html || value;
  }

  return (
      <ReactQuill
          style={{ textAlign: "center" }}
          value={getRenderValue(value)}
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

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ color: [] }, { background: [] }],
    [{ script: "sub" }, { script: "super" }, "formula"],
    ["code", "code-block"],
    [{ align: "" }, { align: "center" }, { align: "right" }, { align: "justify" }],
    [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
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
