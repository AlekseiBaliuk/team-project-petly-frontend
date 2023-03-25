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
import { ModalAddsPet } from '../ModalAddsPet/ModalAddsPet';

const PetsData = ({ pets, setPets }) => {
  // const isLoading = useSelector(getLoading);
  // const error = useSelector(getError);
  // const petsData = useSelector(getPets);
  // const isPets = Boolean(petsData.length);
  const isPets = false;

  const [isAddModalShown, setIsAddModalShown] = useState(false);
  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch(getPetInfo());
  // }, [dispatch]);
   const toggleModal = () => {
     setIsAddModalShown(state => !state);
   };

  return (
    <PetsWrapper>
      <PetsTitleWrapper>
        <UserPetsTitle>Pets:</UserPetsTitle>
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
      {/*{isLoading && !error*/}
      {/*  ? <Loader />*/}
      {/*  : <PetsList dataPets={pets} setDataPets={setPets} />*/}
      {/*}*/}
    </PetsWrapper>
  );
};

export default PetsData;
