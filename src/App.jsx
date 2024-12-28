import React from "react";
import RichTextEditor from "react-rte";

const App = () => {
  const [value, setValue] = React.useState(RichTextEditor.createEmptyValue());
  const handleChange = (event) => {
    setValue(event);
  };
  return (
    <div>
      <h2>Rich Text Editor</h2>
      <RichTextEditor
        value={value}
        onChange={handleChange}
        multiline
        rows={20}
        style={{ minHeight: 410 }}
      />
      <div style={{ marginTop: "20px" }}>
        <h3>HTML Output:</h3>
        <div
          style={{
            border: "1px solid #ddd",
            padding: "10px",
            backgroundColor: "#f9f9f9",
          }}
        >
          {value.toString("markdown")}
        </div>
      </div>
    </div>
  );
};

export default App;
