import './App.css'
import Homepage from './pages/Homepage'
import InvoiceMasbro from './pages/Invoice-Masbro'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/invoice-masbro" element={<InvoiceMasbro />} />
      </Routes>
    </Router>
  )
}

export default App
