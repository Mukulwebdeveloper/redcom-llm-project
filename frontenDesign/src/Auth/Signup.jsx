import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import '../App.css'
import redcomlogo from ".././assets/Redcom1.png"
import {auth, provider} from "../googleSignin/config"
import {signInWithPopup} from "firebase/auth"
// import "bootstrap/dist/js/bootstrap.bundle/bootstrap.js"
import VirtualAssistant from '../Component/ChatFolder/VirtualAssistant'
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';



const Signup = () => {

  const [user, setUser] = useState(                //for send userDetail to mongodb
    {
      name:"",
      email:"",
      password:"",
      confirmPassword:""
    }
  )

  const navigate = useNavigate();

    const handleChange =(e) =>{
      const {name , value} = e.target
      setUser({
        ...user,
        [name]: value
      })
    }

    const [value, setValue] = useState('')
    const handleClick =()=> {
        signInWithPopup(auth,provider).then((data) => {
             setValue(data.user.email);
             localStorage.setItem("email",data.user.email)
        })
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

const Signup = () =>{
  const {name, email, password, confirmPassword} = user
  if(name && email && password && (password === confirmPassword) ){
    // alert("posted");
    axios.post("http://localhost:5000/signup", user).then((res) => 
    {alert(res.data.message)
      navigate("/login")
    });

  }
  else{
    alert("Invalid inputs");
  }
}
   
  return (
   
<div>

{value?<VirtualAssistant></VirtualAssistant>:
<div className="container-fluid loginpage p-5 ">
       <div className="row ">
      
       <div className="col-lg-2"></div>
       <div className="col-lg-8 mt-5">
        <div className="row main-container mt-5">
            <div className="col-lg-5 bg-dark " >
            <div className="p-4 mt-5">
          
            {/* <!-- social login buttons start --> */}
            {/* <div className="row social-buttons mt-4 ms-4">
              <div className="col-xs-4 col-sm-4 col-md-12 mt-3">
                <Link to="#" className="btn btn-primary btn btn-lg mt-5 ms-5  btn-facebook">
                  <i className="fa fa-facebook"></i> <span className="hidden-xs hidden-sm fs-3">    Signin with facebook</span>
                </Link>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-12 mt-3 ms-2">
                <Link to="#" className="btn btn-warning  btn btn-lg mt-5 ms-5 btn-twitter">
                  <i className="fa fa-twitter"></i> <span className="hidden-xs hidden-sm fs-3">     Signin with twitter</span>
                </Link>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-12 mt-3 ms-2">
                <Link to="#" className="btn btn-danger  btn btn-lg mt-5 ms-5 btn-google">
                
                  <i className="fa fa-google-plus"></i> <span className="hidden-xs hidden-sm fs-3" onClick={handleClick}>    Signin with google</span>
                </Link>
              </div>
            </div> */}
            {/* <!-- ./social-buttons --> */}

            <div className="container mt-5">
              <div className="row d-flex justify-content-center align-items-center mt-5" >
                <div className="col-lg-8 mt-5">
                <div className="mt-5">
                <div className="mt-5">
                <div className="mt-5">
                  <img src={redcomlogo} alt="" width={"200px"}/>
                  <div className="display-1 mt-3 fw-bold" 
style= {{"background": "linear-gradient(90deg, purple, aqua)",
                            "-webkit-background-clip":"text",
                              "-webkit-text-fill-color":"transparent"}}
>REDCOM</div>
</div>
</div>
</div>
                </div>
              </div>
            </div>
            </div>
</div>
    <div className="col-lg-7 p-5 bg-light">
                   
        <form>
  <div className="form-group">
  <div className="authfy-heading">
              <h2 className="auth-title  text-center text-dark fs-1">Register to your account</h2>
              <p className="fs-4 mt-2 text-center text-dark">Already have an account? <Link   to="/" className="lnk-toggler" data-panel=".panel-signup" >Login Now!</Link></p>
            </div>
    {/* <label for="exampleInputEmail1" className="fs-5">Email address</label> */}
    <input type="text" value={user.name} onChange={handleChange} className="form-control mt-5 inputbox p-4" id="exampleInputEmail1" name='name' aria-describedby="emailHelp" placeholder="Enter Name"/>
    <input type="email" value={user.email} onChange={handleChange} className="form-control mt-5 inputbox p-4" id="exampleInputEmail1" name='email'  placeholder="Enter Your Email"/>
 
  </div>
  <div className="form-group mt-3">
    {/* <label for="exampleInputPassword1" className="fs-5">Password</label> */}
    <input type="password"  value={user.password} onChange={handleChange} className="form-control mt-4 inputbox p-4" id="exampleInputPassword1" name="password"  placeholder="Password"/>
  </div>
  <div className="form-group mt-3">
    {/* <label for="exampleInputPassword1" className="fs-5">Password</label> */}
    <input type="password"  value={user.confirmPassword} onChange={handleChange} className="form-control mt-4 inputbox p-4" id="exampleInputPassword" name="confirmPassword" placeholder="Confirm Password"/>
  </div>
  <div className="form-check mt-3">
    <input type="checkbox" className="form-check-input mt-3" id="exampleCheck1"/>
    <label className="form-check-label fs-4 mt-2 text-dark" for="exampleCheck1">Remember me</label>
  </div>
  <div type="submit" onClick={Signup} className="btn btn w-100 mt-3 btn btn-lg mt-5 login fs-3"  style={{"backgroundColor":"blueviolet","color":"white" }}>Signup </div>
  <div className="my-3 text-center text-dark h2">Or</div>
  <Link to="/" type="submit" className="btn btn w-100 btn btn-lg login fs-3"  style={{"backgroundColor":"blueviolet","color":"white" }}>Login Now</Link>
</form>
            </div>
     
  </div>
        </div>
        <div className="col-lg-2"></div>
       </div>
    </div>
}
</div>
  )
}

export default Signup