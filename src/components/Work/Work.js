import React from 'react'
import LanguageSelector from 'components/LangaugeSelector'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
  Logo,
  Text,
  LogoContainer,
} from 'components/CommonStyles'
import BrandLogo from 'images/Logo.png'
import Clients from 'components/Clients'
import { Container } from './Work.style'
import { T } from 'locale'

const Work = ({ isActive, setActive }) => {
  return (
    <Section active={isActive}>
      <SectionSidebar onClick={() => setActive(1)}>
        <SidebarName primaryColor>{T('weWorkWith')}</SidebarName>
      </SectionSidebar>
      {isActive && (
        <>
          <LanguageSelector />
          <ContentContainer>
            <LogoContainer>
              <Logo src={BrandLogo} alt="" />
            </LogoContainer>
            <Container>
              <Text title>{T('weWorkWith')}</Text>
              <Clients />
            </Container>
          </ContentContainer>
        </>
      )}
    </Section>
  )
}

export default Work
