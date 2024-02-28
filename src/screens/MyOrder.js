// import React, { useState , useEffect} from 'react'
// import Footer from '../components/Footer'
// import Navbar from '../components/Navbar'
// export default function MyOrder() {
//   const [orderData ,setOrderData] = useState()


//   const fetchMyOrder = async () => {
//     console.log(localStorage.getItem('userEmail'))
//     await fetch("http://localhost:5000/api/myorderData", {
//         // credentials: 'include',
//         // Origin:"http://localhost:3000/login",
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json'
//         },
//         body:JSON.stringify({
//             email:localStorage.getItem('userEmail')
//         })
//     }).then(async (res) => {
//         let response = await res.json()
//         await setOrderData(response)
//     })



//     // await res.map((data)=>{
//     //    console.log(data)
//     // })


// }

// useEffect(() => {
//     fetchMyOrder()
// }, [])


//   return (
//     <>
//     <div><Navbar/></div>

//     <div className='container'>
//                 <div className='row'>

//                     {orderData !== 0 ? Array(orderData).map(data => {
//                         return (
//                             data.orderData ?
//                                 data.orderData.order_data.slice(0).reverse().map((item) => {
//                                     return (
//                                         item.map((arrayData) => {
//                                             return (
//                                                 <div  >
//                                                     {arrayData.Order_date ? <div className='m-auto mt-5'>

//                                                         {data = arrayData.Order_date}
//                                                         <hr />
//                                                     </div> :

//                                                         <div className='col-12 col-md-6 col-lg-3' >
//                                                             <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>

//                                                             </div>

//                                                         </div>



//                                                     }

//                                                 </div>
//                                             )
//                                         })

//                                     )
//                                 }) : ""
//                         )
//                     }) : ""}
//                 </div>


//             </div>
//     <div><Footer/></div>

//     </>
//   )
// }


  
// --------------------------------

//   use this if that doest work


// import React, { useState, useEffect } from 'react';
// import Footer from '../components/Footer';
// import Navbar from '../components/Navbar';

// export default function MyOrder() {
//   const [orderData, setOrderData] = useState(null);

//   const fetchMyOrder = async () => {
//     console.log(localStorage.getItem('userEmail'));
//     await fetch("http://localhost:5000/api/myorderData", {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         email: localStorage.getItem('userEmail'),
//       }),
//     }).then(async (res) => {
//       let response = await res.json();
//       await setOrderData(response);
//     });
    
//   }


  
//   useEffect(() => {
//     fetchMyOrder().then((data) => {
//       console.log(data);
//     });
//   }, []);
//   return (
//     <>
//       <div><Navbar /></div>
//       <div className='container'>
//         <div className='row'>
//           {orderData && Array.isArray(orderData) ? (
//             orderData.map((data) => {
//               return data.orderData ? data.orderData.order_data.map((item) => {
//                 return item.map((arrayData) => {
//                   return (
//                     <div>
//                       {item.Order_date ? (
//                         <div className='m-auto mt-5'>
//                           {data = item.Order_date}
//                           <hr />
//                         </div>
//                       ) : (
//                         <div className='col-12 col-md-6 col-lg-3'>
//                           <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                            Check
//                             <div className="card-body">
//                               <h5 className="card-title">{item.name}</h5>
//                               <div className='container w-100 p-0' style={{ height: "38px" }}>
//                                 <span className='m-1'>{item.qty}</span>
//                                 <span className='m-1'>{item.size}</span>
//                                 <span className='m-1'>{item}</span>
//                                 <div className=' d-inline ms-2 h-100 w-20 fs-5' >
//                                   ₹{item.price}/-
//                                 </div>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       )}
//                     </div>
//                   );
//                 });
//               }) : "";
//             })
//           ) : (
//             <p style={{"marginTop":"50px"}}>We will develop this page in the future.</p>
//           )}
//         </div>
//       </div>
//       <div style={{"marginTop":"450px"}}><Footer /></div>
//     </>
//   );
// }




import React, { useState, useEffect } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function MyOrder() {
  const [orderData, setOrderData] = useState([]);

  const fetchMyOrder = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/myOrderData", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: localStorage.getItem('userEmail'),
        }),
      });

      if (response.status === 200) {
        const data = await response.json();
        setOrderData(data); 
        console.log(data)
      // Set the order data correctly
      } else {
        console.error("Failed to fetch order data.");
      }
    } catch (error) {
      console.error("Error while fetching order data:", error);
    }
  }

  useEffect(() => {
    fetchMyOrder();
  }, []);

  return (
    <div>
      <div><Navbar /></div>
      
      <div className='container'>
                <div className='row'>

                    {orderData !== 0 ? Array(orderData).map(data => {
                        return (
                            data.orderData ?
                                data.orderData.order_data.slice(0).reverse().map((item) => {
                                    return (
                                        item.map((arrayData) => {
                                            return (
                                                <div  >
                                                    {arrayData.Order_date ? <div className='m-auto mt-5'>

                                                        {data = arrayData.Order_date}
                                                        <hr />
                                                    </div> :

                                                        <div className='col-12 col-md-6 col-lg-3' >
                                                            <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
                                                                {/* <img src={arrayData.src} className="card-img-top" alt="..." style={{ height: "120px", objectFit: "fill" }} /> */}
                                                                <div className="card-body">
                                                                    <h5 className="card-title">{arrayData.name}</h5>
                                                                    <div className='container w-100 p-0' style={{ height: "38px" }}>
                                                                        <span className='m-1'>{arrayData.qty}</span>
                                                                        <span className='m-1'>{arrayData.size}</span>
                                                                        <span className='m-1'>{data}</span>
                                                                        <div className=' d-inline ms-2 h-100 w-20 fs-5' >
                                                                            ₹{arrayData.price}/-
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>



                                                    }

                                                </div>
                                            )
                                        })

                                    )
                                }) : ""
                        )
                    }) : ""}
                </div>


            </div>
      <div style={{"marginTop":"420px"}}><Footer /></div>
    </div>
  );
}








// <div className='container'>
// <div className='row'>
//   {orderData && Array.isArray(orderData) && orderData.length !== 0 ? (
//     orderData.map((data, dataIndex) => (
//       <div key={dataIndex}>
//         {data.order_data.map((item, index) => (
//           <div key={index}>
//             {item.Order_date ? (
//               <div className='m-auto mt-5'>
//                 {item.Order_date}
//                 <hr />
//               </div>
//             ) : (
//               <div className='col-12 col-md-6 col-lg-3'>
//                 <div className="card mt-3" style={{ width: "16rem", maxHeight: "360px" }}>
//                   <div className="card-body">
//                     <h5 className="card-title">{item.name}</h5>
//                     <div className='container w-100 p-0' style={{ height: "38px" }}>
//                       <span className='m-1'>{item.qty}</span>
//                       <span className='m-1'>{item.size}</span>
//                       <span className='m-1'>{item.Order_date}</span>
//                       <div className='d-inline ms-2 h-100 w-20 fs-5'>
//                         ₹{item.price}/-
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         ))}
//       </div>
//     ))
//   ) : (
//     <p className="m-5">We sent your cart to your email,please check.</p>
//   )}
// </div>
// </div>