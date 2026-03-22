import { useState } from 'react'
import { Route } from 'react-router-dom'
import { Routes } from 'react-router-dom'
import Index from './components/index.jsx'

import Ejercicio1 from './components/ejercicio1'
import Ejercicio2 from './components/ejercicio2'
import Ejercicio3 from './components/ejercicio3'
import Ejercicio4 from './components/ejercicio4'
import Ejercicio5 from './components/ejercicio5'
import Ejercicio6 from './components/ejercicio6'
import Ejercicio7 from './components/ejercicio7'
import Ejercicio8 from './components/ejercicio8'
import Ejercicio9 from './components/ejercicio9'




function App() {
  return (
    <Routes>
      <Route path="/" element={<Index/>}/>
      <Route path="/index" element={<Index/>}/>
      <Route path="/ejercicio1" element={<Ejercicio1/>}/>
      <Route path="/ejercicio2" element={<Ejercicio2/>}/>
      <Route path="/ejercicio3" element={<Ejercicio3/>}/>
      <Route path="/ejercicio4" element={<Ejercicio4/>}/>
      <Route path="/ejercicio5" element={<Ejercicio5/>}/>
      <Route path="/ejercicio6" element={<Ejercicio6/>}/>
      <Route path="/ejercicio7" element={<Ejercicio7/>}/>
      <Route path="/ejercicio8" element={<Ejercicio8/>}/>
      <Route path="/ejercicio9" element={<Ejercicio9/>}/>
    </Routes>
  )}
export default App
