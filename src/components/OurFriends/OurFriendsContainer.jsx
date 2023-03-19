import OurFriendsCard from "./OurFriendsCard";
import { ContainerList, ContainerItem, ContainerWrap } from "./OurFriendsContainer.styled";
//import { useEffect } from "react";

const OurFriendsContainer = () => {
  //const friendsData = useSelector(selectFriends);
  //const dispatch = useDispatch();

  /*useEffect(() => {
    dispatch(getFriends());
  }, []);

  if (!friendsData) return;*/

  //delete
  const friendsData = [
    {
      title: 'ЛКП “ЛЕВ”',
      url: 'https://lkplev.com/',
      addressUrl: 'https://goo.gl/maps/4xMfxtahHPfXeAYU8',
      imageUrl: '../../staticImages/Friends/lev.png',
      address: '79024, м.Львів, вул. Промислова 56',
      workDays: null,
      phone: '+380685354545',
      email: 'lkplev@gmail.com'
    },
    {
    title: 'БАРБОС',
    url: 'https://uk-ua.facebook.com/NGO.Barbos/',
    addressUrl: 'https://goo.gl/maps/pnzYL8t7jbG7j1SQ9',
    imageUrl: '../../staticImages/Friends/barbos.png',
    address: 'м. Ужгород',
    workDays: null,
    phone: '+380664880480',
    email: null
    },
    {
      title: 'Whiskas',
      url: 'https://www.whiskas.ua/',
      addressUrl: null,
      imageUrl: '../../staticImages/Friends/whiskas.png',
      address: null,
      workDays: null,
      phone: '+380800500155',
      email: null
    },
    {
      title: 'Happy Paw',
      url: 'https://happypaw.ua/',
      addressUrl: 'https://goo.gl/maps/3RyzTYBvMr9WQWCC6',
      imageUrl: '../../staticImages/Friends/happypaw.png',
      address: 'Київ, вулиця Шота Руставелі, 44 (3-й поверх, офіс 7)',
      workDays: [{"isOpen":true,"from":"09:00","to":"17:00"},{"isOpen":true,"from":"09:00","to":"17:00"},{"isOpen":true,"from":"09:00","to":"17:00"},{"isOpen":true,"from":"09:00","to":"17:00"},{"isOpen":true,"from":"09:00","to":"17:00"},{"isOpen":true,"from":"09:00","to":"17:00"},{"isOpen":true,"from":"09:00","to":"17:00"}],
      phone: '+380442900329',
      email: 'hello@happypaw.ua'
    },
    {
      title: 'PetHelp',
      url: 'https://pethelp.com.ua/',
      addressUrl: null,
      imageUrl: '../../staticImages/Friends/pethelp.png',
      address: null,
      workDays: null,
      phone: null,
      email: 'pethelp.ukr@gmail.com'
    },
    {
      title: 'Cipiyc',
      url: 'https://dogcat.com.ua',
      addressUrl: 'https://goo.gl/maps/iq8NXEUf31EAQCzc6"',
      imageUrl: '../../staticImages/Friends/syrius.png',
      address: 'Fedorivka, Kyiv Oblast, Ukraine, 07372',
      workDays: [{"isOpen":false},{"isOpen":false},{"isOpen":false},{"isOpen":false},{"isOpen":false},{"isOpen":true,"from":"11:00","to":"16:00"},{"isOpen":true,"from":"11:00","to":"16:00"}],
      phone: '+380442900329',
      email: 'hello@happypaw.ua'
    },
    {
      title: 'Purina',
      url: 'https://www.purina.ua/',
      addressUrl: null,
      imageUrl: '../../staticImages/Friends/Purina-logo-and-slogan.png',
      address: null,
      workDays: null,
      phone: '+380800500950',
      email: 'info@ua.nestle.com'
    },
    {
      title: 'Josera',
      url: 'https://josera.ua/',
      addressUrl: null,
      imageUrl: '../../staticImages/Friends/josera-logo-josera.png',
      address: null,
      workDays: [{"isOpen":true,"from":"09:00","to":"17:00"},{"isOpen":true,"from":"09:00","to":"17:00"},{"isOpen":true,"from":"09:00","to":"17:00"},{"isOpen":true,"from":"09:00","to":"17:00"},{"isOpen":true,"from":"09:00","to":"17:00"},{"isOpen":false,"from":"","to":""},{"isOpen":false,"from":"","to":""}],
      phone: '+380800409060',
      email: 'info@josera.ua'
    },
    {
      title: 'Lico',
      url: 'https://lico.vet/',
      addressUrl: 'https://goo.gl/maps/sub8u9TAAvLJRE9j9',
      imageUrl: '../../staticImages/Friends/licoveterinary-e1605477412808.png',
      address: 'вулиця Другетів, 77, Ужгород, Закарпатська область, 88003',
      workDays: [{"isOpen":true,"from":"09:00","to":"20:00"},{"isOpen":true,"from":"09:00","to":"20:00"},{"isOpen":true,"from":"09:00","to":"20:00"},{"isOpen":true,"from":"09:00","to":"20:00"},{"isOpen":true,"from":"09:00","to":"20:00"},{"isOpen":true,"from":"09:00","to":"20:00"},{"isOpen":true,"from":"09:00","to":"20:00"}],
      phone: null,
      email: null
    },
]
  return (
    <ContainerWrap>
      <ContainerList>
        {friendsData.map((friend) => (
          <ContainerItem key={friend._id}>
            <OurFriendsCard data={friend} />
          </ContainerItem>
        ))}
      </ContainerList>
    </ContainerWrap>
  );
};


export default OurFriendsContainer;
