import { useState } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';

const initialTodos = [
    { id: 1, text: '리액트 배우기', completed: false },
    { id: 2, text: '컴포넌트 스타일링 해보기', completed: true },
    { id: 3, text: '일정 관리 앱 만들어보기', completed: false }
];

export default function TodoList() {
    const [todos, setTodos] = useState(initialTodos);
    const removeTodo = id => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    const toggleTodo = id => {
        setTodos(
            todos.map(todo =>
                todo.id === id ? { ...todo, completed: !todo.completed } : todo
            )
        );
    }

    return (
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            {todos.map(todo => (
                    <TodoItem 
                        todo={todo} 
                        key={todo.id} 
                        remove={removeTodo} 
                        toggle={() => toggleTodo(todo.id)} />
                ))
            };
        </List>
    );
}


