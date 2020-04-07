import React from 'react'
import { Logo, LogoContainer, Text } from 'components/CommonStyles'
import Target from 'images/target.png'
import Vision from 'images/vision.webp'
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
    <Container>
      <Text title>Our Little Story</Text>
      <Text subTitle>
        Micro Details is a detail-oriented marketing agency based in Saudi
        Arabia.
      </Text>
      <Text paragraph>
        We started our journey when we experienced the reach and impact of
        digital marketing on brands. The marketeers focus on ‘details’, but our
        team is passionate about ‘micro details’. We started this company so we
        can continue to analyze and use these details to create unique and
        successful marketing campaigns for our clients.
      </Text>
      <MissionAndVisionContainer>
        <Wrapper>
          <Illustration target src={Target} alt="" />
          <TitleContainer>
            <Text secondryTitle>Misson</Text>
          </TitleContainer>
          <ParagraphContainer>
            <Text paragraph>
              To help ambitious organizations reach the right audience to
              maximize growth and profitability.
            </Text>
          </ParagraphContainer>
        </Wrapper>
        <Wrapper>
          <Illustration vision src={Vision} alt="" />
          <TitleContainer>
            <Text secondryTitle>Vision</Text>
          </TitleContainer>
          <ParagraphContainer>
            <Text paragraph>
              Grow into the most reliable and go-to digital and marketing agency
              in the industry.
            </Text>
          </ParagraphContainer>
        </Wrapper>
      </MissionAndVisionContainer>
      <Text title>How we do it?</Text>
      <Text paragraph>
        You look at the big picture while we work on the subtle micro details,
        leading to success for everyone involved. We discovered this through
        years of experience in the marketing, digital and business development
        sector across various industries in the GCC region.
      </Text>
      <Text paragraph>
        Offering you marketing plan plus strategy, e-marketing, web and
        application development, design, training and workshops as well as
        growth hacking and brand positioning -- Micro Details will make a big
        difference to your brand.
      </Text>
    </Container>
  )
}
export default About
