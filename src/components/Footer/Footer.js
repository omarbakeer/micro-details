import React from 'react'
import { T } from 'locale'
import { Icon } from 'components/CommonStyles'
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

const FooterContainer = () => {
  return (
    <Footer>
      <Filler />
      <Filler color="black" />
      <Filler />
      <Filler color="black" />
      <Filler />
      <Division>
        <TitleWithIcon>
          <Icon icon="ef79" size={24} extendStyle={extendIcon} />
          <Title>{T('jeddah')}</Title>
        </TitleWithIcon>
        <Address>
          {T('saudiAddress')}
        </Address>
      </Division>
      <Division>
        <TitleWithIcon>
          <Icon icon="ef79" size={24} extendStyle={extendIcon} />
          <Title>{(T('cairo'))}</Title>
        </TitleWithIcon>
        <Address>
        {T('egyptAddress')}
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
            <Icon dontFlipOnRtl icon="ed37" size={30} />
          </SocialMediaLink>
          <SocialMediaLink href="https://twitter.com/MicroDetails">
            <Icon dontFlipOnRtl icon="ed7a" size={30} />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.instagram.com/micro.details">
            <Icon dontFlipOnRtl icon="ed46" size={30} />
          </SocialMediaLink>
          <SocialMediaLink href="https://www.linkedin.com/company/18959521">
            <Icon dontFlipOnRtl icon="ed4d" size={30} />
          </SocialMediaLink>
        </SocialMediaContainer>
        <CopyRights>
          © <span style={{ fontWeight: 600 }}>{T('microDetails')}</span> - {T('copyRights')}
        </CopyRights>
      </Division>
    </Footer>
  )
}

export default FooterContainer
