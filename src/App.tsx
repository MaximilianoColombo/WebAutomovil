import './App.css'
import {Routes, Route} from "react-router-dom"
import Principal from './paginas/Principal'
import VehiculoDetalle from './paginas/VehiculoDetalle'

function App() {


  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/vehiculo/:id" element={<VehiculoDetalle />} />
    </Routes>
  )
} 

export default App
