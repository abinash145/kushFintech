import React, { useEffect, useState } from 'react'
import Header from '../../layout/Header'
import { useDispatch, useSelector } from 'react-redux'
import { appSelector, saveProduct } from '../../features/slice/appSlice'
import { useNavigate } from 'react-router-dom'
import { useGetProductsQuery } from '../../features/api'
import { Routes, Route } from 'react-router-dom'
import Table from '../../components/table/Table'
import CreateForm from '../../components/form/product/CreateForm'
import EditForm from '../../components/form/product/EditForm'
function Dashboard() {
  const dispath = useDispatch()

  const navigate = useNavigate()
  const { token, productData } = useSelector(appSelector)
  const { data } = useGetProductsQuery()
  useEffect(() => {
    if (!token) {
      navigate('/')
    }
  }, [token])
  useEffect(() => {
    if (!productData) {
      dispath(saveProduct())
    }
  }, [])

  return (
    <div>
      <Header />
      <div className=" max-w-[800px] w-full mx-auto ">
        <Routes>
          <Route path="/" element={<Table tableData={productData} />} />
          <Route path="/create" element={<CreateForm />} />
          <Route path="/edit/:id" element={<EditForm />} />
        </Routes>
      </div>
    </div>
  )
}

export default Dashboard
