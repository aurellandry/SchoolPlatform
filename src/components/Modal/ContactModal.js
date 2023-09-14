import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';

import axios from 'axios';

export default function ContactModal(props) {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(false);

    const handleSubmit = async () => {
        try {
            const payload = {
                email,
                name,
                message
            };

            setIsLoading(true);
            const response = await axios.post(
                `${process.env.REACT_APP_BASE_API_URL}/api/contact`,
                payload,
                {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }
            );
            console.log('Contact response : ', response);
            if (response.status !== 200) {
                throw new Error(response.statusText);
            }
    
            setSubmitStatus(response.data.success);
            setIsLoading(false);
        } catch (error) {
            setIsLoading(false);
            throw new Error(error ?? 'Error while sending contact request');
        }
    }

    const resetData = () => {
        setName('');
        setEmail('');
        setMessage('');
    }

    const handleClose = () => {
        resetData();
        setSubmitStatus(null);
        props.close();
    }

    return (
        <Dialog open={props.open} onClose={handleClose}>
            <DialogTitle>Contact</DialogTitle>
            <DialogContent>
                {submitStatus && (
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert severity="success">Demande de contact envoyée avec succès !</Alert>
                    </Stack>
                )}

                {!submitStatus && (
                    <>
                        <DialogContentText>
                            Laissez-nous vos coordonnées et un message, vous serez recontactés sous quelques heures.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Nom et prénom"
                            fullWidth
                            variant="outlined"
                            value={name}
                            onChange={(event) => setName(event.target.value) }
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="email"
                            label="Email"
                            type="email"
                            fullWidth
                            variant="outlined"
                            value={email}
                            onChange={(event) => setEmail(event.target.value) }
                        />
                        <TextField
                            autoFocus
                            margin="dense"
                            id="message"
                            label="Message"
                            fullWidth
                            multiline
                            rows={5}
                            variant="outlined"
                            value={message}
                            onChange={(event) => setMessage(event.target.value) }
                        />
                    </>
                )}
            </DialogContent>
            <DialogActions>
                {submitStatus ? 
                    (
                        <Button
                            color="primary"
                            onClick={handleClose}
                            disabled={isLoading}
                        >
                            Fermer
                        </Button>
                    ) : (
                        <>
                            <Button
                                color="error"
                                onClick={handleClose}
                                disabled={isLoading}
                            >
                                Annuler
                            </Button>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSubmit}
                                disabled={isLoading}
                            >
                                {
                                    isLoading ?
                                        (<FontAwesomeIcon icon={faCircleNotch} spin />)
                                    :
                                        'Envoyer'
                                }
                                
                            </Button>
                        </>
                    )
                }
            </DialogActions>
        </Dialog>
    );
}
