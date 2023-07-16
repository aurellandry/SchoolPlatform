import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ContactModal(props) {
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle>Contact</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    Laissez-nous vos coordonnées et un message, vous serez recontactés sous quelques heures.
                </DialogContentText>
                <TextField
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Email"
                    type="email"
                    fullWidth
                    variant="outlined"
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
                />
            </DialogContent>
            <DialogActions>
                <Button
                    color="error"
                    onClick={props.handleClose}
                >
                    Annuler
                </Button>
                <Button
                    variant="contained"
                    color="primary"
                    onClick={props.handleClose}
                >
                    Envoyer
                </Button>
            </DialogActions>
        </Dialog>
    );
}
