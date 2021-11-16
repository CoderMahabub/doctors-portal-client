import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button, Input } from '@mui/material';

const AddDoctor = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const [success, setSuccess] = useState(false);
    const handleSubmit = e => {
        e.preventDefault();
        if (!image) {
            return;
        }
        const formData = new FormData();
        formData.append('name', name);
        formData.append('email', email);
        formData.append('image', image);
        fetch('https://gentle-refuge-55681.herokuapp.com/doctors', {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    setSuccess('Doctor Added Successfully')
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    return (
        <div>
            <h2>Add a Doctor</h2>
            <form onSubmit={handleSubmit}>
                <TextField
                    sx={{ width: '50%' }}
                    variant="standard"
                    label="Name"
                    required
                    onChange={e => setName(e.target.value)}
                />
                <br />
                <TextField
                    sx={{ width: '50%' }}
                    variant="standard"
                    label="Email"
                    type="email"
                    required
                    onChange={e => setEmail(e.target.value)}
                />
                <br />
                <Input accept="image/*"
                    sx={{ width: '50%' }}
                    type="file"
                    onChange={e => setImage(e.target.files[0])}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Upload
                </Button>
            </form>
            {
                success && <p style={{ color: 'green' }}>{success}</p>
            }
        </div>
    );
};

export default AddDoctor;