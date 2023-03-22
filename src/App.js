import "./App.css";
import Weather from "./Weather";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1></h1>
        <Weather />
        <br />
        <small className="footer">
          Designed and coded by Ogechukwu Oginni | Open-sourced on{" "}
          <a
            href="https://github.com/ogeoginni/My-React-Weather-App/"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </small>
      </header>
    </div>
  );
}

export default App;
