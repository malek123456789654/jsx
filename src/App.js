import "./App.css";
import img1 from "./imgjsx.jpg ";

function App() {
  const name = "tap your name";
  return (
    <div className="App">
      <p style={{ color: "black", width: "100px", border: "solid" }}></p>
      <p style={{ color: "red", margin: "0 30%", backgroundColor: "black" }}>
        {name}
      </p>
      <img src={img1} alt="" style={{ width: "30%" }} />
    </div>
  );
}

export default App;
