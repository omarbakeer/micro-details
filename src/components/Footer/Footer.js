import React from 'react'
import { Icon } from 'components/CommonStyles'
import RandomText from 'images/random-text.png'
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
} from './Footer.style'
import { DesktopRandomTextImg } from '../CommonStyles'

const FooterContainer = (props) => {
  return (
    <Footer>
      <Filler>
        <DesktopRandomTextImg footer src={RandomText} alt="micro details logo" />
      </Filler>
      <Filler color="black" />
      <Filler>
        <DesktopRandomTextImg footer src={RandomText} alt="micro details logo" />
      </Filler>
      <Filler color="black" />
      <Filler>
        <DesktopRandomTextImg footer src={RandomText} alt="micro details logo" />
      </Filler>
      <Division>
        <TitleWithIcon>
          <Icon icon="ef79" size={24} extendStyle={extendIcon} />
          <Title>Jeddah</Title>
        </TitleWithIcon>
        <Address>
          Prince Sultan Street, Al Murjana Tower, 7th floor, Jeddah- KSA
        </Address>
      </Division>
      <Division>
        <TitleWithIcon>
          <Icon icon="ef79" size={24} extendStyle={extendIcon} />
          <Title>Cairo</Title>
        </TitleWithIcon>
        <Address>
          55 Makram Ebaid, City Center Tower 4th floor, Cairo - Egypt
        </Address>
      </Division>
      <Division flex={4}>
        <TitleWithIcon mb={16}>
          <Icon icon="ec8a" size={24} />
          <Link href="tel:+966562330130">+966 56 233 0130</Link>
        </TitleWithIcon>
        <TitleWithIcon>
          <Icon icon="ef14" size={24} />
          <Link href="mailto:info@micro-details.com">
            info@micro-details.com
          </Link>
        </TitleWithIcon>
      </Division>
      <Division SocialDivision flex={6}>
        <SocialMediaContainer>
          <SocialMediaLink href="https://www.facebook.com/Micro-Details-412285212646523/?modal=admin_todo_tour">
            <Icon icon="ed37" size={30} />
          </SocialMediaLink>
          <SocialMediaLink href="https://twitter.com/MicroDetails">
            <Icon icon="ed7a" size={30} />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.instagram.com/micro.details">
            <Icon icon="ed46" size={30} />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.linkedin.com/company/18959521">
            <Icon icon="ed4d" size={30} />
          </SocialMediaLink>
        </SocialMediaContainer>
        <CopyRights>
          © <span style={{ fontWeight: 500 }}>Micro Details</span> - All rights
          reserved 2020
        </CopyRights>
      </Division>
    </Footer>
  )
}

export default FooterContainer
