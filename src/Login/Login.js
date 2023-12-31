import React, { useState } from 'react';
import "./Login.css";
import {useDispatch} from "react-redux";
import {auth} from "../firebase";
import {login} from "../features/userSlice"

function Login() {
  const[email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[name,setName]=useState("");
  const[profilepic,setProfilepic ]=useState("");
  const dispatch=useDispatch();


    const loginToApp=(e)=>{
      e.preventDefault();
      auth.signInWithEmailAndPassword(email,password)
      .then(userAuth=>{
        dispatch(login({
          email:userAuth.user.email,
          uid:userAuth.user.uid,
          displayName:userAuth.user.displayName,
          photoUrl:userAuth.user.photoURL,
        }))
      }).catch(error=>alert(error));
    };
    const register=()=>{
      if(!name){
        return alert("please enter a full name")
      }
      auth.createUserWithEmailAndPassword(email,password)
      .then((userAuth)=>{
        userAuth.user.updateProfile({
          displayName:name,
          photoURL:profilepic,
        })
        .then(()=>{
          dispatch(login({
            email:userAuth.user.email,
            uid:userAuth.user.uid,
            displayName:name,
            photoURL:profilepic,
          })
          );
        });
      }).catch((error)=>alert(error));
    };

    

  return (
    <div className='login'>
        <img
            src='https://wallpapercave.com/w/wp4421330.jpg' 
            alt="linked in logo"
        />  
        <form>
            <input  value={name} onChange={(e)=>setName(e.target.value)} type='text' placeholder='Full Name(require if registering)'/>
           

            <input value={profilepic} onChange={(e)=>setProfilepic(e.target.value)} placeholder='Profilec pic URL(optional)' type='text'/>

            <input value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email' type='email'/>

            <input value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password' type='password'/>

            <button type='submit' onClick={loginToApp}>SignIn</button>
        </form> 
        <p>Not a member?{" "}
            <span className='login__register' onClick={register}>Register Now</span>
        </p>
    </div>
  )
}

export default Login
