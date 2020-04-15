import React from 'react'
import { Row, ServiceBlock, Service, Container, extendIcon } from './WeDo.style'
import { T } from 'locale'
import { Icon } from 'components/CommonStyles'

const WeDo = () => {
  return (
    <Container>
      <ServiceBlock order={1}>
          <Icon className="icon" icon="e97d" size={26} color={'primary'} />
          <Service>{T('marketingPlan')}</Service>
      </ServiceBlock>
      <ServiceBlock order={2}>
        <Row>
          <Icon className="icon" icon="eae8" size={26} color={'primary'} extendStyle={extendIcon} />
          <Service>{T('designAndDevelopment')}</Service>
        </Row>
      </ServiceBlock>
      <ServiceBlock order={6} lastEelement>
        <Row >
          <Icon className="icon" icon="e962" size={26} color={'primary'} extendStyle={extendIcon} />
          <Service>{T('buissnessConsultation')}</Service>
        </Row>
      </ServiceBlock>
      <ServiceBlock order={4} lastRow>
        <Row margin={10}>
          <Icon className="icon" icon="ecf4" size={26} color={'primary'} extendStyle={extendIcon} />
          <Service>{T('trainingAndWorkshop')}</Service>
        </Row>
      </ServiceBlock>
      <ServiceBlock order={5} lastRow>
        <Row margin={3}>
          <Icon className="icon" icon="e97d" size={26} color={'primary'} extendStyle={extendIcon} />
          <Service>{T('growthHacking')}</Service>
        </Row>
      </ServiceBlock>
      <ServiceBlock order={3} lastRow lastEelement>
        <Row margin={1}>
          <Icon className="icon" icon="eece" size={26} color={'primary'} extendStyle={extendIcon} />
          <Service>{T('photographyAndVideoghraphy')}</Service>
        </Row>
      </ServiceBlock>
    </Container>
  )
}
export default WeDo
