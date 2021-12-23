import React, { useState, useEffect } from "react";

function Counter({ quantity, onCountChange, id, onInputvalueUpdate }) {
  //   console.log("quantity", quantity);
  const [count, setCount] = useState(quantity);

  useEffect(() => {
    setCount(quantity);
  }, [quantity]);

  const onChangeValue = (e) => {
    // setCount(Number(count) + Number(e.target.value));
    onCountChange(e.target.id, e.target.value);
  };

  const onInputChange = (e) => {
    // console.log(e.target.id, e.target.value);
    setCount(e.target.value);
    onInputvalueUpdate(e.target.id, e.target.value);
  };
  return (
    <div>
      <button id={id} value="-1" onClick={onChangeValue}>
        -
      </button>
      <input
        id={id}
        style={{
          width: "35px",
          height: "35px",
          border: "none",
          textAlign: "center",
        }}
        value={count}
        onChange={onInputChange}
      />
      <button id={id} value="+1" onClick={onChangeValue}>
        +
      </button>
    </div>
  );
}

export default Counter;
