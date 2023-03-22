export const FooterModalItem = ({ name, photo, github, linkedin }) => {
  return (
    <li>
      <img src={photo} alt="member" />
      <p>{name}</p>
      <a href={github}>github</a>
      <a href={linkedin}>linkedin</a>
    </li>
  );
};
