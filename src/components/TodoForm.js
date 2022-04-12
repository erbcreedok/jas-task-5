import {Button, TextField} from "@mui/material";
import {useState} from "react";


export function TodoForm({ onCreate }) {
    const [text, setText] = useState('')
    return (
        <div>
            <TextField label="Name" value={text} onChange={(e) => setText(e.target.value)}  />
            <Button onClick={() => { onCreate(text)}}>Create</Button>
        </div>
    )
}
