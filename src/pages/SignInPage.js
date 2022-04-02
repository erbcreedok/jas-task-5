import React, {useState} from 'react'
import {styled} from "@mui/material";
import {SignUpForm} from "../components/SignUpForm";

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 50px;
`

const data = [
    { email: 'admin@gmail.com', password: 'admin123' },
    { email: 'user@gmail.com', password: 'user1234' },
    { email: 'compo@gmail.com', password: 'compo' },
]

const UserBox = styled('div')`
  width: 250px;
  border: 1px solid #868686;
  border-radius: 4px;
  padding: 4px;
  margin: 8px;
`

export function SignInPage() {
    const [users, setUsers] = useState(data)

    return (
        <>
            <Wrapper>
                <SignUpForm onSuccess={(data) => setUsers([...users, data])} />
            </Wrapper>
            {users.map((item) => (
                <UserBox>
                    email: {item.email}
                    <br/>
                    password: {item.password}
                </UserBox>
            ))}
        </>
    )
}
