import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import CssBaseline from '@mui/material/CssBaseline'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>     
      {/* CssBaseline은 기본적인 CSS를 초기화해주는 컴포넌트입니다. */}
      <CssBaseline />
      <h1>할일목록</h1>
    </>
  )
}

export default App
