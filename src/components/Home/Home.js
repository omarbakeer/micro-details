import React, { useState } from 'react'
import WeCan from 'components/WeCan'
import WeAre from 'components/WeAre'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
  LogoContainer,
  Logo,
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
} from './Home.style'

const Home = ({ isActive, setActive }) => {
  const [selectedMenu, setSelectedMenu] = useState(0)
  return (
    <Section active={isActive} color="#fcd72f">
      <SectionSidebar onClick={() => setActive(4)}>
        <SidebarName />
        <SidebarName>Home</SidebarName>
      </SectionSidebar>
      {isActive && (
        <ContentContainer>
          <LogoContainer>
            <Logo src={BrandLogo} alt="" />
          </LogoContainer>
          <Banner>
            <Slogan>
              <SloganText>
                BIG THINGS <NoWrapp>BY LITTLE</NoWrapp> THINGS
              </SloganText>
            </Slogan>
            <DescriptionsContainer>
              <Sentence style={{ maxWidth: '70%' }}>
                The world is getting fast-paced. Powerful.{' '}
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
                </SpecialStyle>{' '}
                because there’s no room for mistakes.
              </Sentence>
              <Sentence>
                All elements of your marketing needs tailored for precise{' '}
                <SpecialStyle bold italic>
                  effectiveness.
                </SpecialStyle>
              </Sentence>
              <Sentence>That’s where we come in.</Sentence>
              <Sentence underLine>
                We will make your{' '}
                <SpecialStyle bold italic>
                  dreams bigger
                </SpecialStyle>{' '}
                than this small world.
              </Sentence>
            </DescriptionsContainer>
          </Banner>
          <HomeDetails>
            <HomeMenu>
              <MenuItem
                selected={selectedMenu === 0}
                onClick={() => setSelectedMenu(0)}
              >
                we <SpecialStyle italic={selectedMenu === 0} vBold>CAN</SpecialStyle>
              </MenuItem>
              <MenuItem
                selected={selectedMenu === 1}
                onClick={() => setSelectedMenu(1)}
              >
                we <SpecialStyle italic={selectedMenu === 1} vBold>ARE</SpecialStyle>
              </MenuItem>
              <MenuItem
                selected={selectedMenu === 2}
                onClick={() => setSelectedMenu(2)}
              >
                we <SpecialStyle italic={selectedMenu === 2} vBold>DO</SpecialStyle>
              </MenuItem>
              <MenuItem
                selected={selectedMenu === 3}
                onClick={() => setSelectedMenu(3)}
              >
                we <SpecialStyle italic={selectedMenu === 3} vBold>WORK</SpecialStyle> with
              </MenuItem>
            </HomeMenu>
            {selectedMenu === 0 && <WeCan />}
            {selectedMenu === 1 && <WeAre />}
            {/* {selectedMenu === 2 && <WeAre />}
            {selectedMenu === 3 && <WeAre />} */}
          </HomeDetails>
        </ContentContainer>
      )}
    </Section>
  )
}

export default Home
