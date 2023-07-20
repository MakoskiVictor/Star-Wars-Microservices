import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Characteres from './pages/Characters'
import Films from './pages/Films/films'
import Planets from './pages/Planets/planets'
import { NotFound } from './pages/NotFound'

function App () {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Landing/>} />

        <Route path='/home' element={<Home/>} />

        <Route path='/characters' element={<Characteres/>} />

        <Route path='/films' element={<Films/>} />

        <Route path='/planets' element={<Planets/>} />

        <Route path='*' element={<NotFound/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
