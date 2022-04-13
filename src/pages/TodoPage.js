import React, {useCallback, useEffect, useState} from 'react'
import {TodoForm} from "../components/TodoForm";
import {TodoList} from "../components/TodoList";

export function TodoPage() {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('todos')) || [])

    const handleCreate = useCallback((text) => {
        setTodos((prev) => [...prev, text])
    }, [])

    const handleRemove = useCallback((index) => {
        setTodos((prev) => {
            const newTodos = [...prev]
            newTodos.splice(index, 1)
            return newTodos
        })
    }, [])

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])

    return (
        <div>
            <TodoForm onCreate={handleCreate} />
            <TodoList todos={todos} onRemove={handleRemove} />
        </div>
    )
}
