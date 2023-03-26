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
import { FirstStep } from '../ModalAddsPet/FirstStep';
import { SecondStep } from '../ModalAddsPet/SecondStep';

const PetsData = ({ pets, setPets }) => {
  // const isLoading = useSelector(getLoading);
  // const error = useSelector(getError);
  // const petsData = useSelector(getPets);
  // const isPets = Boolean(petsData.length);
  const isPets = false;
  const [isModalShow, setIsModalShow] = useState('none');
  const [isShown, setIsShown] = useState(false);
  const initialValuesModalData = {
    name: '',
    birthday: '',
    breed: '',
    image: '',
    comments: '',
  };
  const [modalData, setModalData] = useState(initialValuesModalData);

  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch(getPetInfo());
  // }, [dispatch]);
  const adminModal = (type, value) => {
    setIsShown(!value);
    setIsModalShow(type);
  };

  return (
    <PetsWrapper>
      <PetsTitleWrapper>
        <UserPetsTitle>Pets:</UserPetsTitle>
        <PetBtnWrapper>
          <AddPetTitleBtn>Add</AddPetTitleBtn>
          <AddPetBtn onClick={() => adminModal('step1', false)} />
        </PetBtnWrapper>
      </PetsTitleWrapper>
      {isModalShow === 'step1' && (
        <FirstStep
          adminModal={adminModal}
          setModalData={setModalData}
          modalData={modalData}
          initialValuesModalDat={initialValuesModalData}
        />
      )}
      {isModalShow === 'step2' && (
        <SecondStep
          adminModal={adminModal}
          setModalData={setModalData}
          modalData={modalData}
          initialValuesModalData={initialValuesModalData}
        />
      )}
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
