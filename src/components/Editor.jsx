import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Editor(value, onChange) {
  return (
    <ReactQuill
      value={value}
      onChange={onChange}
      modules={{
        toolbar: [
          ["bold", "italic", "underline", "strike"], // formatting buttons
          ["link", "image"], // link and image buttons
          [{ list: "ordered" }, { list: "bullet" }], // list buttons
          [{ align: [] }], // alignment buttons
          ["clean"], // remove formatting button
          [{ size: ["small", false, "large", "huge"] }], // font size options
        ],
      }}
    />
  );
}

export default Editor;
