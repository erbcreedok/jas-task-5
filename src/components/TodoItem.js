import {Button} from "@mui/material";
import {useMemo} from "react";

export function TodoItem({ todo, onRemove }) {
    const created = useMemo(() => {
        return new Date(todo.created).toLocaleTimeString()
    }, [todo.created])

    return (
        <li>
            {todo.text}
            <br/>
            {created}
            <Button size="small" onClick={onRemove}>Delete</Button>
        </li>
    )
}
