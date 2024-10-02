import { useDispatch } from 'react-redux'
import authService from './appWrite/auth'
import { useState,useEffect } from 'react'
import { login,logout } from './Store/authSlice'
import {Header,Footer} from "./Components/index"
import { Outlet } from 'react-router-dom'
import './App.css'

function App() {

  let checking;
  const [loading,Setloading] = useState(true)
  const dispatch = useDispatch()



  useEffect(() => {
    authService.getCurrentUser().then((userData)=>{    
      if(userData) {
        dispatch(login({userData}))
      }
      else {
        dispatch(logout())
      }
    })
    .finally(Setloading(false))
  },)
  
  

  return !loading ?  (
   <div>
    <Header/>
    {/* <main> */}
      {/* <Outlet/> */}
    {/* </main> */}
    {/* <Footer/> */}
   </div>
  ) : null
}

export default App
