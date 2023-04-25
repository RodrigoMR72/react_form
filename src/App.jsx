import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { UserForm } from './components/UserForm'
import { UserFormObjectUser } from './components/UserFormObjectUser'

//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="app">
      {/* <UserForm /> */}
      <UserFormObjectUser />
        
    </ div>
  )
}

export default App
