import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import LanguageSelector from 'components/LangaugeSelector'
import { LanguageContext, languageOptions } from 'locale'
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
  const [selectedMenu, setSelectedMenu] = useState(2)
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
          {T('we')}{' '}
          <SpecialStyle uppercase italic={selectedMenu === 0} vBold>
          {T('can')}
          </SpecialStyle>
        </MenuItem>
        <MenuItem
          selected={selectedMenu === 1}
          onClick={() => setSelectedMenu(1)}
        >
          {T('we')}{' '}
          <SpecialStyle uppercase italic={selectedMenu === 1} vBold>
          {' '}
          {T('are')}
          </SpecialStyle>
        </MenuItem>
        <MenuItem
          rightBorder
          selected={selectedMenu === 2}
          onClick={() => setSelectedMenu(2)}
        >
          {T('we')}{' '}
          <SpecialStyle uppercase italic={selectedMenu === 2} vBold>
          {T('do')}
          </SpecialStyle>
        </MenuItem>
        <MenuItem
          selected={selectedMenu === 3}
          onClick={() => setSelectedMenu(3)}
        >
          {T('we')}{' '}
          <SpecialStyle uppercase italic={selectedMenu === 3} vBold>
          {T('work')}
          </SpecialStyle>{' '}
          {T('with')}
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
        <>
          <LanguageSelector />
          <ContentContainer padding="55px 3.6% 5%">
            <LogoContainer>
              <Logo src={BrandLogo} alt="" />
            </LogoContainer>
            <ShowOnDesktop>
              <Banner>
                <Slogan>
                  <SloganText>
                    {T('bigThings')}{' '}<NoWrapp>{T('byLittle')}</NoWrapp>{' '}
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
                    <SpecialStyle bold>{T('but')}</SpecialStyle>{' '}
                    {T('homepageParagraphTwo')}
                  </Text>
                  <Text paragraph maxWidth="60%">
                    <SpecialStyle bold italic>
                    {T('everyDetailMatters')}
                    </SpecialStyle>
                   {T('homepagePreParagraphTwo')}
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
                  <Clients isHomePage />
                </ClientsContainer>
              )}
            </HomeDetails>
          </ContentContainer>
        </>
      )}
    </Section>
  )
}

export default Home
