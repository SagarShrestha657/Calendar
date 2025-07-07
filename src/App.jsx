import { useState } from 'react'
import CalendarPage from './pages/CalendarPage';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <CalendarPage />
    </>
  )
}

export default App
