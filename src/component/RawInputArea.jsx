import { useContext } from "react";
import { InputContext } from "../context/InputContext";

const RawInputArea = () => {
  const [text, setText] = useContext(InputContext);

  const updateText = (e) => {
    setText(e.target.value);
    localStorage.setItem('text',text);
  };

  return (
    <div>
     <header>
        <h1>Enter Markdown</h1>
      </header>
      <textarea row="" cols="" value={text} onChange={updateText}></textarea>
    </div>
  );
};

export default RawInputArea;
