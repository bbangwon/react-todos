import CssBaseline from '@mui/material/CssBaseline'
import TodoList from './TodoList'

import './App.css'

function App() {
  return (
    <>     
      {/* CssBaseline은 기본적인 CSS를 초기화해주는 컴포넌트입니다. */}
      <CssBaseline />
      <h1>할일목록</h1>
      <TodoList />
    </>
  )
}

export default App
