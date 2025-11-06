import { useState } from 'react'
import TARSWebsite from './pages/home'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TARSWebsite/>
    </>
  )
}

export default App
