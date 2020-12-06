import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Chat from './Chat';
import Sidebar from './Sidebar';
import { selectUser } from './features/userSlice'
import Login from './Login';
import { auth } from './firebase'
import {login , logout} from './features/userSlice'

function App() {
  const dispach = useDispatch();
  const user = useSelector(selectUser)
  
  useEffect(()=>{
    auth.onAuthStateChanged((authUser)=> {
      console.log("User is ---------->" , authUser)
      if (authUser) {
        dispach(login({
          uid:authUser.uid,
          photo:authUser.photoURL,
          email:authUser.email,
          displayName: authUser.displayName
        }))
      }
      else{
        dispach(logout())
      }
    })
  }, [dispach])
  return (
    <div className="app">
      {user ? (
        <>
        <Sidebar/>
        <Chat/>
        </>
      )  
      : (
        <Login/>
      )
      }
    </div>
  );
}

export default App;
