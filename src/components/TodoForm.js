import {Button, TextField} from "@mui/material";
import {useCallback, useMemo, useState} from "react";


export function TodoForm({ onCreate }) {
    const [text, setText] = useState('')
    const handleCreate = useCallback((e) => {
        e.preventDefault()
        setText((text) => {
            onCreate({
                text,
                created: new Date(),
            })
            return ''
        })
    }, [onCreate])
    const isDisabled = useMemo(() => {
        return text.trim().length === 0
    }, [text])


    return (
        <form onSubmit={handleCreate}>
            <TextField label="Name" value={text} onChange={(e) => setText(e.target.value)}  />
            <Button disabled={isDisabled} type="submit">Create</Button>
        </form>
    )
}
