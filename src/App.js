import { headerContents } from "./components/Header";
import { sendContents } from "./components/Content";
import { footerContents } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          {headerContents()}
        </h1>
      </header>
      <p>
        {sendContents()[0]}
      </p>
      <p>
          {sendContents()[1]}
      </p>
      <footer>
        <strong>
          {footerContents()}
        </strong>
      </footer>
    </div>
  );
}

export default App;
