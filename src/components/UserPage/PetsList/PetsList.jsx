import React from 'react';
import {
  PetWrapper,
  PetAvatar,
  PetList,
  PetItem,
  PetTitleInfo,
  PetDescriptionInfo,
  DeleteBtn,
} from './PetsList.styled';
// import Button from '@mui/material/Button';
// import Dialog from '@mui/material/Dialog';
// import DialogActions from '@mui/material/DialogActions';
// import DialogTitle from '@mui/material/DialogTitle';

const PetsList = ({ dataPets }) => {
  const elements = dataPets.map(
    ({ name, date, breed, avatarUrl, comment, _id }) => {
      return (
        <PetWrapper key={_id}>
          <PetAvatar src={avatarUrl} alt={name} width="150" height="150" />
          <PetList>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>Pet name </PetTitleInfo> {name}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>Pet birth </PetTitleInfo>
                {date.split('-').reverse().join('.')}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>Pet breed </PetTitleInfo>
                {breed}
              </PetDescriptionInfo>
            </PetItem>
            <PetItem>
              <PetDescriptionInfo>
                <PetTitleInfo>Prt comment </PetTitleInfo>
                {comment}
              </PetDescriptionInfo>
            </PetItem>
          </PetList>
          <DeleteBtn variant="outlined"></DeleteBtn>
          {/*<Dialog open={open} aria-labelledby="alert-dialog-title">*/}
          {/*  <DialogTitle id="alert-dialog-title">*/}
          {/*    Yes*/}
          {/*  </DialogTitle>*/}
          {/*  <DialogActions>*/}
          {/*    <Button style={{color: '#F59256',}}>No</Button>*/}
          {/*    <Button autoFocus style={{color: '#F59256',}}>Yes</Button>*/}
          {/*  </DialogActions>*/}
          {/*</Dialog>*/}
        </PetWrapper>
      );
    },
  );

  return <ul>{elements}</ul>;
};

export default PetsList;
