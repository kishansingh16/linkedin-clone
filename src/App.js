import React, { useEffect } from 'react';
import './App.css';
import { login,logout } from './features/userSlice';
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import {selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux'
import Login from "./Login/Login";
import { auth } from './firebase';
import Widgets from './Widgets/Widgets';

function App() {
  const user=useSelector(selectUser);
  const dispatch=useDispatch();
  useEffect(()=>{
    auth.onAuthStateChanged(userAuth=>{
      if(userAuth){
        //user is logged in
        dispatch(login(
          {
            email:userAuth.email,
            uid:userAuth.uid,
            displayName:userAuth.displayName,
            photoUrl:userAuth.photoURL,
          }
        ))
      }
      else{
        // user log out
        dispatchEvent(logout());
      }
    })
  },[])

  return (
    <div className="app">
    
      <Header/>

      {!user?(
       <Login/>
       ):(
       <div className='app__body'>
          <Sidebar/>
          <Feed/>
        {/* Widgets */}
        <Widgets/>
      </div>

      )}
     
     
      
    </div>
  );
}

export default App;
