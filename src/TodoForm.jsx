import ListItem from "@mui/material/ListItem";
import TextField from "@mui/material/TextField";
import InputAdorment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";
import Create from "@mui/icons-material/Create";

import { useState } from "react";


export default function TodoForm({ addTodo }) {
    const [text, setText] = useState('');
    const handleChange = (e) => {
        setText(e.target.value);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        addTodo(text);
        setText('');
    };

    return (
        <ListItem>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="outlined-basic"
                    label="Outlined"
                    variant="outlined"
                    onChange={handleChange}
                    value={text}
                    InputProps={{
                        endAdornment:
                            <InputAdorment position="end">
                                <IconButton edge="end" aria-label="create todo" type="submit">
                                    <Create />
                                </IconButton>
                            </InputAdorment>
                    }}

                />
            </form>
        </ListItem>
    )
}