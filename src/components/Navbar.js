// // // import React from 'react';
// // // import { Link,useNavigate } from 'react-router-dom';

// // // export default function Navbar() {

// // //   const navigate= useNavigate()
// // //   const handleLogout = () => {
// // //     localStorage.removeItem('authToken')

// // //     navigate("/login")
// // // }

// // //   return (
// // //     <div>
// // //       <nav className="navbar navbar-expand-lg navbar-dark bg-success">
// // //         <div className="container-fluid">
// // //           <Link className="navbar-brand fs-1" to="/">GoFood</Link>
// // //           <button
// // //             className="navbar-toggler"
// // //             type="button"
// // //             data-bs-toggle="collapse"
// // //             data-bs-target="#navbarNav"
// // //             aria-controls="navbarNav"
// // //             aria-expanded="false"
// // //             aria-label="Toggle navigation"
// // //           >
// // //             <span className="navbar-toggler-icon"></span>
// // //           </button>
// // //           <div className="collapse navbar-collapse" id="navbarNav">
// // //             <ul className="navbar-nav me-auto mb-2">
// // //               <li className="nav-item">
// // //                 <Link className="nav-link active fs-5" aria-current="page" to="/">
// // //                   Home
// // //                 </Link>
// // //               </li> {(localStorage.getItem("authToken")) ?
// // //                                 <li className="nav-item">
// // //                                     <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/" >My Orders</Link> 
// // //                                 </li> : ""}
// // //             </ul>

// // //             {(!localStorage.getItem("authToken")) ?
// // //                             <div className="d-flex">
// // //                                 <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
// // //                                 <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
// // //                             </div> 
// // //             :
// // //             <div>
// // //             <div className='btn bg-white text-success mx-2'>
// // //               My Cart
// // //               </div>


// // //             <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
// // //               Logout
// // //               </div>
// // //               </div>
// // //             }
// // //           </div>
// // //         </div>
// // //       </nav>
// // //     </div>
// // //   );
// // // }







// // // import React from 'react'
// // // import { Link } from 'react-router-dom'

// // // export default function Navbar() {
// // //   return (
// // //     <div>
// // // <nav className="navbar navbar-expand-lg navbar-dark bg-success">
// // //   <div className="container-fluid">
// // //     <Link className="navbar-brand fs-1 " to="/">GoFood</Link>
// // //     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
// // //       <span className="navbar-toggler-icon"></span>
// // //     </button>
// // //     <div className="collapse navbar-collapse" id="navbarNav">
// // //       <ul className="navbar-nav me-auto mb-2">
// // //         <li className="nav-item">
// // //           <Link className="nav-link active fs-5" aria-current="page" to="/">Home</Link>
// // //         </li>

// // //         {(localStorage.getItem("authauthToken"))?
// // //          <li className="nav-item">
// // //          <Link className="nav-link active fs-5" aria-current="page" to="/">My Orders</Link>
// // //        </li> 

// // //      : "" }


// // //       </ul>
// // //       <div className='d-flex'>

// // //       <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>



// // //         <Link className="btn bg-white text-success mx-1" to="/createuser">SignUp</Link>

// // //       </div>

// // //     </div>
// // //   </div>
// // // </nav>

// // //     </div>
// // //   )
// // // // }
// // // import React, { useState } from 'react';
// // // import { Link, useNavigate } from 'react-router-dom';
// // // import Badge from 'react-bootstrap/Badge';

// // // export default function Navbar() {
// // //   const [authenticated, setAuthenticated] = useState(localStorage.getItem('authToken') !== null);
// // //   const navigate = useNavigate();

// // //   const handleLogout = () => {
// // //     localStorage.removeItem('authToken');
// // //     setAuthenticated(false);
// // //     navigate('/login');
// // //   };

