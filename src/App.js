import "./App.css";
import RawInputArea from "./component/RawInputArea";
import MarkdownSanitized from "./component/MarkdownSanitized";
import { InputProvider } from "./context/InputContext";

function App() {
  return (
    <InputProvider>

      <div className="App">
        <div className="item">
          <RawInputArea />
        </div>
        <div className="item">
          <MarkdownSanitized />
        </div>
      </div>
    </InputProvider>
  );
}

export default App;
