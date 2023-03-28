import { categoriesHandler } from 'helpers/categoriesHandler';
import style from './InfoPet.styled';

export const InfoPet = ({ notice, toggle, favorite }) => {
  const {
    breed,
    location,
    birthday,
    avatarURL,
    name,
    sex,
    price,
    comments,
    owner,
    title,
    category,
  } = notice;
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

  return (
    <Wrapper>
      <Category>{categoriesHandler(category)}</Category>
      <Image src={avatarURL} alt="dog" />

      <WrapperGrid>
        <Title>{title}</Title>
        <ul>
          <Item>
            <span>Name:</span>
            <ItemText>{name}</ItemText>
          </Item>
          <Item>
            <span>Birthday:</span>
            <ItemText>{birthday}</ItemText>
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
            <span>Sex:</span>
            <ItemText>{sex}</ItemText>
          </Item>
          <Item>
            <span>Email:</span>
            <ItemText>
              <a href={`mailto: ${owner.email}`} target="_blank">
                {owner.email}
              </a>
            </ItemText>
          </Item>
          <Item>
            <span>Phone:</span>
            <ItemText>
              <a rel="noreferrer" target="_blank" href={`tel: ${owner.phone}`}>
                {owner.phone}
              </a>
            </ItemText>
          </Item>
          {price && (
            <Item>
              <span>Price:</span>
              <ItemText>{price}$</ItemText>
            </Item>
          )}
        </ul>
      </WrapperGrid>
      <Text>
        <span>Comments: </span>
        {comments}
      </Text>

      <Link href="tel:+380971234567">Contact</Link>
      <Button type="button" onClick={toggle}>
        {favorite ? 'Remove from' : 'Add to'}
        <HeartIcon />
      </Button>
    </Wrapper>
  );
};
