import { useState, useEffect } from 'react';
import List from '@mui/material/List';
import TodoItem from './TodoItem';
import TodoForm from './TodoForm';

const getInitialData = () => {
    const data = localStorage.getItem('todos');
    return data ? JSON.parse(data) : [];
} 

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos])

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

    const addTodo = (text) => {
        console.log(text);
        setTodos(
            [...todos, { id: 8, text, completed: false}]
        );
};

return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {todos.map(todo => (
            <TodoItem
                todo={todo}
                key={todo.id}
                remove={removeTodo}
                toggle={() => toggleTodo(todo.id)} />
        ))}
        <TodoForm addTodo={addTodo} />
    </List>
);
}


