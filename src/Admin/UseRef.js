import React, { useRef } from "react";

function RefTutorial() {
  const inputDist= useRef(null);

  const onClick = () => {
   const text = inputDist.current.value;
    console.log(text);
  };
  return (
    <div>
      <input type="text" placeholder="District" ref={inputDist} />
      <button onClick={onClick}>Change District</button>
    </div>
  );
}

export default RefTutorial;
