import React, { useState } from 'react';
// import ModalAddPet from 'components/ModalAddPet/ModalAddPet';
import { Loader } from 'components/Loader/Loader';
import PetsList from 'components/UserPage/PetsList/PetsList';
import {
  PetsWrapper,
  PetsTitleWrapper,
  UserPetsTitle,
  PetBtnWrapper,
  AddPetTitleBtn,
  AddPetBtn,
  NonPetWrapper,
} from './PetsData.styled';
import { PetList } from 'components/UserPage/PetsList/PetsList.styled';

export default function PetsData({ pets, setPets, petsData }) {
  // const isPets = Boolean(petsData.length);
  const isPets = false;

  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <PetsWrapper>
      <PetsTitleWrapper>
        <UserPetsTitle>Pets:</UserPetsTitle>
        <PetBtnWrapper>
          <AddPetTitleBtn>Add</AddPetTitleBtn>
          <AddPetBtn onClick={() => setIsOpen(true)} />
        </PetBtnWrapper>
      </PetsTitleWrapper>
      {/*{isOpen ? (*/}
      {/*  <ModalAddsPetApp*/}
      {/*    petsData={pets}*/}
      {/*    setPets={setPets}*/}
      {/*    onOpenModal={}*/}
      {/*    onCloseModal={}*/}
      {/*  />*/}
      {/*) : null}*/}
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
