import "./App.css";

function App() {
  return (
    <>
      <div className="banner">
        <div className="navbar">
          <img src="hq-logo.jpg" className="logo" />
          <ul>
            <li>
              {" "}
              <a href="#">Home</a>
            </li>
            <li>
              {" "}
              <a href="#">About</a>
            </li>
            <li>
              {" "}
              <a href="#">Contact</a>
            </li>
            
          </ul>
        </div>

        <div className="content">
          <h1>HomeQube</h1>
          <p>Blockchain</p>

          <div>
            <button type="button">Login as Seller</button>
            <button type="button">Login as Buyer</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
