import React from "react";
import PropTypes from "prop-types";

const inlineStyle = { display: "inline", padding: 0 };

const EditorContent = props => {
  const { content, className, isInline } = props;

  if (isInline) {
    return (
      <div
        className={className ? `${className} ql-snow` : "ql-snow"}
        style={inlineStyle}
      >
        <div
          style={{...inlineStyle}}
          className={"ql-editor"}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>
    );
  }

  return (
    <div
      className={className ? `${className} ql-snow` : "ql-snow"}
    >
      <div
          style={{padding: 0}}
        className={"ql-editor"}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
};

EditorContent.defaultProps = {
  isInline: false
};

EditorContent.propTypes = {
  content: PropTypes.string.isRequired,
  className: PropTypes.string,
  isInline: PropTypes.bool
};

export default EditorContent;
