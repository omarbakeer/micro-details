import React from 'react'
import { Logo, Text, LogoContainer } from 'components/CommonStyles'
import BrandLogo from 'images/Logo.png'
import Clients from 'components/Clients'
import { Container } from './Work.style'
import { T } from 'locale'

const Work = () => {
  return (
    <>
      <LogoContainer>
        <Logo src={BrandLogo} alt="" />
      </LogoContainer>
      <Container>
        <Text title>{T('weWorkWith')}</Text>
        <Clients />
      </Container>
    </>
  )
}
export default Work
