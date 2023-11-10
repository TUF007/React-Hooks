import React from 'react'
import District from './District'
import Place from './Place'
import { Route, Routes } from 'react-router-dom'
import Context from './Context'
import Uselayouteffect from './Uselayouteffect'
import UseReducer from './UseReducer'
import UseRef from './UseRef'
import ImperativeHandle from './ImperativeHandle'
import  UseCallback  from './UseCallback'
import UseMemo from './UseMemo'
const App = () => {
  return (
  
    <Routes>
      <Route path='/Context' element={<Context />} />
      <Route path='/District' element={<District />} />
      <Route path='/Place' element={<Place />} />
      <Route path='/Uselayouteffect' element={<Uselayouteffect />} />
      <Route path='/UseReducer' element={<UseReducer />} />
      <Route path='/UseRef' element={<UseRef />} />
      <Route path='/ImperativeHandle' element={<ImperativeHandle />} />
      <Route path='/UseCallback' element={<UseCallback />} />
      <Route path='/UseMemo' element={<UseMemo />} />
    </Routes>
  )
}

export default App