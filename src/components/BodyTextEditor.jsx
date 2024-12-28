import React from "react";
import RichTextEditor from "react-rte";

const BodyTextEditor = ({ value }) => {
  const [editorValue] = React.useState();

  const handleChange = (event) => {
    console.log(event);
    // setEditorValue(event);
  };
  return (
    <RichTextEditor
      value={editorValue}
      onChange={handleChange}
      required
      id="body-text"
      name="bodyText"
      type="string"
      multiline
      rows={20}
      varient="filled"
      style={{ minHeight: 410 }}
    />
  );
};

// BodyTextEditor.propTypes = {
//   value: PropTypes.string.isRequired,
//   setValue: PropTypes.func.isRequired,
// };

export default BodyTextEditor;