// // //   return (
// // //     <div>
// // //       <nav className="navbar navbar-expand-lg navbar-dark bg-success">
// // //         <div className="container-fluid">
// // //           <Link className="navbar-brand fs-1" to="/">GoFood</Link>
// // //           <button
// // //             className="navbar-toggler"
// // //             type="button"
// // //             data-bs-toggle="collapse"
// // //             data-bs-target="#navbarNav"
// // //             aria-controls="navbarNav"
// // //             aria-expanded="false"
// // //             aria-label="Toggle navigation"
// // //           >
// // //             <span className="navbar-toggler-icon"></span>
// // //           </button>
// // //           <div className="collapse navbar-collapse" id="navbarNav">
// // //             <ul className="navbar-nav me-auto mb-2">
// // //               <li className="nav-item">
// // //                 <Link className="nav-link active fs-5" aria-current="page" to="/">
// // //                   Home
// // //                 </Link>
// // //               </li>
// // //               {authenticated && (
// // //                 <li className="nav-item">
// // //                   <Link className="nav-link fs-5 mx-3 active" to="/">
// // //                     My Orders
// // //                   </Link>
// // //                 </li>
// // //               )}
// // //             </ul>

// // //             {!authenticated ? (
// // //               <div className="d-flex">
// // //                 <Link className="btn bg-white text-success mx-1" to="/login">
// // //                   Login
// // //                 </Link>
// // //                 <Link className="btn bg-white text-success mx-1" to="/signup">
// // //                   Signup
// // //                 </Link>
// // //               </div>
// // //             ) : (
// // //               <div>
// // //                 <div className='btn bg-white text-success mx-2'>
// // //                   My Cart
// // //                   <Badge pill bg="danger">2</Badge>
// // //                 </div>
// // //                 <div className='btn bg-white text-danger mx-2' onClick={handleLogout}>
// // //                   Logout
// // //                 </div>
// // //               </div>
// // //             )}
// // //           </div>
// // //         </div>
// // //       </nav>
// // //     </div>
// // //   );
// // // }
// // import React,{useState,useEffect} from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import Badge from 'react-bootstrap/Badge';

// // export default function Navbar() {
// //   const navigate = useNavigate();
// //   // const authToken = localStorage.getItem('token');
// //   const [authToken, setAuthToken] = useState(localStorage.getItem('token')); // Initialize authToken with the token from localStorage

// //   useEffect(() => {
// //     // Update the authToken variable whenever the token in localStorage changes
// //     const newAuthToken = localStorage.getItem('token');
// //     setAuthToken(newAuthToken);
// //   }, []);

// //   const handleLogout = () => {
// //     // localStorage.removeItem('authToken')


// //     // navigate("/login")
// //     // console.log("Before logout, authToken:", authToken);
// //     // localStorage.removeItem("authToken");
// //     // console.log("After logout, authToken:", authToken);
// //     // navigate("/login");
// //     const handleLogout = () => {
// //       const newAuthToken = localStorage.getItem('token'); // Get the updated value

// //       // Remove the authToken from localStorage
// //       localStorage.removeItem('token');

// //       console.log("Before logout, authToken:", authToken);

// //       // Update the authToken in the component's state
// //       setAuthToken(newAuthToken);

// //       console.log("After logout, authToken:", newAuthToken);

// //       navigate("/login");
// //     }

// // }
// //   return (
// //     <div>
// //       <nav className="navbar navbar-expand-lg navbar-dark bg-success">
// //         <div className="container-fluid">
// //           <Link className="navbar-brand fs-1" to="/">
// //             GoFood
// //           </Link>
// //           <button
// //             className="navbar-toggler"
// //             type="button"
// //             data-bs-toggle="collapse"
// //             data-bs-target="#navbarNav"
// //             aria-controls="navbarNav"
// //             aria-expanded="false"
// //             aria-label="Toggle navigation"
// //           >
// //             <span className="navbar-toggler-icon"></span>
// //           </button>
// //           <div className="collapse navbar-collapse" id="navbarNav">
// //             <ul className="navbar-nav me-auto mb-2">
// //               <li className="nav-item">
// //                 <Link className="nav-link active fs-5" aria-current="page" to="/">
// //                   Home
// //                 </Link>
// //               </li>
// //               {authToken?

// //                 <li className="nav-item">
// //                   <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">
// //                     My Orders check
// //                   </Link>
// //                 </li>
// //               : "" }
// //             </ul>

// //             {(!localStorage.getItem('token'))?

// //               <form className="d-flex">
// //                 <Link className="btn bg-white text-success mx-1" to="/login">
// //                   Login
// //                 </Link>
// //                 <Link className="btn bg-white text-success mx-1" to="/createuser">
// //                   Signup
// //                 </Link>
// //               </form>
// //              : 

