import moment from 'moment';
import style from './InfoPet.styled';

export const InfoPet = ({ notice }) => {
  const { breed, location, birthday, avatarURL, name, sex, price, comments } =
    notice;
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
    Category,
  } = style;

  const date = moment(birthday).fromNow(true);

  return (
    <Wrapper>
      <Category>Sell</Category>
      <Image src={avatarURL} alt="dog" />

      <WrapperGrid>
        <Title>Сute dog looking for a home</Title>
        <ul>
          <Item>
            <span>Name:</span>
            <ItemText>{name}</ItemText>
          </Item>
          <Item>
            <span>Birthday:</span>
            <ItemText>{date}</ItemText>
          </Item>
          <Item>
            <span>Breed:</span>
            <ItemText>{breed}</ItemText>
          </Item>
          <Item>
            <span>Location:</span>
            <ItemText>{location}</ItemText>
          </Item>
          <Item>
            <span>The sex:</span>
            <ItemText>{sex}</ItemText>
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
            <ItemText>{price}$</ItemText>
          </Item>
        </ul>
      </WrapperGrid>
      <Text>
        <span>Comments: </span>
        {comments}
      </Text>

      <Link href="tel:+380971234567">Contact</Link>
      <Button type="button">
        Add to
        <HeartIcon />
      </Button>
    </Wrapper>
  );
};
