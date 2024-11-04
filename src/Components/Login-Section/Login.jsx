import React from 'react'
import './Login.css'
import 'remixicon/fonts/remixicon.css';
import cone from './img/cone.png'
import dron from './img/icosahedron.png'
import spehere from './img/sphere.png'
import torus from './img/torus.png'

const Login = () => {
  return (
    <div className='login-container'>
        <form action="" class="form-container">
            <h1 class="login__title">Mobitel - IAMS</h1>

            <div class="login__content">
               <div class="login__box">
                  <i class="ri-user-3-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="email" required class="login__input" id="login-email" placeholder=" "/>
                     <label for="login-email" class="login__label">Email</label>
                  </div>
               </div>

               <div class="login__box">
                  <i class="ri-lock-2-line login__icon"></i>

                  <div class="login__box-input">
                     <input type="password" required class="login__input" id="login-pass" placeholder=" "/>
                     <label for="login-pass" class="login__label">Password</label>
                     <i class="ri-eye-off-line login__eye" id="login-eye"></i>
                  </div>
               </div>
            </div>

            <div class="login__check">
               <div class="login__check-group">
                  <input type="checkbox" class="login__check-input" id="login-check"/>
                  <label for="login-check" class="login__check-label">Remember me</label>
               </div>

               <a href="#" class="login__forgot">Forgot Password?</a>
            </div>

            <button type="submit" class="login__button">Login
                <img src={cone} alt="" class="button__cone"/>
                <img src={torus} alt="" class="button__torus"/>
                <img src={dron} alt="" class="button__icosahedron"/>
                <img src={spehere} alt="" class="button__sphere"/>  
            </button>

            <p class="login__register">
               Don't have an account? <a href="#">Register</a>
            </p>
         </form>
    </div>
  )
}

export default Login