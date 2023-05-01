import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { SignIn } from './pages'
import { ToastContainer } from 'react-toastify'
import React, { Suspense } from 'react'
import Loader from './utils/Loader'
const Dashboard = React.lazy(() => import('./pages/dashboard/Dashboard'))
const Product = React.lazy(() => import('./pages/product/product'))
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route
            path="/dashboard/*"
            element={
              <Suspense fallback={<Loader />}>
                <Dashboard />
              </Suspense>
            }
          />
          <Route
            path="/product"
            element={
              <Suspense fallback={<Loader />}>
                <Product />
              </Suspense>
            }
          />
        </Routes>
      </BrowserRouter>
      <div>
        <ToastContainer />
      </div>
    </>
  )
}

export default App
