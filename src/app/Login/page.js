"use client"
import React ,{useEffect, useState} from "react"
// import * as style from "./index.module.css";
import { AiOutlineSecurityScan } from "react-icons/ai";
import { FaGoogle,FaFacebook } from "react-icons/fa";
import {auth,provider} from "./config";
import { signInWithPopup } from "firebase/auth";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";


import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



import * as style from "./page.module.css"
// import Home from "./Home";
// import { useState } from "react";

const Loginpage = () => {
    const[value,setValue]=useState("");
    const handleClick=()=>{
        signInWithPopup(auth,provider).then((data)=>{
          if(data.user.email){
            toast.success("Login successfully" ,{
              position:"top-right",
              autoClose:2000,
            })
              setValue(data.user.email)
              localStorage.setItem("email",data.user.email)

            console.log("if")
            }

        })
    }
    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })
  return (
    <div className={style.pmain}>
       <Link href="/">

      <div className={style.arrow}>        <MdArrowBack /></div>
      </Link>

        <div className={style.mainone}>

        <div className={style.mlogo}>
          {/* <i class="fa-brands fa-spotify"></i> */}
          <AiOutlineSecurityScan />

          {/* <h3>Spotify</h3> */}
        </div>
        </div>
      <div className={style.secmain}>
          <h1 className={style.heading}> Login to start</h1>
          {/* <p className={style.para}>Listening</p> */}

       
            <ToastContainer />

        <div className={style.website}>
          <div className={style.websitetwo}>
          <div className={style.g}>
            {/* <i class="fa-brands fa-google"></i> */}
            <FaGoogle />

            {/* {value?<Home/>: */}
            <button className={style.t} onClick={handleClick}> Continue with google</button>
  {/* } */}
          </div>
          <div className={style.f}>
            {/* <i class="fa-brands fa-facebook"></i> */}
            <FaFacebook />

            <p className={style.t}> Continue with facebook</p>
          </div>
          </div>
         
          <div className={style.sign}>
            <p className={style.psign}> Don't have account ? </p>
            <p className={style.tsign}> sign up here.</p>
          </div>
          <div className={style.foot}>

          <div className={style.mfoot}>
          <p>This site is protected by reCAPTCHA and the <span className={style.spara} >Google</span></p>
          <p><span className={style.spara} >Privacy Policy</span> and <span className={style.spara} >Terms of Service </span>apply.</p>
        </div>
        </div>
        </div>
      </div>
    </div>

  );
};
export default Loginpage;

