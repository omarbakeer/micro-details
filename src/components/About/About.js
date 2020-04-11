import React from 'react'
import { Logo, LogoContainer, Text } from 'components/CommonStyles'
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
} from './About.style'

const About = () => {
  return (
    <>
      <LogoContainer>
        <Logo src={BrandLogo} alt="" />
      </LogoContainer>
      <Container>
        <Text title>{T('ourStory')}</Text>
        <Text subTitle>{T('aboutParagraphOne')}</Text>
        <Text paragraph>{T('aboutParagraphTwo')}</Text>
        <MissionAndVisionContainer>
          <Wrapper>
            <Illustration target src={Target} alt="" />
            <TitleContainer>
              <Text secondryTitle color="white">
                {T('mission')}
              </Text>
            </TitleContainer>
            <ParagraphContainer>
              <Text paragraph>{T('missonParagraph')}</Text>
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
              <Text paragraph>{T('visionParagraph')}</Text>
            </ParagraphContainer>
          </Wrapper>
        </MissionAndVisionContainer>
        <Text title>{T('howWeDoIt')}</Text>
        <Text paragraph>{T('aboutParagraphThree')}</Text>
        <Text paragraph>{T('aboutParagraphFour')}</Text>
      </Container>
    </>
  )
}
export default About
