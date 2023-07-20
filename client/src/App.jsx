import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Films from './pages/Films'
import Planets from './pages/Planets'
import NotFound from './pages/NotFound'

function App () {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Landing/>} />

        <Route path='/home' element={<Home/>} />

        <Route path='/characters' element={<Characters/>} />

        <Route path='/films' element={<Films/>} />

        <Route path='/planets' element={<Planets/>} />

        <Route path='*' element={<NotFound/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
