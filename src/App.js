import "./App.css";
import { useState } from "react";

import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  // const [name, setName] = useState("");
  const [list, setList] = useState([]);

  // const handleOnChange = (e) => {
  //   // const str = e.target.value;
  //   // console.log(str);
  //   const { value } = e.target;
  //   setName(value);
  // };
  // const handleOnSubmit = (e) => {
  //   e.preventDefault();

  // };

  const addUser = (name) => {
    setList([...list, name]);
  };
  // console.log(list);

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
        <Form addUser={addUser} />
        <List list={list} />
      </div>
    </div>
  );
}
export default App;
