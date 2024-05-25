import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import Checkbox from '@mui/material/Checkbox';
import CommentIcon from '@mui/icons-material/Comment';

export default function TodoItem({ todo, remove, toggle }) {
    const labelId = `checkbox-list-secondary-label-${todo.id}`;

    const removeTodo = () => {
        remove(todo.id);
    };
    return (
        <ListItem
            key={todo.id}
            secondaryAction={
                <IconButton edge="end" aria-label="comments" onClick={removeTodo}>
                    <CommentIcon />
                </IconButton>
            }
            disablePadding
        >
            <ListItemButton role={undefined} onClick={toggle} dense>
                <ListItemIcon>
                    <Checkbox
                        edge="start"
                        checked={todo.completed}
                        tabIndex={-1}
                        disableRipple
                        inputProps={{ 'aria-labelledby': labelId }}                         
                    />
                </ListItemIcon>
                <ListItemText id={labelId} primary={todo.text} />
            </ListItemButton>
        </ListItem>
    );
}