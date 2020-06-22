import React from "react";
import "./EditorContent.css";
import PropTypes from "prop-types";

const inlineStyle = { display: "inline", padding: 0 };

const EditorContent = props => {
  const { content, className, inline } = props;

  let finalClassName = "ql-snow";
  if (className) {
    finalClassName += " " + className;
  }

  if (inline) {
    return (
      <div className={finalClassName} style={inlineStyle}>
        <div
          className={"ql-editor inline-editor-content"}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  }

  return (
    <div className={finalClassName}>
      <div style={{padding: 0}}
        className={"ql-editor"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

EditorContent.defaultProps = {
  inline: false
};

EditorContent.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  inline: PropTypes.bool
};

export default EditorContent;
