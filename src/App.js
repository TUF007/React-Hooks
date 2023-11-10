import React from 'react'
import Admin from './Admin/App'
import {Route, Routes} from 'react-router-dom'
const App = () => {
  return (
   <Routes>
    <Route  path="/Admin/*" element={<Admin/>}/>
   </Routes>
  )
}

export default App