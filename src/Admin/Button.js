import React, { forwardRef, useImperativeHandle, useState } from "react";

const Button = forwardRef((props, ref) => {
  const [district, setDistrict] = useState(false);
  console.log(district);
  useImperativeHandle(ref, () => ({
    alterDistrict() {
      setDistrict(!district);
    },
  }));
  return (
    <>
      <button>phone no</button>
      {district && <span>9061253966</span>}
    </>
  );
});

export default Button;
