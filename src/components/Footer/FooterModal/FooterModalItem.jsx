export const FooterModalItem = ({
  name,
  photo,
  position,
  part,
  github,
  linkedin,
}) => {
  return (
    <li>
      <img src={photo} alt="member" />
      <p>{name}</p>
      <p>{position}</p>
      <p>{part}</p>
      <a href={github}>github</a>
      <a href={linkedin}>linkedin</a>
    </li>
  );
};
