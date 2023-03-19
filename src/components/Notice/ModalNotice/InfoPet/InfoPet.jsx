import moment from 'moment';
import style from './InfoPet.styled';

export const InfoPet = () => {
  const {
    Image,
    Wrapper,
    Title,

    Item,
    ItemText,
    Text,
    Button,
    Link,
    HeartIcon,
    WrapperGrid,
  } = style;

  const date = moment('01.01.2021', 'DD.MM.YYYY').fromNow(true);

  return (
    <Wrapper>
      <Image
        src="https://img.tsn.ua/cached/905/tsn-f31867ea2500d8c162f8e1b3822736e1/thumbs/1116x628/3b/a5/bf386a0a6b5fb77653ad65c3ca3da53b.jpeg"
        alt="dog"
      />
      <WrapperGrid>
        <Title>Сute dog looking for a home</Title>
        <ul>
          <Item>
            <span>Name:</span>
            <ItemText>Rich</ItemText>
          </Item>
          <Item>
            <span>Birthday:</span>
            <ItemText>{date}</ItemText>
          </Item>
          <Item>
            <span>Breed:</span>
            <ItemText>Pomeranian</ItemText>
          </Item>
          <Item>
            <span>Location:</span>
            <ItemText>Lviv</ItemText>
          </Item>
          <Item>
            <span>The sex:</span>
            <ItemText>Male</ItemText>
          </Item>
          <Item>
            <span>Email:</span>
            <ItemText>sobaka@gmail.com</ItemText>
          </Item>
          <Item>
            <span>Phone:</span>
            <ItemText>+380971234567</ItemText>
          </Item>
          <Item>
            <span>Price:</span>
            <ItemText>150$</ItemText>
          </Item>
        </ul>
      </WrapperGrid>
      <Text>
        <span>Comments: </span>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur Lorem ipsum dolor sit amet, consectetur Lorem
      </Text>

      <Link href="tel:+380971234567">Contact</Link>
      <Button type="button">
        Add to
        <HeartIcon />
      </Button>
    </Wrapper>
  );
};
