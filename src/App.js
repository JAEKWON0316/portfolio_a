import React from 'react'
import { DataProvider } from './context/DataProvider'
import Aside from './pages/Aside'
import Contents from './pages/Contents'

const App = () => {
  //DataProvider를 쓰면 그 하위에 있는 DataContext를 쓸 수 있게 된다.
  return (
    <DataProvider>
      <Aside />
      <Contents />    
    </DataProvider> 
  )
}

export default App