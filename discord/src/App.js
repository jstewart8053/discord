import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import './App.css';
import Chat from './components/Chat';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import { selectUser } from './components/userSlice';
import { login, logout } from './components/userSlice';
import { auth } from './firebase';


function App() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log('user is', authUser);
      if (authUser) {
        // the user is logged in
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          displayName: authUser.displayName,
        }))
      } else {
        dispatch(logout());
        // the user is logged out
      }
    })
  }, [dispatch])

  return (
    <div className='app'>
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
          <Login />
        )}
    </div>
  );
}

export default App;
