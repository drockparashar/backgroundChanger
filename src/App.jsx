import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")

  return (
    <>
      <div className='flex w-screen h-screen justify-center'  style={{backgroundColor:color}}>
        <div className='button-container flex gap-10'>
          <button className='butoon bg-red-700 w-20 h-10 mt-52' onClick={()=>setColor("red")} >RED</button>
          <button className='butoon bg-blue-700 w-20 h-10 mt-52' onClick={()=>setColor("blue")}>BLUE</button>
          <button className='butoon bg-green-700 w-20 h-10 mt-52'onClick={()=>setColor("green")}>GREEN</button>
          <button className='butoon bg-yellow-700 w-20 h-10 mt-52'onClick={()=>setColor("yellow")}>YELLOW</button>
          <button className='butoon bg-purple-700 w-20 h-10 mt-52'onClick={()=>setColor("purple")}>PURPLE</button>
          <button className='butoon bg-pink-700 w-20 h-10 mt-52'onClick={()=>setColor("pink")}>PINK</button>
        </div>
      </div>
    </>
  )
}

export default App
