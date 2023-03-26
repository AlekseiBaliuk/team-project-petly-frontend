import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { removeUserPet, getUserPets } from 'redux/user/userOperations';
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
import PropTypes from 'prop-types';
import { ApproveRemovingModal } from 'components/SharedComponents/ApproveRemovingModal/ApproveRemovingModal';

const PetsList = ({ dataPets }) => {
  const [open, setOpen] = useState(false);
  const [petId, setPetId] = useState('');
  const dispatch = useDispatch();

  const removePet = () => {
    const action = removeUserPet(petId);
    dispatch(action);
    dispatch(getUserPets());
  };

  const handleClickOpen = id => {
    setOpen(true);
    setPetId(id);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const elements = dataPets.map(
    ({ name, birthday, breed, petsPhotoURL, comments, _id }) => {
      return (
        <PetWrapper key={_id}>
          <PetAvatar src={petsPhotoURL} alt={name} width="150" height="150" />
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
                {birthday}
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
                {comments}
              </PetDescriptionInfo>
            </PetItem>
          </PetList>
          <DeleteBtn variant="outlined" onClick={() => handleClickOpen(_id)} />
          <ApproveRemovingModal modalOpen={open} yesAction={removePet} noAction={handleClose} />
          {/* <Dialog open={open} aria-labelledby="alert-dialog-title">
            <DialogTitle id="alert-dialog-title">
              Are you sure you want to remove?
            </DialogTitle>
            <DialogActions>
              <Button onClick={handleClose} style={{ color: '#F59256' }}>
                No
              </Button>
              <Button
                onClick={removePet}
                autoFocus
                style={{ color: '#F59256' }}
              >
                Yes
              </Button>
            </DialogActions>
          </Dialog> */}
        </PetWrapper>
      );
    },
  );

  return <ul>{elements}</ul>;
};

export default PetsList;

PetsList.propTypes = {
  petsData: PropTypes.array,
};