// //              <div>
// //                <div className='btn bg-white text-success mx-2'>
// //                  My Cart
// //                  <Badge pill bg="danger">2</Badge>
// //                </div>
// //                <button onClick={handleLogout} className='btn bg-white text-danger mx-2' >
// //                  Logout
// //                </button>
// //              </div>
// //             }
// //           </div>
// //         </div>
// //       </nav>
// //     </div>
// //   )
// // }

// import React from 'react'
// import { Link, useNavigate } from "react-router-dom";
// import Badge from 'react-bootstrap/Badge'



// export default function Navbar(props) {


//   let navigate = useNavigate();
//   const handlelogout = () => {


//     localStorage.removeItem('authToken')
//     console.log(localStorage.getItem('authToken'))
//     navigate("/login")

//   }




//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky"
//         style={{ boxShadow: "0px 10px 20px black", filter: 'blur(20)', position: "fixed", zIndex: "10", width: "100%" }}>
//         <div className="container-fluid">
//           <Link className="navbar-brand fs-1" to="/">GoFood</Link>
//           <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//             <span className="navbar-toggler-icon"></span>
//           </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home </Link>  {/* index.css - nav-link color white */}
//               </li>
//               {!localStorage.getItem('authToken') ? null : (
//                 <li className="nav-item">
//                   <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">
//                     My Orders
//                   </Link>
//                 </li>
//               )}

//             </ul>

//             {(!localStorage.getItem('authToken')) ?
//               <form className="d-flex">
//                 <Link className="btn bg-white text-success mx-1 " to="/login">Login</Link>
//                 <Link className="btn bg-white text-success mx-1" to="/signup">Signup</Link>
//               </form>


//               :
//               <div>

//                 <div className="btn bg-white text-success mx-2 ">
//                   My Cart
//                   <Badge pill bg="danger" >2
//                   </Badge>

//                 </div>



//                 <button onClick={handlelogout} className="btn bg-white text-success" >Logout</button></div>


//             }



//           </div>
//         </div>
//       </nav>
//     </div>
//   )
// }import React from 'react';
import React,{useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";
import Badge from 'react-bootstrap/Badge';
import axios from 'axios'
import Modal from '../Modal';
import Cart from '../screens/Cart';
import { useCart } from './ContextReducer';
export default function Navbar(props) {
  let data =useCart()
  let navigate = useNavigate();

const [cartView,setCartView] =useState(false)
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    console.log("Logged out. Token removed.");
    navigate('/login');
  };
//  const token = localStorage.getItem('token');
//   console.log("Token in localStorage:", token);
const token = async (req,res)=>{
  const authToken = res.data.authToken; // This should be the token received from your API response
  localStorage.setItem(authToken,'token'); 
}  


  
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-success position-sticky">
        <div className="container-fluid">
          <Link className="navbar-brand fs-1" to="/">Tasty Bites</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>
              </li>
              {localStorage.getItem('authToken') ?
              <>
                                <li className="nav-item">
                                    <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/myOrder" >My Orders</Link>  {/* index.css - nav-link color white */}
                                </li>
                                 <li className="nav-item">
                                 <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/updateinfo" >Update Profile</Link>  {/* index.css - nav-link color white */}
                             </li>
                             </>
                                 : null}
            </ul>

            {!localStorage.getItem('authToken')? 
            
              <form className="d-flex">
                <Link className="btn bg-white text-success mx-1" to="/login">
                  Login
                </Link>
                <Link className="btn bg-white text-success mx-1" to="/createuser">
                  Signup
                </Link>
              </form>
            : 
              <div>
                <div className="btn bg-white text-success mx-2" onClick={()=>{setCartView(true)}}>
                  My Cart {" "}
                  <Badge pill bg="danger">{data.length}</Badge>
                </div>
                {cartView ? <Modal onClose={()=>setCartView(false)}><Cart/></Modal> : null}
                <button onClick={handleLogout} className="btn bg-white text-success">
                  Logout
                </button>
              </div>
             }
          </div>
        </div>
      </nav>
    </div>
  );
}


