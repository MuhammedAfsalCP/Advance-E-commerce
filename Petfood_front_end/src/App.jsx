import React, { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Signup from './User/Pages/Signup'
import Login from './User/Pages/Login'
// import ContaxtForm from './User/Contaxt/Contaxt'
import Home from './User/Pages/Home'


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AllProducts from './Admin/AllProducts'
import Users from './Admin/Users'
import UserDetail from './Admin/UserDetail'
import DashBoard from './Admin/DashBoard'

import AddProducts from './Admin/AddProducts'
import Orders from './User/Pages/Orders'
import SpecificOrderView from './Admin/SpecificOrderView'

import AllOrders from './Admin/Allorders'
import EditProduct from './Admin/Editproduct'
import PaymentSection from './User/Pages/PaymentSection'

import { Toaster } from 'react-hot-toast';
import ProductDetails from './User/Pages/ProductDetails'
import CartDetails from './User/Pages/CartDetails'
import NotFoundPage from './User/Components/NotFoundPage'
import Notifications from './User/Pages/Notifications'

export const Pascomponent = React.createContext()
function App() {


  return (
    <>
      
     <Toaster position="top-right" reverseOrder={false} />
        <Routes>
          <Route path='/' element={<Home />}>
          <Route path='AllProducts' element={<AllProducts/>}/>
          <Route path='Users' element={<Users/>}/>
          <Route path='Dashboard' element={<DashBoard/>}/>
          <Route path='EditProducts' element={<EditProduct/>}/>
          <Route path='userdetails' element={<UserDetail/>}/>
          <Route path='allorders' element={<AllOrders/>}/>
          <Route path='spesificorder' element={<SpecificOrderView/>}/>
          <Route path='Addproduct' element={<AddProducts/>}/>
          </Route>

          <Route path='Signup' element={<Signup />} />
          <Route path='Login' element={<Login />} />
         
         <Route path='spesificproduct' element={<ProductDetails/>}/>
         <Route path='AddtoCart' element={<CartDetails/>}/>
         <Route path='Payment' element={<PaymentSection/>}/>
         <Route path='Orders' element={<Orders/>}/>
         <Route path='Notification' element={<Notifications/>}/>
         <Route path="*" element={<NotFoundPage/>} />
        </Routes>
       
      
      <ToastContainer/>
    </>
  )
}

export default App
