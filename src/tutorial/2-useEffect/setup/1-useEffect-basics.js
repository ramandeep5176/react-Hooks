import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (value > 0) {
      document.title = `new messages(${value})`;
    }

    console.log("call useEffect");
  }, [value]);

  useEffect(() => {
    console.log("raman");
  }, []);
  console.log("render component");

  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        click
      </button>
    </>
  );
};

export default UseEffectBasics;
