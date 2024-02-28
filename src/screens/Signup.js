import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
export default function Signup() {
const navigate=useNavigate()
    const [ credentials ,  setcredentials ] = useState({name:"",email:"",password:"",geolocation:""})
    const handleSubmit= async(e)=>{

e.preventDefault();
console.log(JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation}))
const response = await fetch("http://localhost:5000/api/createuser",{
    method : 'POST',
    headers: {
        'Content-Type' : 'application/json'
    },
    body: JSON.stringify({name:credentials.name,email:credentials.email,password:credentials.password,location:credentials.geolocation})
});
    const json = await response.json()
    console.log(json);

    

    if(json.success){
      // localStorage.setItem("authToken",json.authToken);
      console.log(localStorage.getItem('authToken'))
        
       
        navigate("/login");
        

    } else{alert("Enter valid credentials")}
    }

    const onChange=(event)=>{
        setcredentials({...credentials,[event.target.name]:event.target.value})
    }
  return (
  
    <div style={{ backgroundImage: 'url("https://images.pexels.com/photos/1565982/pexels-photo-1565982.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")', backgroundSize: 'cover',height: '100vh' }}>
      <div>
      <Navbar />
      </div>
<div className='container'>
<form className='w-50 m-auto mt-5 border bg-dark border-success rounded' onSubmit={handleSubmit}>
<div className="mb-3">
    <label htmlFor="name" className="form-label text-light">Name</label>
    <input type="text" className="form-control"  name='name' value={credentials.name} onChange={onChange}/>
    
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label text-light">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" name='email' value={credentials.email} onChange={onChange}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-light">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label text-light">Address</label>
    <input type="text" className="form-control"  name='geolocation' value={credentials.geolocation} onChange={onChange}/>
  </div>
  
  <button type="submit" className="m-3 btn btn-success">Submit</button>
  <Link to="/login" className='m-3 mx-1 btn btn-success'>Existing User</Link>
</form>
</div>
</div>
  )
}
