import React, { useRef } from "react";
import Button from "./Button";

function ImperativeHandle() {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterDistrict();
        }}
      >
        phone-no
      </button>
      <Button ref={buttonRef} />
    </div>
  );
}

export default ImperativeHandle;
