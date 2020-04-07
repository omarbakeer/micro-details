import React from 'react'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
} from 'components/CommonStyles'
import {
  Flex,
  Banner,
  Slogan,
  DescriptionsContainer,
  Sentence,
  HomeDetails,
  HomeMenu,
  MenuItem,
  WeCanContainer,
  WeCanItem,
} from './Home.style'

const Home = ({ isActive, setActive }) => (
  <Section active={isActive} color="#fcd72f">
    <SectionSidebar onClick={() => setActive(4)}>
      <SidebarName />
      <SidebarName>hello world</SidebarName>
    </SectionSidebar>
    {isActive && (
      <ContentContainer>
        <Flex>
          <Banner>
            <Slogan>BIG THINGS BY LITTLE THINGS</Slogan>
            <DescriptionsContainer>
              <Sentence>
                {`The world is getting fast-paced. 
Powerful. Diverse`}
              </Sentence>
              <Sentence>{`But, it’s a small world.`}</Sentence>
              <Sentence>
                {`Every detail matters because there’s no room for
mistakes.`}
              </Sentence>
              <Sentence>
                {`All elements of your marketing needs tailored for precise 
effectiveness.`}
              </Sentence>
              <Sentence>{`That’s where we come in.`}</Sentence>
              <Sentence>
                {`We will make your dreams bigger than this small world.`}
              </Sentence>
            </DescriptionsContainer>
          </Banner>
          <HomeDetails>
            <HomeMenu>
              <MenuItem>We CAN</MenuItem>
              <MenuItem>We ARE</MenuItem>
              <MenuItem>We DO</MenuItem>
              <MenuItem>We WORK with</MenuItem>
            </HomeMenu>
            <WeCanContainer>
              <WeCanItem>Ay haga maslan </WeCanItem>
              <WeCanItem>Ay haga maslan </WeCanItem>
              <WeCanItem>Ay haga maslan </WeCanItem>
              <WeCanItem>Ay haga maslan </WeCanItem>
              <WeCanItem>Ay haga maslan </WeCanItem>
              <WeCanItem>Ay haga maslan </WeCanItem>
            </WeCanContainer>
          </HomeDetails>
        </Flex>
      </ContentContainer>
    )}
  </Section>
)

export default Home
