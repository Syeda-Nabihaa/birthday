
import './App.css'
import ReactConfetti from 'react-confetti'
import FirstSection from './FirstSection'
import { Route, Routes } from 'react-router-dom'
import Wish from './Wish'

function App() {

  return (
    <>
     <Routes>
<Route path="/" element={<FirstSection />} />
<Route path="/wish" element={<Wish />} />
     </Routes>
       
    </>
  )
}

export default App
