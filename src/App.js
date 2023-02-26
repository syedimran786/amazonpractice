// import React from 'react'

// import { BrowserRouter,Routes,Route } from "react-router-dom"
// import Details from "./Routing/Details"
// import Home from "./Routing/Home"
// import Login from "./Routing/Login"
// import Navbar from "./Routing/Navbar"
// import Pnf from "./Routing/Pnf"
// import Products from "./Routing/Products"
// import Mobiles from "./Routing/products/Mobiles"
// import Watches from "./Routing/products/Watches"
// import Laptops from "./Routing/products/Laptops"
// import DashBoard from "./Routing/DashBoard"
// import { useState } from "react"
// import Profile from "./Routing/Profile"
// import AuthProvider from "./Routing/auth"
// import Login1 from "./Routing/Login1"
// import ProtectedProfile from "./Routing/ProtectedProfile"
// import Buttons from './styled components/Buttons'

// let Lazymage=React.lazy(()=>import('./Routing/Images'))




// function App() {

//   let [logindata,setlogindata]=useState('')
//   return (

//     // ! routing
//     <BrowserRouter>
//    <AuthProvider>
//    <Navbar/>
//       <Routes>
//           <Route path="/" element={<Home/> }/>

// //! nested routing
//           <Route path="products" element={<Products/> }>

//             <Route index element={<Mobiles/> }/>
//             <Route path="mobiles" element={<Mobiles/> }/>
//             <Route path="watches" element={<Watches/> }/>
//             <Route path="laptops" element={<Laptops/> }/>
//           </Route>
//           <Route path="products/mobiles/:productId" element={<Details/> }/>
//           <Route path="DashBoard" element={<DashBoard logindata={logindata}/> }/>

//           //!DashBoard
//           <Route path="Login" element={<Login setlogindata={setlogindata}/> }/>
//           <Route path="Login1" element={<Login1/> }/>
//           <Route path="images" element={<React.Suspense fallback="Loading.....">
//                <Lazymage/>
//            </React.Suspense> }/>
//           {/* <Route path="images" element={<Images/> }/> */}


//           <Route path="profile" element={<ProtectedProfile>
//             <Profile/>
//           </ProtectedProfile> }/>
//           <Route path="*" element={<Pnf/> }/>
//           <Route path="buttons" element={<Buttons/> }/>

//       </Routes>
//    </AuthProvider>
//    </BrowserRouter>
//   )
// }

// export default App


import React from 'react'
import FetchApiReducer from './Fetching API/FetchApiReducer'

function App() {
  return (
    <div><FetchApiReducer/></div>
  )
}

export default App