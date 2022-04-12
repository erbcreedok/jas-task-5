import {TodoItem} from "./TodoItem";

export function TodoList({ todos, onRemove }) {
    return (
        <ul>
            {todos.map((todo, index) => (
                <TodoItem todo={todo} onRemove={() => onRemove(index)} />
            ))}
        </ul>
    )
}
