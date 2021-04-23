import React, { useState } from "react";
import "./index.css";
import DisplayImage from "./comps/DisplayImage";
import Modal from "./comps/Modal";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";

function App() {
  const [Selected, setSelected] = useState(null);
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <DisplayImage setSelected={setSelected} />
      {Selected && <Modal Selected={Selected} setSelected={setSelected} />}
    </div>
  );
}

export default App;
