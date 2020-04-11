import React from 'react'
import { Row, ServiceBlock, Service,Container } from './WeDo.style'
import { T } from 'locale'
import { Icon } from 'components/CommonStyles'

const WeDo = () => {
  return (
    <Container>
      <Row>
        <ServiceBlock>
          <Icon icon="e97d" size={26} color={'primary'} />
          <Service>{T('marketingPlan')}</Service>
        </ServiceBlock>
        <ServiceBlock>
          <Icon icon="eae8" size={26} color={'primary'} />
          <Service>{T('designAndDevelopment')}</Service>
        </ServiceBlock>
        <ServiceBlock lastEelement>
          <Icon icon="e962" size={26} color={'primary'} />
          <Service>{T('buissnessConsultation')}</Service>
        </ServiceBlock>
      </Row>
      <Row>
        <ServiceBlock lastRow>
          <Icon icon="ecf4" size={26} color={'primary'} />
          <Service>{T('trainingAndWorkshop')}</Service>
        </ServiceBlock>
        <ServiceBlock lastRow>
          <Icon icon="e97d" size={26} color={'primary'} />
          <Service>{T('growthHacking')}</Service>
        </ServiceBlock>
        <ServiceBlock lastRow lastEelement>
          <Icon icon="eece" size={26} color={'primary'} />
          <Service>{T('photographyAndVideoghraphy')}</Service>
        </ServiceBlock>
      </Row>
    </Container>
  )
}
export default WeDo
