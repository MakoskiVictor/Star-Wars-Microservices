import './App.css'
import { Routes, BrowserRouter, Route } from 'react-router-dom'
import Landing from './pages/Landing'
import Home from './pages/Home'
import Characters from './pages/Characters'
import Films from './pages/Films'
import Planets from './pages/Planets'
import NotFound from './pages/NotFound'
import DetailsCharacter from './pages/DetailsCharacter'
import DetailsFilm from './pages/DetailsFilm'
import DetailsPlanet from './pages/DetailsPlanet'

function App () {
  return (
    <BrowserRouter>
    <Routes>

        <Route path='/' element={<Landing/>} />

        <Route path='/home' element={<Home/>} />

        <Route path='/characters' element={<Characters/>} />

        <Route path='/characters/:id' element={<DetailsCharacter/>} />

        <Route path='/films' element={<Films/>} />

        <Route path='/films/:id' element={<DetailsFilm/>} />

        <Route path='/planets' element={<Planets/>} />

        <Route path='/planets/:id' element={<DetailsPlanet/>} />

        <Route path='*' element={<NotFound/>} />

    </Routes>
    </BrowserRouter>
  )
}

export default App
