import React from 'react'
import { T } from 'locale'
import creativeImage from 'images/creative.png'
import processImage from 'images/process.png'
import detailsImage from 'images/details.png'
import {
  WeAreContainer,
  WeAreItem,
  Title,
  ImgIcon,
  ContentText,
} from './WeAre.style'

const WeAre = () => (
  <WeAreContainer>
    <WeAreItem>
      <ImgIcon src={creativeImage} size={55} />
      <Title>{T('creative')}</Title>
      <ContentText>{T('creativeDescription')}</ContentText>
    </WeAreItem>
    <WeAreItem>
      <ImgIcon src={processImage} size={62.5} />
      <Title>{T('methodical')}</Title>
      <ContentText>{T('methodicalDescription')}</ContentText>
    </WeAreItem>
    <WeAreItem>
      <ImgIcon src={detailsImage} size={47.5} />
      <Title>{T('detailed')}</Title>
      <ContentText>{T('detailedDescription')}</ContentText>
    </WeAreItem>
  </WeAreContainer>
)

export default WeAre
