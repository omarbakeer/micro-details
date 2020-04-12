import React from 'react'
import codeImage from 'images/code.png'
import consultImage from 'images/consult.png'
import designImage from 'images/design.png'
import knightImage from 'images/knight.png'
import planImage from 'images/plan.png'
import { T } from 'locale'
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
        <Title>{T('strategize')}</Title>
      </WeCanTitleWithIcon>
      <ContentText>{T('strategizeParagraph')}</ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={codeImage} />
        <Title>{T('develop')}</Title>
      </WeCanTitleWithIcon>
      <ContentText>{T('developParagraph')}</ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={designImage} />
        <Title>{T('design')}</Title>
      </WeCanTitleWithIcon>
      <ContentText>{T('designParagraph')}</ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={planImage} />
        <Title>{T('identify')}</Title>
      </WeCanTitleWithIcon>
      <ContentText>{T('identifyParagraph')}</ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={consultImage} />
        <Title>{T('consult')}</Title>
      </WeCanTitleWithIcon>
      <ContentText>{T('consultParagraph')}</ContentText>
    </WeCanItem>
    <WeCanItem>
      <WeCanTitleWithIcon>
        <ImgIcon src={planImage} />
        <Title>{T('amplify')}</Title>
      </WeCanTitleWithIcon>
      <ContentText>{T('amplifyParagraph')}</ContentText>
    </WeCanItem>
  </WeCanContainer>
)

export default WeCan
