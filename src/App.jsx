import CssBaseline from '@mui/material/CssBaseline'
import TodoList from './TodoList'
import Navbar from './Navbar'

import './App.css'

function App() {
  return (
    <>     
      <Navbar />
      {/* CssBaseline은 기본적인 CSS를 초기화해주는 컴포넌트입니다. */}
      <CssBaseline />
      <TodoList />
    </>
  )
}

export default App
