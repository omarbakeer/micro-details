import React, { useState } from 'react'
import RandomText from 'images/random-text.png'
import WeCan from 'components/WeCan'
import WeAre from 'components/WeAre'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
  LogoContainer,
  Logo,
  HideOnDeskTop,
  ShowOnDesktop,
  DesktopRandomTextImg,
} from 'components/CommonStyles'
import BrandLogo from 'images/Logo.png'
import {
  Banner,
  Slogan,
  SloganText,
  NoWrapp,
  DescriptionsContainer,
  Sentence,
  SpecialStyle,
  HomeDetails,
  HomeMenu,
  MenuItem,
  MobileMenuItem,
  Row,
  MobileMenu,
} from './Home.style'

const Home = ({ isActive, setActive }) => {
  const [selectedMenu, setSelectedMenu] = useState(0)

  const renderMobileMenu = () => {
    return (
      <HideOnDeskTop>
        <MobileMenu>
          <Row>
            <MobileMenuItem
              onClick={() => setSelectedMenu(0)}
              selected={selectedMenu === 0}
            >
              we{' '}
              <SpecialStyle italic={selectedMenu === 0} vBold>
                CAN
              </SpecialStyle>
            </MobileMenuItem>
            <MobileMenuItem
              onClick={() => setSelectedMenu(1)}
              selected={selectedMenu === 1}
              lastEelement
            >
              we{' '}
              <SpecialStyle italic={selectedMenu === 1} vBold>
                ARE
              </SpecialStyle>
            </MobileMenuItem>
          </Row>
          <Row>
            <MobileMenuItem
              onClick={() => setSelectedMenu(2)}
              selected={selectedMenu === 2}
            >
              {' '}
              we{' '}
              <SpecialStyle italic={selectedMenu === 3} vBold>
                DO
              </SpecialStyle>
            </MobileMenuItem>
            <MobileMenuItem
              onClick={() => setSelectedMenu(3)}
              lastEelement
              selected={selectedMenu === 3}
            >
              we{' '}
              <SpecialStyle italic={selectedMenu === 3} vBold>
                WORK
              </SpecialStyle>{' '}
              with
            </MobileMenuItem>
          </Row>
        </MobileMenu>
      </HideOnDeskTop>
    )
  }

  const renderDesktopMenu = () => {
    return (
      <HomeMenu>
        <ShowOnDesktop>
          <MenuItem
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
        </ShowOnDesktop>
      </HomeMenu>
    )
  }

  return (
    <Section active={isActive} color="#fcd72f">
      <DesktopRandomTextImg src={RandomText} alt="micro details logo" />
      <SectionSidebar onClick={() => setActive(4)}>
        <SidebarName />
        <SidebarName>Home</SidebarName>
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
                BIG THINGS <NoWrapp>BY LITTLE</NoWrapp> THINGS
              </SloganText>
            </Slogan>
            <DescriptionsContainer>
              <Sentence style={{ maxWidth: '70%' }}>
                The world is getting fast-paced. Powe rful.
                <SpecialStyle bold italic>
                  Diverse
                </SpecialStyle>
              </Sentence>
              <Sentence>
                <SpecialStyle bold>But</SpecialStyle>, it’s a small world.
              </Sentence>
              <Sentence>
                <SpecialStyle bold italic>
                  Every detail matters
                </SpecialStyle>
                because there’s no room for mistakes.
              </Sentence>
              <Sentence>
                All elements of your marketing needs tailored for precise
                <SpecialStyle bold italic>
                  effectiveness.
                </SpecialStyle>
              </Sentence>
              <Sentence>That’s where we come in.</Sentence>
              <Sentence underLine>
                We will make your
                <SpecialStyle bold italic>
                  dreams bigger
                </SpecialStyle>
                than this small world.
              </Sentence>
            </DescriptionsContainer>
          </Banner>
          </ShowOnDesktop>

          {renderMobileMenu()}

          <HomeDetails>
            {renderDesktopMenu()}
            {selectedMenu === 0 && <WeCan />}
            {selectedMenu === 1 && <WeAre />}
            {selectedMenu === 2 && <WeAre />}
            {selectedMenu === 3 && <WeAre />}
          </HomeDetails>
        </ContentContainer>
      )}
    </Section>
  )
}

export default Home
