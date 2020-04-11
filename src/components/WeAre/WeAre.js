import React from 'react'
import creativeImage from 'images/creative.png'
import processImage from 'images/process.png'
import detailsImage from 'images/details.png'
import {
  WeCanContainer,
  WeCanItem,
  WeCanTitleWithIcon,
  Title,
  ImgIcon,
  ContentText,
} from './WeAre.style'

const WeAre = () => (
  <WeCanContainer>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={creativeImage} />
        <Title>Strategize</Title>
      </WeCanTitleWithIcon>
      <ContentText>
        Little strategies. Big ideas. Cost-effective methods to reach your brand
        objective.
      </ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={processImage} />
        <Title>Develop</Title>
      </WeCanTitleWithIcon>
      <ContentText>
        Website, application, social growth, engagement rates, campaigns,
        content and everything needed to give you an edge over everyone else.
      </ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={detailsImage} />
        <Title>Design</Title>
      </WeCanTitleWithIcon>
      <ContentText>
        Taking care of every detail, you will get consistency in the visual
        aesthetics we design. Brand tone and emotion is maintained.
      </ContentText>
    </WeCanItem>
  </WeCanContainer>
)

export default WeAre
