import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='w-full h-[100vh] bg-amber-200'>

      <Routes path ="/">
      
          <Route path ="/">
            <Route path='/home' element ={<h1>home page</h1>}/>
            <Route path='/register' element ={<h1>register page</h1>}/>
            <Route path='/admin' element ={<h1>admin page</h1>}/>
            
          </Route>
      </Routes>



      </div>
    </BrowserRouter>
  )
}

export default App
 