import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { getPetInfo, deletePet } from 'redux/pets/petsOperations';
import {
  PetWrapper,
  PetAvatar,
  PetList,
  PetItem,
  PetTitleInfo,
  PetDescriptionInfo,
  DeleteBtn,
} from './PetsList.styled';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogTitle from '@mui/material/DialogTitle';

const PetsList = ({ dataPets }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [petId, setPetId] = useState('');

  // const removePet = () => {
  //   const action = deletePet(petId);
  //   dispatch(action);
  //   dispatch(getPetInfo());
  // };

  const handleClickOpen = id => {
    setOpen(true);
    setPetId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const elements = dataPets.map(
    ({ name, date, breed, avatarUrl, comment, _id }) => {
      return (
        <PetWrapper key={_id}>
          <PetAvatar
            src={avatarUrl.secure_url}
            alt={name}
            width="150"
            height="150"
          />
          <PetList>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>Name: </PetTitleInfo>
                {name}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>Date of birth: </PetTitleInfo>
                {date.split('-').reverse().join('.')}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>Breed: </PetTitleInfo>
                {breed}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>Comments: </PetTitleInfo>
                {comment}
              </PetDescriptionInfo>
            </PetItem>
          </PetList>
          <DeleteBtn variant="outlined" onClick={() => handleClickOpen(_id)} />
          <Dialog open={open} aria-labelledby="alert-dialog-title">
            <DialogTitle id="alert-dialog-title">
              Are you sure you want to remove?
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} style={{ color: '#F59256' }}>
                No
              </Button>
              <Button
                // onClick={removePet}
                autoFocus
                style={{ color: '#F59256' }}
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog>
        </PetWrapper>
      );
    },
  );

  return <ul>{elements}</ul>;
};

export default PetsList;
