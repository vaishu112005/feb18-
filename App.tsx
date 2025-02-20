
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import DisplayAll from './components/DisplayAll'
import AddStudent from './components/AddStudent'  
import DeleteStudent from './components/DeleteStudent'
import SearchStudent from './components/SearchStudent'
import AddCar from './components/AddCar'

export default function App() {
  return (
    <div>

      <BrowserRouter>
      
      <Routes>
        
        
      <Route path="/display" element={<DisplayAll/> } />
      <Route path="/add" element={<AddStudent/>} />
      <Route path="/delete" element={<DeleteStudent />} />
      <Route path="/search" element={<SearchStudent />} />
      <Route path="/addcar" element={<AddCar/> } />
</Routes>
        </BrowserRouter>
    </div>
  )
}

