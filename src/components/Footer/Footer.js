import React, { useState } from 'react';
import { Text, Icon } from 'components/CommonStyles';
import {
  Footer,
  Filler,
  Division,
  TitleWithIcon,
  Title,
  Address,
  Link,
  SocialMediaContainer,
  SocialMediaLink,
  CopyRights,
  extendIcon,
} from './Footer.style';

const FooterContainer = (props) => {
  return (
    <Footer>
      <Filler />
      <Filler color="black" />
      <Filler />
      <Filler color="black" />
      <Filler />
      <Division>
        <TitleWithIcon>
          <Icon icon="ef79" size={24} extendStyle={extendIcon}/>
          <Title>Jeddah</Title>
        </TitleWithIcon>
        <Address>
          Hisham bin Hakim Street, Al Andalus District, Jeddah 23322, KSA
        </Address>
      </Division>
      <Division>
        <TitleWithIcon>
          <Icon icon="ef79" size={24} extendStyle={extendIcon}/>
          <Title>Cairo</Title>
        </TitleWithIcon>
        <Address>
          55 Makram Ebaid, City Center Tower 4th floor, Cairo - Egypt
        </Address>
      </Division>
      <Division>
        <TitleWithIcon mb={16}>
          <Icon icon="ec8a" size={24}/>
          <Link href="tel:+966562330130">+966 56 233 0130</Link>
        </TitleWithIcon>
        <TitleWithIcon>
          <Icon icon="ef14" size={24}/>
          <Link href="mailto:info@micro-details.com">info@micro-details.com</Link>
        </TitleWithIcon>
      </Division>
      <Division SocialDivision>
        <SocialMediaContainer>
          <SocialMediaLink href="#"><Icon icon="ed37" size={30} /></SocialMediaLink>
          <SocialMediaLink href="#"><Icon icon="ed7a" size={30} /></SocialMediaLink>
          <SocialMediaLink href="#"><Icon icon="ed46" size={30} /></SocialMediaLink>
          <SocialMediaLink href="#"><Icon icon="ed4d" size={30} /></SocialMediaLink>
        </SocialMediaContainer>
        <CopyRights>
          © <span style={{fontWeight: 500}}>Micro Details</span> - All rights reserved 2020
        </CopyRights>
      </Division>
    </Footer>
  );
};

export default FooterContainer;
