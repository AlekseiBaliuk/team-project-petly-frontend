import React, { useEffect, useState } from 'react';
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
import { FirstStep } from '../ModalAddsPet/FirstStep';
import { SecondStep } from '../ModalAddsPet/SecondStep';
import { useUser } from '../../../hooks/useUser';

const PetsData = () => {
  const { isLoading, error, userPets } = useUser();
  const [pets, setPets] = useState([]);

  useEffect(() => {
    if (pets !== userPets && userPets !== undefined) {
      setPets(userPets);
    }
  }, [pets, userPets]);

  const [isModalShow, setIsModalShow] = useState('none');
  const initialValuesModalData = {
    name: '',
    birthday: '',
    breed: '',
    image: '',
    comments: '',
  };
  const [modalData, setModalData] = useState(initialValuesModalData);

  const adminModal = (type, value) => {
    setIsModalShow(type);
  };

   const clearData = () => {
     adminModal('none', true);
     setModalData({ ...initialValuesModalData });
   };

  return (
    <PetsWrapper>
      <PetsTitleWrapper>
        <UserPetsTitle>Pets:</UserPetsTitle>
        <PetBtnWrapper onClick={() => adminModal('step1', false)}>
          <AddPetTitleBtn>Add pet</AddPetTitleBtn>
          <AddPetBtn />
        </PetBtnWrapper>
      </PetsTitleWrapper>
      {isModalShow === 'step1' && (
        <FirstStep
          adminModal={adminModal}
          setModalData={setModalData}
          modalData={modalData}
          initialValuesModalDat={initialValuesModalData}
          clearData={clearData}
        />
      )}
      {isModalShow === 'step2' && (
        <SecondStep
          adminModal={adminModal}
          setModalData={setModalData}
          modalData={modalData}
          initialValuesModalData={initialValuesModalData}
          clearData={clearData}
        />
      )}
      {userPets.length ? (
        <PetList />
      ) : (
        <NonPetWrapper>
          <p>No pets</p>
        </NonPetWrapper>
      )}
      {isLoading && !error ? <Loader /> : <PetsList dataPets={pets} />}
    </PetsWrapper>
  );
};

export default PetsData;
