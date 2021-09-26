import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  const [text, setText] = useState("");
  const [isError, setIsError] = useState(false);
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  return (
    <>
      {/* <h1>{firstValue}</h1>
  <h1>value={secondValue}</h1> */}

      <h1>{text || "raman"}</h1>
      <button className="btn" onClick={() => setIsError(!isError)}>
        toggle error
      </button>
      {/* {text && <h1>hello</h1>} */}
      {isError && <h1>error..</h1>}
      {isError ? <h1>ternery1</h1> : <h1>ternary2</h1>}
    </>
  );
};

export default ShortCircuit;
