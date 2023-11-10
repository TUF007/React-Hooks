import React, { useContext } from 'react'
import { DistContext } from "./Context";
function District() {
  
    
     const { setDistrict } = useContext(DistContext);


     return (
          <div> district<input type='text' onChange={(event) => { setDistrict(event.target.value)}} /></div>
           )
          
}

export default District