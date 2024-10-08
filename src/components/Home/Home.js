import React, { useState, useEffect, useContext } from 'react'
import { useLocation } from 'react-router-dom'
import LanguageSelector from 'components/LangaugeSelector'
import { LanguageContext, languageOptions } from 'locale'
import WeCan from 'components/WeCan'
import WeAre from 'components/WeAre'
import WeDo from 'components/WeDo'
import WeWorkWith from 'components/WeWorkWith'
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
  extendTextStyle,
} from './Home.style'

const Home = ({ isActive, setActive }) => {
  const [selectedMenu, setSelectedMenu] = useState(0)
  const location = useLocation()
  const languageContext = useContext(LanguageContext)

  let currentPath = location.pathname
  useEffect(() => {
    if (currentPath === '/ar') {
      languageContext.setLanguage(languageOptions[1])
    } else {
      languageContext.setLanguage(languageOptions[0])
    }
  }, [location])

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
                  <Text paragraph extendStyle={extendTextStyle}>
                    {T('homepageParagraphOne')}
                    <SpecialStyle bold italic>
                      {T('diverse')}
                    </SpecialStyle>
                  </Text>
                  <Text delay={3.5} extendStyle={extendTextStyle}>
                    <SpecialStyle bold>{T('but')}</SpecialStyle>{' '}
                    {T('homepageParagraphTwo')}
                  </Text>
                  <Text paragraph delay={7} extendStyle={extendTextStyle}>
                    <SpecialStyle bold italic>
                    {T('everyDetailMatters')}
                    </SpecialStyle>
                   {T('homepagePreParagraphTwo')}
                  </Text>
                  <Text paragraph delay={currentPath.includes('ar') ? 7 : 10.5} extendStyle={extendTextStyle}>
                    {T('homepageParagraphThree')}
                    <SpecialStyle bold italic>
                      {T('effectiveness')}
                    </SpecialStyle>
                  </Text>
                  <Text paragraph delay={currentPath.includes('ar') ? 10.5 : 14} extendStyle={extendTextStyle}>{T('homepageParagraphFour')}</Text>
                  <Text underLine paragraph delay={currentPath.includes('ar') ? 14 : 17.5} extendStyle={extendTextStyle}>
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
                  <WeWorkWith />
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
