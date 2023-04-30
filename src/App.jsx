import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn, Product } from './pages'
import { ToastContainer } from 'react-toastify'
import Dashboard from './pages/dashboard/Dashboard'

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/dashboard/*" element={<Dashboard />} />
          <Route path="/product" element={<Product />} />
        </Routes>
      </BrowserRouter>
      <div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
