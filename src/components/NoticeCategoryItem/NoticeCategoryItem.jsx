import style from './NoticeCategoryItem.styled';

const { Image, Card, Category, Like, ItemTitle, Item, Span, Button } = style;

export const NoticeCategoryItem = () => {
  return (
    <Card>
      <Category>Sell</Category>
      <Like>like</Like>
      <Image
        src="https://img.tsn.ua/cached/905/tsn-f31867ea2500d8c162f8e1b3822736e1/thumbs/1116x628/3b/a5/bf386a0a6b5fb77653ad65c3ca3da53b.jpeg"
        alt="dog"
      />
      <ItemTitle>Сute dog looking for a home</ItemTitle>
      <ul>
        <Item>
          <Span>Breed:</Span>
          <Span>Pomeranian</Span>
        </Item>
        <Item>
          <Span>Place:</Span>
          <Span>Lviv</Span>
        </Item>
        <Item>
          <Span>Age:</Span>
          <Span>one year</Span>
        </Item>
      </ul>
      <Button>Learn more</Button>
      <Button>Delete</Button>
    </Card>
  );
};
