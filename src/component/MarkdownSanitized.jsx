import { useContext } from "react";
import { InputContext } from "../context/InputContext.jsx";
import { Remarkable } from "remarkable";
import parse from "html-react-parser";

const MarkdownSanitized = () => {
  const [text, ] = useContext(InputContext);
  var md = new Remarkable();
  md.set({
    html: true,
    breaks: true,
  });
  const markdownText = parse(md.render(text));

  return (
    <>
      <header>
        <h1>Output</h1>
      </header>
      <div className="displayarea">{markdownText}</div>
    </>
  );
};

export default MarkdownSanitized;
