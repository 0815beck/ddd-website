import { Route, Routes } from 'react-router-dom'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Aktuell from './pages/aktuell/Aktuell'
import UeberUns from  './pages/ueber-uns/UeberUns'
import Mitmachen from './pages/mitmachen/Mitmachen'
import Gewerke from './pages/gewerke/Gewerke'
import Inszenierungen from './pages/inszenierungen/Inszenierungen'
import Login from './pages/login/Login'

function App() {

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Aktuell/>} />
        <Route path="/aktuell" element={<Aktuell />} />
        <Route path="/ueberUns" element={<UeberUns />} />
        <Route path="/mitmachen" element={<Mitmachen/>}/>
        <Route path="/gewerke" element={<Gewerke/>}/>
        <Route path="/inszenierungen" element={<Inszenierungen/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
    </>
  )
}

export default App
