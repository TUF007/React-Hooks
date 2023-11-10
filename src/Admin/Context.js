import React, { createContext, useState } from 'react'
import District from "./District";
import  Place  from "./Place";

export const DistContext = createContext(null);

function Context() {
const [district , setDistrict] = useState("");
  return (
    <DistContext.Provider value={{ district , setDistrict}}>
        <District/> <Place/>
    </DistContext.Provider>
  );
}

export default Context