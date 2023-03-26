import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';
import { theme } from 'constants/theme';

export const ApproveRemovingModal = ({ modalOpen, yesAction, noAction }) => {
  return (
    <Dialog open={modalOpen} aria-labelledby="alert-dialog-title">
      <DialogTitle id="alert-dialog-title">
        Are you sure you want to remove?
      </DialogTitle>
      <DialogActions>
        <Button onClick={noAction} style={{ color: theme.colors.accent }}>
          No
        </Button>
        <Button
          onClick={yesAction}
          autoFocus
          style={{ color: theme.colors.accent }}
        >
          Yes
        </Button>
      </DialogActions>
    </Dialog>
  );
};
