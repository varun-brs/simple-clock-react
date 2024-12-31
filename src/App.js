import "./App.css";
// import "./scripts.js";
import "./scripts.js";

function App() {
  return (
    <div className="App">
      <main role="main" style={{ marginBottom: "100px" }}>
        <div className="clock">
          <div className="hourHand"></div>
          <div className="minuteHand"></div>
          <div className="secondHand"></div>
          <div className="center"></div>
          <ul>
            <li>
              <span>1</span>
            </li>
            <li>
              <span>2</span>
            </li>
            <li>
              <span>3</span>
            </li>
            <li>
              <span>4</span>
            </li>
            <li>
              <span>5</span>
            </li>
            <li>
              <span>6</span>
            </li>
            <li>
              <span>7</span>
            </li>
            <li>
              <span>8</span>
            </li>
            <li>
              <span>9</span>
            </li>
            <li>
              <span>10</span>
            </li>
            <li>
              <span>11</span>
            </li>
            <li>
              <span>12</span>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
