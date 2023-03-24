import * as SC from './FooterModal.styled';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export const FooterModalItem = ({
  name,
  photo,
  position,
  part,
  github,
  linkedin,
}) => {
  return (
    <SC.ListItem>
      <img src={photo} alt="member" width={150} height={150} />
      <p>{name}</p>
      <p>{position}</p>
      <p>{part}</p>
      <SC.IconSet>
        <SC.SocialLink href={github} target="_blank" rel="noreferrer noopener">
          <GitHubIcon />
        </SC.SocialLink>
        <SC.SocialLink
          href={linkedin}
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon />
        </SC.SocialLink>
      </SC.IconSet>
    </SC.ListItem>
  );
};
