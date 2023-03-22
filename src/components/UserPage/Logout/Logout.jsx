import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authOperations';
import logoutSvg from 'staticImages/userPage/logout.svg';
import { LogOutButton, SVG } from './Logout.styled';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const Logout = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <LogOutButton variant="outlined" onClick={handleClickOpen}>
        <SVG src={logoutSvg} />
        Log Out
      </LogOutButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure you want to logout?
        </DialogTitle>
        <DialogActions>
          <Button onClick={handleClose} style={{ color: '#F59256' }}>
            No
          </Button>
          <Button
            onClick={() => dispatch(logOut())}
            autoFocus
            style={{ color: '#F59256' }}
          >
            Yes
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Logout;
