import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { Alert } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const MakeAdmin = () => {
    const [email, setEmail] = useState('');
    const [success, setSuccess] = useState(false);
    const { token } = useAuth();


    const handleOnBlur = e => {
        setEmail(e.target.value);
    }

    const handleAdminSubmit = e => {
        const user = { email };
        fetch('https://gentle-refuge-55681.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'authorization': `Bearer ${token}`,
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    console.log(data);
                    setEmail('');
                    setSuccess(true);
                }
            })
        e.preventDefault();
    }
    return (
        <div>
            <h2>Make An Admin</h2>
            <form onSubmit={handleAdminSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    id="standard-basic"
                    label="Email"
                    variant="standard"
                    type="email"
                    onBlur={handleOnBlur}
                />
                <Button type="submit" variant="contained">Make Admin</Button>
                {success && <Alert severity="success">Made Admin Successfully</Alert>}
            </form>
        </div>
    );
};

export default MakeAdmin;