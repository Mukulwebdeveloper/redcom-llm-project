import React, { useEffect, useState } from 'react'
import "bootstrap/dist/css/bootstrap.css";
import '../App.css'
import redcomlogo from ".././assets/Redcom1.png"
import {auth, provider} from "../googleSignin/config"
import {signInWithPopup} from "firebase/auth"
// import "bootstrap/dist/js/bootstrap.bundle/bootstrap.js"
import VirtualAssistant from '../Component/ChatFolder/VirtualAssistant'
// import { Link } from 'react-router-dom';
import axios from "axios";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
// import navigate from "@reach-router";
// import {useHistory} from "react-router-dom";




const Login = () => {

 

  const [user, setUser] = useState(
    {
      
      email:"",
      password:""
     
    }
    )

  const navigate = useNavigate(); 
  // const history = useHistory();  
  const LoginUser = () =>{

    const {email, password} = user
    if( email && password){
      // alert("posted");
      axios.post("http://localhost:5000/login", user).then((res) =>
       {alert(res.data.message)
        // setLoginUser("Login Successful");
       
      if(res.data.message === "User not found"){
        navigate("/signup")
      }if(res.data.message === "Error during login"){
        navigate("/signup")
      }
      else{
        navigate("/home", {state:{Useremail:email}});
      }
        // console.log(setLoginUser);
        // history.push("/")
      //  if(setLoginUser){
         
      //    navigate("/");
      //  }else{
      //   navigate("/login");
      //  }

       
      
    })
  }

    else{
      alert("Invalid inputs");
    }

  }

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
  return (
   
<div>
{value?<VirtualAssistant ></VirtualAssistant>:
<div className="container-fluid loginpage p-5 ">
       <div className="row ">
      {/* {console.log(user)} */}
       <div className="col-lg-2"></div>
       <div className="col-lg-8 mt-5">
        <div className="row main-container mt-5">
            <div className="col-lg-5 bg-dark" >
            <div className="p-4 mt-5">
           
            {/* <!-- social login buttons start --> */}
            {/* <div className="row social-buttons mt-4 ms-4">
              <div className="col-xs-4 col-sm-4 col-md-12 mt-3">
                <Link to="" className="btn btn-primary btn btn-lg mt-5 ms-5  btn-facebook">
                  <i className="fa fa-facebook"></i> <span className="hidden-xs hidden-sm fs-3">Signin with facebook</span>
                </Link>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-12 mt-3 ms-2">
                <Link to="" className="btn btn-warning  btn btn-lg mt-5 ms-5 btn-twitter">
                  <i className="fa fa-twitter"></i> <span className="hidden-xs hidden-sm fs-3">Signin with twitter</span>
                </Link>
              </div>
              <div className="col-xs-4 col-sm-4 col-md-12 mt-3 ms-2">
                <Link to="" className="btn btn-danger  btn btn-lg mt-5 ms-5 btn-google">
                
                  <i className="fa fa-google-plus"></i> <span className="hidden-xs hidden-sm fs-3" onClick={handleClick}>Signin with google</span>
                </Link>
              </div>
            </div> */}
            {/* <!-- ./social-buttons --> */}

            <div className="container mt-5">
              <div className="row d-flex justify-content-center align-items-center mt-5" >
                <div className="col-lg-8 mt-5">
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
    <div className="col-lg-7 p-5 bg-light">
                   
        <form>
  <div className="form-group">
  <div className="authfy-heading">
              <h2 className="auth-title  text-center text-dark fs-1">Login to your account</h2>
              <p className="fs-4 mt-2 text-center text-dark">Don’t have an account?  <Link to= "/signup" className="lnk-toggler" data-panel=".panel-signup" >Sign Up Free!</Link></p>
            </div>
    {/* <label for="exampleInputEmail1" className="fs-5">Email address</label> */}
    <input type="email" className="form-control mt-5 inputbox p-4" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" name='email' onChange={handleChange}/>
 
  </div>
  <div className="form-group mt-3">
    {/* <label for="exampleInputPassword1" className="fs-5">Password</label> */}
    <input type="password" className="form-control mt-4 inputbox p-4" id="exampleInputPassword1" placeholder="Password" name='password' value={user.password} onChange={handleChange}/>
  </div>
  <div className="form-check mt-3">
    <input type="checkbox" className="form-check-input mt-3" id="exampleCheck1"/>
    <label className="form-check-label fs-4 mt-2 text-dark" for="exampleCheck1" >Remember me</label>
  </div>
  <div onClick={LoginUser} type="submit" className="btn btn w-100 mt-3 btn btn-lg mt-5 login fs-3" style={{"backgroundColor":"blueviolet","color":"white" }}>Login</div>
  <div className="my-3 text-center text-dark h2">Or</div>
  <Link to="/signup"  type="submit" className="btn btn w-100  btn btn-lg  login fs-3"  style={{"backgroundColor":"blueviolet","color":"white" }}>Create an account</Link>
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

export default Login