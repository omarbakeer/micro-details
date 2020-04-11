import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import { LanguageContext } from 'locale'
import { languageOptions } from 'locale'
import WeCan from 'components/WeCan'
import WeAre from 'components/WeAre'
import WeDo from 'components/WeDo'
import Clients from 'components/Clients'
import { T } from 'locale'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
  LogoContainer,
  Logo,
  ShowOnDesktop,
  Text,
} from 'components/CommonStyles'
import BrandLogo from 'images/Logo.png'
import {
  Banner,
  Slogan,
  SloganText,
  NoWrapp,
  DescriptionsContainer,
  SpecialStyle,
  HomeDetails,
  HomeMenu,
  MenuItem,
  ClientsContainer,
} from './Home.style'

const Home = ({ isActive, setActive }) => {
  const [selectedMenu, setSelectedMenu] = useState(1)
  const location = useLocation()
  const languageContext = useContext(LanguageContext)

  useEffect(() => {
    let currentPath = location.pathname
    if (currentPath === '/ar') {
      languageContext.setLanguage(languageOptions[1])
    } else {
      languageContext.setLanguage(languageOptions[0])
    }
  }, [])

  const renderMenu = () => {
    return (
      <HomeMenu>
        <MenuItem
          rightBorder
          selected={selectedMenu === 0}
          onClick={() => setSelectedMenu(0)}
        >
          we{' '}
          <SpecialStyle italic={selectedMenu === 0} vBold>
            CAN
          </SpecialStyle>
        </MenuItem>
        <MenuItem
          selected={selectedMenu === 1}
          onClick={() => setSelectedMenu(1)}
        >
          we{' '}
          <SpecialStyle italic={selectedMenu === 1} vBold>
            ARE
          </SpecialStyle>
        </MenuItem>
        <MenuItem
          rightBorder
          selected={selectedMenu === 2}
          onClick={() => setSelectedMenu(2)}
        >
          we{' '}
          <SpecialStyle italic={selectedMenu === 2} vBold>
            DO
          </SpecialStyle>
        </MenuItem>
        <MenuItem
          selected={selectedMenu === 3}
          onClick={() => setSelectedMenu(3)}
        >
          we{' '}
          <SpecialStyle italic={selectedMenu === 3} vBold>
            WORK
          </SpecialStyle>{' '}
          with
        </MenuItem>
      </HomeMenu>
    )
  }

  return (
    <Section active={isActive}>
      <SectionSidebar primaryColor onClick={() => setActive(4)}>
        <SidebarName>{T('home')}</SidebarName>
      </SectionSidebar>
      {isActive && (
        <ContentContainer>
          <LogoContainer>
            <Logo src={BrandLogo} alt="" />
          </LogoContainer>
          <ShowOnDesktop>
            <Banner>
              <Slogan>
                <SloganText>
                  {T('bigThings')} <NoWrapp>{T('byLittle')} </NoWrapp>{' '}
                  {T('things')}
                </SloganText>
              </Slogan>
              <DescriptionsContainer>
                <Text paragraph maxWidth="70%">
                  {T('homepageParagraphOne')}
                  <SpecialStyle bold italic>
                    {T('diverse')}
                  </SpecialStyle>
                </Text>
                <Text>
                  <SpecialStyle bold>{T('but')}</SpecialStyle>,{' '}
                  {T('homepageParagraphTwo')}
                </Text>
                <Text paragraph>
                  {T('homepageParagraphThree')}
                  <SpecialStyle bold italic>
                    {T('effectiveness')}
                  </SpecialStyle>
                </Text>
                <Text paragraph>{T('homepageParagraphFour')}</Text>
                <Text underLine paragraph>
                  {T('homepageParagraphFive')}
                </Text>
              </DescriptionsContainer>
            </Banner>
          </ShowOnDesktop>

          <HomeDetails>
            {renderMenu()}
            {selectedMenu === 0 && <WeCan />}
            {selectedMenu === 1 && <WeAre />}
            {selectedMenu === 2 && <WeDo />}
            {selectedMenu === 3 && (
              <ClientsContainer>
                <Clients />
              </ClientsContainer>
            )}
          </HomeDetails>
        </ContentContainer>
      )}
    </Section>
  )
}

export default Home
