
import { Route, Routes, Link, BrowserRouter } from 'react-router-dom'
import './App.css'
import Page from './page'
function App () {


  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Page />}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App
