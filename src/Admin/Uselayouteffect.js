import React, { useEffect, useLayoutEffect, useState } from 'react'




const Uselayouteffect = () => {

    const [value , setValue] = useState('')

    useEffect(() => {
        setValue('hi')
    
    },[])

    
useLayoutEffect(() => {
   setValue('hello')
},[])



  return (
    <div>{value}</div>
  )
}

export default Uselayouteffect