import React, {useState} from 'react'
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";

export function TodoPage() {
    const [todos, setTodos] = useState([])

    function handleCreate(text) {
        setTodos([...todos, text])
    }

    function handleRemove(index) {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    return (
        <div>
            <TodoForm onCreate={handleCreate} />
            <TodoList todos={todos} onRemove={handleRemove} />
        </div>
    )
}
