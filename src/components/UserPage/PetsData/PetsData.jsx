import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { getPetInfo } from 'redux/pets/petsOperations';
// import { getLoading, getError, getPets } from 'redux/pets/petsSelectors';
// import ModalAddPet from 'components/ModalAddPet/ModalAddPet';
// import { Loader } from 'components/Loader/Loader';
// import PetsList from 'components/UserPage/PetsList/PetsList';
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

const PetsData = ({ pets, setPets }) => {
  // const isLoading = useSelector(getLoading);
  // const error = useSelector(getError);
  // const petsData = useSelector(getPets);
  // const isPets = Boolean(petsData.length);
  const isPets = false;

  const [isOpen, setIsOpen] = useState(false);
  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch(getPetInfo());
  // }, [dispatch]);

  return (
    <PetsWrapper>
      <PetsTitleWrapper>
        <UserPetsTitle>Pets:</UserPetsTitle>
        <PetBtnWrapper>
          <AddPetTitleBtn>Add</AddPetTitleBtn>
          <AddPetBtn onClick={() => setIsOpen(true)} />
        </PetBtnWrapper>
      </PetsTitleWrapper>
      {/*{isOpen*/}
      {/*  ? <ModalAddsPetApp*/}
      {/*    petsData={pets}*/}
      {/*    setPets={setPets}*/}
      {/*    onOpenModal={isOpen}*/}
      {/*    onCloseModal={() => setIsOpen(false)}*/}
      {/*  />*/}
      {/*  : null*/}
      {/*}*/}
      {isPets ? (
        <PetList />
      ) : (
        <NonPetWrapper>
          <p>No pets</p>
        </NonPetWrapper>
      )}
      {/*{isLoading && !error*/}
      {/*  ? <Loader />*/}
      {/*  : <PetsList dataPets={pets} setDataPets={setPets} />*/}
      {/*}*/}
    </PetsWrapper>
  );
};

export default PetsData;
