import { Form, Title, Subtitle, BtnList, BtnItem } from './FirstStep.styled';

export const FirstStep = () => {
  return (
    <Form>
      <Title>Add pet</Title>
      <Subtitle>
        Lorem ipsum dolor sit amet, consectetur Lorem ipsum dolor sit amet,
        consectetur
      </Subtitle>
      <BtnList>
        <li>
          <BtnItem type="button">lost/found</BtnItem>
        </li>
        <li>
          <BtnItem type="button">in good hands</BtnItem>
        </li>
        <li>
          <BtnItem type="button">sell</BtnItem>
        </li>
      </BtnList>
      <label>
        Tittle of ad:
        <input name="title" type="text" placeholder="Type name pet" />
      </label>
      <label>
        Name pet:
        <input name="name" type="text" placeholder="Type name pet" />
      </label>
      <label>
        Date of birth:
        <input
          name="dateOfBirth"
          type="text"
          placeholder="Type date of birth"
        />
      </label>
      <label>
        Breed:
        <input name="breed" type="text" placeholder="Type breed" />
      </label>
      <button type="submit">Next</button>
      <button type="button">Cancel</button>
    </Form>
  );
};
