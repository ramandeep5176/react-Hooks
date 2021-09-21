import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 35,
    message: "im raman",
  });

  const [name, setName] = useState("peter");
  const [age, setAge] = useState(35);
  const [message, setMessage] = useState("i`raman 2");

  const changeMessgae = () => {
    // setPerson({ ...person, message: "ramandd" });
    setMessage("hello2");
  };

  return (
    <>
      <h3>{name}</h3>
      <h3>{age}</h3>
      <h3>{message}</h3>
      <button className="btn" onClick={changeMessgae}>
        changeMessgae
      </button>
    </>
  );
};

export default UseStateObject;
