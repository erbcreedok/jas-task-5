import React from 'react'
import {TodoForm} from "../components/TodoForm";

export function TodoPage() {
    return (
        <div>
            <TodoForm onCreate={(arg) => console.log(arg)} />
        </div>
    )
}
