import * as SC from './FooterModalItem.styled';
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
      <img src={photo} alt="member" width={300} height={300} />
      <p>{name}</p>
      <p>{position}</p>
      <p>{part}</p>
      <SC.IconSet>
        {github && (
          <SC.SocialLink
            href={github}
            target="_blank"
            rel="noreferrer noopener"
          >
            <GitHubIcon fontSize="large" />
          </SC.SocialLink>
        )}
        <SC.SocialLink
          href={linkedin}
          target="_blank"
          rel="noreferrer noopener"
        >
          <LinkedInIcon fontSize="large" />
        </SC.SocialLink>
      </SC.IconSet>
    </SC.ListItem>
  );
};
