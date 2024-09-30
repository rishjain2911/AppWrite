import { useDispatch } from 'react-redux'
import authService from './appWrite/auth'
import { useState,useEffect } from 'react'

import './App.css'

function App() {

  const [loading,Setloading] = useState(true)
  const dispatch = useDispatch()



  useEffect(() => {
    
  }, [third])
  
  

  return (
    <>Hi Rishabh</>
  )
}

export default App
