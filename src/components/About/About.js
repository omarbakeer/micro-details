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
  Icon,
} from 'components/CommonStyles'
import LanguageSelector from 'components/LangaugeSelector'
import BrandLogo from 'images/Logo.png'
import { T } from 'locale'
import {
  Container,
  MissionAndVisionContainer,
  TitleContainer,
  ParagraphContainer,
  Wrapper,
  Title,
  SpecialStyle,
  extendIcon,
  extendText,
  extendTextZeroMargins,
  marginToAlignText,
  lineHeightAndLetterSpacing,
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
          <ContentContainer padding="5px 5% 5% 11%">
            <LogoContainer>
              <Logo src={BrandLogo} alt="" />
            </LogoContainer>
            <Container>
              <Title >{T('ourStory')}</Title>
              <Text paragraph extendStyle={mobileCenteredText.concat(extendText, lineHeightAndLetterSpacing)}>
                {T('partOneAboutParagraphOne')}
                <SpecialStyle vBold italic>
                  {T('partTwoAboutParagraphOne')}
                </SpecialStyle>
                {T('partThreeAboutParagraphOne')}
              </Text>
              <Text paragraph extendStyle={mobileCenteredText.concat(lineHeightAndLetterSpacing)}>
                {T('aboutParagraphTwo')}
              </Text>
              <MissionAndVisionContainer>
                <Wrapper>
                  <Icon icon="eecc" size={60} extendStyle={extendIcon} />
                  <TitleContainer>
                    <Text secondryTitle color="white" extendStyle={marginToAlignText}>
                      {T('mission')}
                    </Text>
                  </TitleContainer>
                  <ParagraphContainer>
                    <Text paragraph extendStyle={extendTextZeroMargins.concat(lineHeightAndLetterSpacing)}>
                      {T('missonParagraph')}
                    </Text>
                  </ParagraphContainer>
                </Wrapper>
                <Wrapper>
                  <Icon icon="ef24" size={60} extendStyle={extendIcon} />
                  <TitleContainer>
                    <Text secondryTitle color="white" extendStyle={marginToAlignText}>
                      {T('vision')}
                    </Text>
                  </TitleContainer>
                  <ParagraphContainer>
                    <Text extendStyle={extendTextZeroMargins.concat(lineHeightAndLetterSpacing)} paragraph>
                      {T('visionParagraph')}
                    </Text>
                  </ParagraphContainer>
                </Wrapper>
              </MissionAndVisionContainer>
              <Title secondry>{T('howWeDoIt')}</Title>
              <Text extendStyle={mobileCenteredText.concat(lineHeightAndLetterSpacing)} paragraph>
                {T('aboutParagraphThree')}
              </Text>
              <Text extendStyle={mobileCenteredText.concat(lineHeightAndLetterSpacing)} paragraph>
                {T('aboutParagraphFourPartOne')}
                <SpecialStyle vBold italic arabic>
                  {T('aboutParagraphFourPartTwo')}
                </SpecialStyle>
              </Text>
              <Text extendStyle={mobileCenteredText.concat(lineHeightAndLetterSpacing)} paragraph>
                {T('aboutParagraphFive')}
              </Text>
            </Container>
          </ContentContainer>
        </>
      )}
    </Section>
  )
}

export default About
