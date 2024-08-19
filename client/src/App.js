import './App.css';
import React from 'react';
import {BrowserRouter , Routes, Route, Navigate}from 'react-router-dom'
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Profile from './pages/profile';
import Templates from './pages/templates';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>

           <Route path='/' element={<ProtectedRoutes><Home /></ProtectedRoutes>} />
           <Route path='/home' element={<ProtectedRoutes><Home/></ProtectedRoutes>}/>
           <Route path='/profile' element={<ProtectedRoutes><Profile/></ProtectedRoutes>}/>
           <Route path='/templates/:id' element={<ProtectedRoutes><Templates/></ProtectedRoutes>}/>
           <Route path='/login' element={<Login/>}/>
           <Route path='/register' element={<Register/>}/>
           
          </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;

export function ProtectedRoutes(props){
  if(localStorage.getItem("shaikhresume-user")){
    return props.children
  }else{
    return <Navigate to ="/login" />
  }
   

}