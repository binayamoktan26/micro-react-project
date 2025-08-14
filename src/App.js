import "./App.css";

function App() {
  return (
    <div
      className="wrapper"
      style={{
        display: "flex",
        height: "100vh",
        fontSize: "1.2rem",
      }}
    >
      <div
        className="user-list"
        style={{
          boxShadow: "0 0 10px black",
          padding: "2rem",
        }}
      >
        <div className="display">as you type</div>
        <div className="form">
          <form action="">
            <input type="text" />
            <button>Add User</button>
          </form>
          <hr />
          <div className="list">
            <ul>
              <li>Kakashi Hatake </li>
              <li>Itachi Uchiha </li>
              <li>Shikamaru Nara </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;
