import {TodoItem} from "./TodoItem";
import {useCallback} from "react";

export function TodoList({ todos, onRemove }) {
    const handleRemove = useCallback((index) => {
        return () => onRemove(index)
    }, [onRemove])
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem key={todo.created} todo={todo} onRemove={handleRemove(index)} />
            ))}
        </ul>
    )
}
