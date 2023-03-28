import { useState } from "react";
import  TimeContainer  from "./TimeContainer";
import {
  Card,
  CardItem,
  CardImage,
  CardTitle,
  CardWrap,
  CardLink,
  CardList,
  TitleLink,
  Time,
  Text,
} from "./OurFriendsCard.styled";
const OurFriendsCard = ({ data }) => {
  const { title, url, addressUrl, imageUrl, address, workDays, phone, email } =
    data;
  const [isHoveringTime, setIsHoveringTime] = useState(false);
  const handleMouseOver = () => {
    setIsHoveringTime(true);
  };
  const handleMouseOut = () => {
    setIsHoveringTime(false);
  };

  const [isHoveringAdress, setIsHoveringAdress] = useState(false);
  const handleMouseOverAdress = () => {
    setIsHoveringAdress(true);
  };
  const handleMouseOutAsress = () => {
    setIsHoveringAdress(false);
  };

  const [isHoveringEmail, setIsHoveringEmail] = useState(false);
  const handleMouseOverEmail = () => {
    setIsHoveringEmail(true);
  };
  const handleMouseOutEmail = () => {
    setIsHoveringEmail(false);
  };

  const [isHoveringPhone, setIsHoveringPhone] = useState(false);
  const handleMouseOverPhone = () => {
    setIsHoveringPhone(true);
  };
  const handleMouseOutPhone = () => {
    setIsHoveringPhone(false);
  };

  return (
    <Card>
      <CardTitle>
        <TitleLink href={url} rel="noreferrer" target="_blank">
          {title}
        </TitleLink>
      </CardTitle>
      <CardWrap>
        <CardImage src={imageUrl} alt={title} />
        <CardList>
          <CardItem>
            <CardLink
              onMouseOver={handleMouseOver}
              onMouseOut={handleMouseOut}
              style={{
                color: workDays && isHoveringTime && '#f59256',
              }}
            >
              {workDays === null || workDays === undefined ? (
                <>
                  <Text>Time: </Text>
                  <Text>------------</Text>
                </>
              ) : (
                <>
                  {' '}
                  {workDays[0]?.isOpen ? (
                    <>
                      <Text>Time:</Text>
                      <Time>
                        {workDays[0].from}-{workDays[0].to}
                      </Time>
                    </>
                  ) : (
                    <>
                      <Text>Time:</Text>
                      <Time>Closed</Time>
                    </>
                  )}
                  {isHoveringTime && <TimeContainer workDays={workDays} />}
                </>
              )}
            </CardLink>
          </CardItem>
          <CardItem>
            <CardLink
              href={address && addressUrl}
              target={'_blank'}
              onMouseOver={handleMouseOverAdress}
              onMouseOut={handleMouseOutAsress}
              style={{
                color: address && isHoveringAdress && '#f59256',
              }}
            >
              Address: <br /> {address ? address : '-----------------'}
            </CardLink>
          </CardItem>
          <CardItem>
            <CardLink
              href={email && `mailto:${email}`}
              rel="noreferrer"
              target="_blank"
              onMouseOver={handleMouseOverEmail}
              onMouseOut={handleMouseOutEmail}
              style={{
                color: email && isHoveringEmail && '#f59256',
              }}
            >
              Email: <br />
              {email ? email : '-----------------'}
            </CardLink>
          </CardItem>
          <CardItem>
            <CardLink
              href={phone && `tel:${phone}`}
              onMouseOver={handleMouseOverPhone}
              onMouseOut={handleMouseOutPhone}
              style={{
                color: phone && isHoveringPhone && '#f59256',
              }}
            >
              Phone: <br />
              {phone ? phone : '-----------------'}{' '}
            </CardLink>
          </CardItem>
        </CardList>
      </CardWrap>
    </Card>
  );
};

export default OurFriendsCard;
