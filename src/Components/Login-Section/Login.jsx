import React, { useState } from 'react';
import './Login.css';
import 'remixicon/fonts/remixicon.css';
import cone from './img/cone.png';
import dron from './img/icosahedron.png';
import spehere from './img/sphere.png';
import torus from './img/torus.png';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toastr from '../toastr-config/ToastrConfig';

const Login = () => {
    const [visible, setVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) =>{
      e.preventDefault();

      try{
         const response = await axios.post("http://localhost:8090/vems_backend/api/v1/auth/authentication",{
            email,
            password
         });

         if(response.data.success){
            const { accessToken, refreshToken } = response.data.data;
            sessionStorage.setItem('accessToken', accessToken);
            sessionStorage.setItem('refreshToken', refreshToken);

            handleLoginRedirect(response.data.message);
            
         }else{
            toastr.error(response.data.message);
         }
      }catch(error){
            console.log(error);
            toastr.error("Network Error");
      }finally{}
    };

    const handleLoginRedirect = (message) => {
      switch (message) {
        case "Security":
          navigate("/security-approval");
          break;
        case "HR":
          navigate("/user");
          break;
        case "Manager":
          navigate("/manager-approval");
          break;
        default:
          navigate("/visitor");
      }
    };

  return (
    <div className='login-container'>
        <form action="" className="form-container" onSubmit={handleSubmit}>
            {/* <h1 className="login__title">Mobitel - IAMS</h1> */}

            <div className="login__content">
               <div className="login__box">
                  <i className="ri-user-3-line login__icon"></i>

                  <div className="login__box-input">
                     <input 
                        type="email" 
                        className="login__input" 
                        id='login-email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}   
                        required
                     />
                     <label htmlFor="login-email" className="login__label">Email</label>
                  </div>
               </div>

               <div className="login__box">
                  <i className="ri-lock-2-line login__icon"></i>

                  <div className="login__box-input">
                     <input 
                        type={visible ? "text" : "password"} 
                        className="login__input" 
                        id='login-pass'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                     />
                     <label htmlFor="login-pass" className="login__label">Password</label>
                     <i className={`${visible ? "ri-eye-line":"ri-eye-off-line"} login__eye`} id="login-eye" onClick={()=>setVisible((cur) => !cur)}></i>
                  </div>
               </div>
            </div>

            <div className="login__check">
               <div className="login__check-group">
                  <input type="checkbox" className="login__check-input" id="login-check"/>
                  <label htmlFor="login-check" className="login__check-label">Remember me</label>
               </div>

               <a href="#" className="login__forgot">Forgot Password?</a>
            </div>

            <button type="submit" className="login__button">Login
                <img src={cone} alt="" className="button__cone"/>
                <img src={torus} alt="" className="button__torus"/>
                <img src={dron} alt="" className="button__icosahedron"/>
                <img src={spehere} alt="" className="button__sphere"/>  
            </button>

            <p className="login__register">
               Don't have an account? <a href="#">Register</a>
            </p>
         </form>
    </div>
  )
}

export default Login