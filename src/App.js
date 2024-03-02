import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import {data} from './DB/data'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import ErrorPage from './Pages/ErrorPage';
import Home from './Pages/Home';
import store  from './Redux/store';
// import AboutUs from './Components/AboutUs';
import { Suspense, lazy, useContext, useState } from 'react';
import DistinationsContextProvider from './context/DistinationsContextProvider';
// import Details from './Pages/Details';
import SimpleBackdrop from './Components/Spinner';
// import Cart from './Pages/Cart';
// import ContactUs from './Pages/ContactPage';
import Footer from './Components/Footer';
import { Provider } from 'react-redux';
import Navba from './Components/NavBar';

import PackageContextProvider from './context/packageContextProvider';
import CartProvider from './context/CartProvider';
import UserContextProvider from './context/userContextProvider';
// import Login from './Components/Login';
// import AddPackage from './Pages/AddPackage';
// import Payment from './Components/Payment';
// const Home = lazy(()=>import("./Pages/Home"))
const Payment = lazy(()=>import("./Components/Payment"))
const Details = lazy(()=>import("./Pages/Details"))
const AboutUs = lazy(()=>import("./Components/AboutUs"))
const ContactUs = lazy(()=>import("./Pages/ContactPage"))
const AddPackage = lazy(()=>import("./Pages/AddPackage"))
const Login = lazy(()=>import("./Components/Login"))
const Cart = lazy(()=>import("./Pages/Cart"))
const ErrorPage  = lazy(()=>import("./Pages/ErrorPage"))
function App() {



  
  return (
    <>
  

<Provider store={store}>
    <DistinationsContextProvider>
<UserContextProvider>
    <CartProvider>
      <PackageContextProvider>
    <Suspense fallback={<SimpleBackdrop></SimpleBackdrop>}>
   <BrowserRouter >

 <Navba></Navba>
   <Routes>

<Route path='home' element={<Home></Home>}></Route>
<Route path='payment' element={<Payment></Payment>}></Route>
<Route path='/' element={<Home></Home>}></Route>
<Route path='/destinations/:id' element={<Details/>}></Route>    
<Route path='about' element={<AboutUs></AboutUs>}></Route>
<Route path='contactus' element={<ContactUs></ContactUs>}></Route>
<Route path='addPackage' element={<AddPackage></AddPackage>}></Route>
<Route path='cart' element={<Cart></Cart>}></Route>
<Route path='login' element={<Login></Login>}></Route>

<Route path='*' element={<ErrorPage></ErrorPage>}></Route>

   </Routes>
   <Footer></Footer>
   </BrowserRouter> 
   </Suspense>
   </PackageContextProvider>
   </CartProvider>
   </UserContextProvider>
   </DistinationsContextProvider>
   </Provider>
  </>
  );
}
export default App;
