import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing/landing'
import Home from './pages/Home/home'
import Characteres from './pages/Characters/characters'
import Films from './pages/Films/films'
import Planets from './pages/Planets/planets'

function App () {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Landing/>} />

        <Route path='/home' element={<Home/>} />

        <Route path='/characters' element={<Characteres/>} />

        <Route path='/films' element={<Films/>} />

        <Route path='/planets' element={<Planets/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
