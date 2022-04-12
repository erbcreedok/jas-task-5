import {Button} from "@mui/material";

export function TodoItem({ todo, onRemove }) {
    return (
        <li>
            {todo}
            <Button size="small" onClick={onRemove}>Delete</Button>
        </li>
    )
}
