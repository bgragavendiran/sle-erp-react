import React, { useState } from 'react';
import { Button, Container, Typography, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';

import { signOut } from 'firebase/auth';
import { auth } from './firebase'; // Update the path

function MainPage() {
    const [open, setOpen] = useState(false);  // State to control the dialog
    const [url, setUrl] = useState('');  // State to store the entered URL

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleScrape = () => {
        // Here, you would implement the logic to scrape the content from the provided URL
        // For now, I'll just close the dialog
        handleClose();
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
            // Redirect to login page or handle post-logout logic here
        } catch (err) {
            console.error("Error logging out:", err.message);
        }
    };

    return (
        <Container component="main" maxWidth="md">
            <Typography component="h1" variant="h5">
                Welcome to the Main Page!
            </Typography>

            <Button variant="contained" color="primary" onClick={handleOpen}>
                Scrape URL
            </Button>

            <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginLeft: '10px' }}>
                Log Out
            </Button>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Enter URL</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Please enter the URL you wish to scrape:
                    </DialogContentText>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="url"
                        label="URL"
                        type="url"
                        fullWidth
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleScrape} color="primary">
                        Scrape
                    </Button>
                </DialogActions>
            </Dialog>
        </Container>
    );
}

export default MainPage;
