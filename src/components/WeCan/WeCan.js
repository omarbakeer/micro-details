import React from 'react'
import codeImage from 'images/code.png'
import consultImage from 'images/consult.png'
import designImage from 'images/design.png'
import knightImage from 'images/knight.png'
import planImage from 'images/plan.png'
import {
  WeCanContainer,
  WeCanItem,
  WeCanTitleWithIcon,
  Title,
  ImgIcon,
  ContentText,
} from './WeCan.style'

const WeCan = () => (
  <WeCanContainer>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={knightImage} />
        <Title>Strategize</Title>
      </WeCanTitleWithIcon>
      <ContentText>
        Little strategies. Big ideas. Cost-effective methods to reach your brand
        objective.
      </ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={codeImage} />
        <Title>Develop</Title>
      </WeCanTitleWithIcon>
      <ContentText>
        Website, application, social growth, engagement rates, campaigns,
        content and everything needed to give you an edge over everyone else.
      </ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={designImage} />
        <Title>Design</Title>
      </WeCanTitleWithIcon>
      <ContentText>
        Taking care of every detail, you will get consistency in the visual
        aesthetics we design. Brand tone and emotion is maintained.
      </ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={planImage} />
        <Title>IDENTIFY</Title>
      </WeCanTitleWithIcon>
      <ContentText>
        Find your voice and distinguish your brand by positioning it in the
        market.
      </ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={consultImage} />
        <Title>Consult</Title>
      </WeCanTitleWithIcon>
      <ContentText>
        Helping you diagnose your marketing gaps and address them.
      </ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={planImage} />
        <Title>AMPLIFY</Title>
      </WeCanTitleWithIcon>
      <ContentText>
        Tactics designed to boost your presence, business growth and brand
        reach.
      </ContentText>
    </WeCanItem>
  </WeCanContainer>
)

export default WeCan
