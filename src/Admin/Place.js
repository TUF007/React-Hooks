import React, { useContext} from 'react'
import { DistContext } from "./Context";
function Place () {
 const {district}=useContext(DistContext);
 console.log(district);
  return (
    <div>
    {/* <div> district<input type='text' value={district}/></div>
    <div> place<input type='text'className='place'/></div> */}
    </div>
  )
}

export default Place