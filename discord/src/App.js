import React from 'react';
import { useSelector } from "react-redux";
import './App.css';
import Chat from './components/Chat';
import Sidebar from "./components/Sidebar";
import { selectUser } from './components/userSlice';


function App() {
  const user = useSelector(selectUser);

  return (
    <div className='app'>
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (
          <h2> You need to login </h2>
        )}
    </div>
  );
}

export default App;
