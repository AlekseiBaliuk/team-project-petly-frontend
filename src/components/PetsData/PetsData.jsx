import React, { useState } from 'react';
// import ModalAddPet from 'components/ModalAddPet/ModalAddPet';
import { Loader } from 'components/Loader/Loader';
import PetsList from 'components/PetsList/PetsList';
import {
  PetsWrapper,
  PetsTitleWrapper,
  UserPetsTitle,
  PetBtnWrapper,
  AddPetTitleBtn,
  AddPetBtn,
  NonPetWrapper,
} from './PetsData.styled';
import { PetList } from 'components/PetsList/PetsList.styled';
import { ModalAddsPet } from 'components/UserPage/ModalAddsPet/ModalAddsPet';

export default function PetsData({ pets, setPets, petsData }) {
  // const isPets = Boolean(petsData.length);
  const isPets = true;
  const [isAddModalShown, setIsAddModalShown] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleModal = () => {
    setIsAddModalShown(state => !state);
  };

  return (
    <PetsWrapper>
      <PetsTitleWrapper>
        <UserPetsTitle>Pets</UserPetsTitle>
        <PetBtnWrapper>
          <AddPetTitleBtn>Add</AddPetTitleBtn>
          <AddPetBtn onClick={() => setIsAddModalShown(true)} />
        </PetBtnWrapper>
      </PetsTitleWrapper>
      {isAddModalShown && <ModalAddsPet onClose={toggleModal} />}
      {isPets ? (
        <PetList />
      ) : (
        <NonPetWrapper>
          <p>No pets</p>
        </NonPetWrapper>
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <PetsList dataPets={pets} setDataPets={setPets} />
      )}
    </PetsWrapper>
  );
}
