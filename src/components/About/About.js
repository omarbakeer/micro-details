import React from 'react'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
  Logo,
  LogoContainer,
  Text,
  mobileCenteredText,
} from 'components/CommonStyles'
import LanguageSelector from 'components/LangaugeSelector'
import Target from 'images/target.png'
import Vision from 'images/vision.webp'
import BrandLogo from 'images/Logo.png'
import { T } from 'locale'
import {
  Container,
  Illustration,
  MissionAndVisionContainer,
  TitleContainer,
  ParagraphContainer,
  Wrapper,
  Title,
} from './About.style'

const About = ({ isActive, setActive }) => {
  return (
    <Section active={isActive}>
      <SectionSidebar onClick={() => setActive(3)}>
        <SidebarName primaryColor>{T('aboutUs')}</SidebarName>
      </SectionSidebar>
      {isActive && (
        <>
          <LanguageSelector />
          <ContentContainer>
            <LogoContainer>
              <Logo src={BrandLogo} alt="" />
            </LogoContainer>
            <Container>
              <Title>{T('ourStory')}</Title>
              <Text paragraph extendStyle={mobileCenteredText}>
                {T('aboutParagraphOne')}
              </Text>
              <Text paragraph extendStyle={mobileCenteredText}>
                {T('aboutParagraphTwo')}
              </Text>
              <MissionAndVisionContainer>
                <Wrapper>
                  <Illustration target src={Target} alt="" />
                  <TitleContainer>
                    <Text secondryTitle color="white">
                      {T('mission')}
                    </Text>
                  </TitleContainer>
                  <ParagraphContainer>
                    <Text paragraph extendStyle={mobileCenteredText}>
                      {T('missonParagraph')}
                    </Text>
                  </ParagraphContainer>
                </Wrapper>
                <Wrapper>
                  <Illustration vision src={Vision} alt="" />
                  <TitleContainer>
                    <Text secondryTitle color="white">
                      {T('vision')}
                    </Text>
                  </TitleContainer>
                  <ParagraphContainer>
                    <Text extendStyle={mobileCenteredText} paragraph>
                      {T('visionParagraph')}
                    </Text>
                  </ParagraphContainer>
                </Wrapper>
              </MissionAndVisionContainer>
              <Title>{T('howWeDoIt')}</Title>
              <Text extendStyle={mobileCenteredText} paragraph>
                {T('aboutParagraphThree')}
              </Text>
              <Text extendStyle={mobileCenteredText} paragraph>
                {T('aboutParagraphFour')}
              </Text>
            </Container>
          </ContentContainer>
        </>
      )}
    </Section>
  )
}

export default About
