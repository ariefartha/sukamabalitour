import React from 'react'
import { Route, Routes } from 'react-router'
import Homepage from './pages/Homepage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import TourInfo from './pages/TourInfo'
import Contact from './pages/Contact'
import BookingForm from './pages/BookingForm'

const App = () => {
  return (
    <div className='h-screen' data-theme="winter">
       <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/tourinfo' element={<TourInfo />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/booking-form' element={<BookingForm />} />
      </Routes>
      <Footer />
    </div>
  )
}

export default App