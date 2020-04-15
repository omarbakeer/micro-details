import React, { useState } from 'react'
import LanguageSelector from 'components/LangaugeSelector'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
  Logo,
  LogoContainer,
  Text,
  Icon,
  HideOnDeskTop,
  ShowOnDesktop,
  mobileCenteredText,

} from 'components/CommonStyles'
import { T } from 'locale'
import BrandLogo from 'images/Logo.png'
import { Container, Row, ServiceBlock, Service, Title } from './Services.style'

const Services = ({ isActive, setActive }) => {
  const [selectedTab, setSelectedTab] = useState(1)

  const renderTextBasedOnSelectedTab = () => {
    if (selectedTab === 1) {
      return (
        <>
          <Title>{T('marketingPlan')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>{T('marketingPlanParahraphOne')}</Text>
          <Text paragraph extendStyle={mobileCenteredText}>{T('marketingPlanParahraphTwo')}</Text>
        </>
      )
    }
    if (selectedTab === 2) {
      return (
        <>
          <Title>{T('designAndDevelopment')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>{T('designAndDevelopmentParahraphOne')}</Text>
          <Text paragraph extendStyle={mobileCenteredText}>{T('designAndDevelopmentParahraphTwo')}</Text>
        </>
      )
    }
    if (selectedTab === 3) {
      return (
        <>
          <Title>{T('buissnessConsultation')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>{T('buissnessConsultationParahraphOne')}</Text>
          <Text paragraph extendStyle={mobileCenteredText}>{T('buissnessConsultationParahraphTwo')}</Text>
        </>
      )
    }
    if (selectedTab === 4) {
      return (
        <>
          <Title>{T('trainingAndWorkshop')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>{T('trainingAndWorkshopParahraphOne')}</Text>
          <Text paragraph extendStyle={mobileCenteredText}>{T('trainingAndWorkshopParahraphTwo')}</Text>
        </>
      )
    }
    if (selectedTab === 5) {
      return (
        <>
          <Title>{T('growthHacking')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>{T('growthHackingParahraphOne')}</Text>
          <Text paragraph extendStyle={mobileCenteredText}>{T('growthHackingParahraphTwo')}</Text>
        </>
      )
    }
    if (selectedTab === 6) {
      return (
        <>
          <Title>{T('photographyAndVideoghraphy')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>{T('photographyAndVideoghraphyOne')}</Text>
          <Text paragraph extendStyle={mobileCenteredText}>{T('photographyAndVideoghraphyTwo')}</Text>
        </>
      )
    }
  }

  const renderdDeskTopServicesTabs = () => {
    return (
      <ShowOnDesktop>
        <Row>
          <ServiceBlock
            onClick={() => setSelectedTab(1)}
            selected={selectedTab === 1}
          >
            <Icon
              className="icon"
              icon="e97d"
              size={26}
              color={selectedTab !== 1 && 'primary'}
            />
            <Service>{T('marketingPlan')}</Service>
          </ServiceBlock>
          <ServiceBlock
            onClick={() => setSelectedTab(2)}
            selected={selectedTab === 2}
          >
            <Icon
              className="icon"
              icon="eae8"
              size={26}
              color={selectedTab !== 2 && 'primary'}
            />
            <Service>{T('designAndDevelopment')}</Service>
          </ServiceBlock>
          <ServiceBlock
            onClick={() => setSelectedTab(3)}
            lastEelement
            selected={selectedTab === 3}
          >
            <Icon
              className="icon"
              icon="e962"
              size={26}
              color={selectedTab !== 3 && 'primary'}
            />
            <Service>{T('buissnessConsultation')}</Service>
          </ServiceBlock>
        </Row>
        <Row>
          <ServiceBlock
            onClick={() => setSelectedTab(4)}
            lastRow
            selected={selectedTab === 4}
          >
            <Icon
              className="icon"
              icon="ecf4"
              size={26}
              color={selectedTab !== 4 && 'primary'}
            />
            <Service>{T('trainingAndWorkshop')}</Service>
          </ServiceBlock>
          <ServiceBlock
            onClick={() => setSelectedTab(5)}
            lastRow
            selected={selectedTab === 5}
          >
            <Icon
              className="icon"
              icon="e97d"
              size={26}
              color={selectedTab !== 5 && 'primary'}
            />
            <Service>{T('growthHacking')}</Service>
          </ServiceBlock>
          <ServiceBlock
            onClick={() => setSelectedTab(6)}
            lastRow
            lastEelement
            selected={selectedTab === 6}
          >
            <Icon
              className="icon"
              icon="eece"
              size={26}
              color={selectedTab !== 6 && 'primary'}
            />
            <Service>{T('photographyAndVideoghraphy')}</Service>
          </ServiceBlock>
        </Row>
      </ShowOnDesktop>
    )
  }

  const renderdMobileServicesTabs = () => {
    return (
      <HideOnDeskTop>
        <Row>
          <ServiceBlock
            onClick={() => setSelectedTab(1)}
            selected={selectedTab === 1}
          >
            <Service>{T('marketingPlan')}</Service>
            <Icon
              icon="e97d"
              size={26}
              color={selectedTab !== 1 && 'primary'}
            />
          </ServiceBlock>
          <ServiceBlock
            onClick={() => setSelectedTab(2)}
            selected={selectedTab === 2}
            lastEelement
          >
            <Icon
              icon="eae8"
              size={26}
              color={selectedTab !== 2 && 'primary'}
            />
            <Service>{T('designAndDevelopment')}</Service>
          </ServiceBlock>
        </Row>
        <Row>
          <ServiceBlock
            onClick={() => setSelectedTab(3)}
            selected={selectedTab === 3}
          >
            <Icon
              icon="e962"
              size={26}
              color={selectedTab !== 3 && 'primary'}
            />
            <Service>{T('buissnessConsultation')}</Service>
          </ServiceBlock>
          <ServiceBlock
            onClick={() => setSelectedTab(4)}
            lastEelement
            selected={selectedTab === 4}
          >
            <Icon
              icon="ecf4"
              size={26}
              color={selectedTab !== 4 && 'primary'}
            />
            <Service>{T('trainingAndWorkshop')}</Service>
          </ServiceBlock>
        </Row>
        <Row>
          <ServiceBlock
            onClick={() => setSelectedTab(5)}
            selected={selectedTab === 5}
            lastRow
          >
            <Icon
              icon="e97d"
              size={26}
              color={selectedTab !== 5 && 'primary'}
            />
            <Service>{T('growthHacking')}</Service>
          </ServiceBlock>
          <ServiceBlock
            onClick={() => setSelectedTab(6)}
            lastEelement
            lastRow
            selected={selectedTab === 6}
          >
            <Icon
              icon="eece"
              size={26}
              color={selectedTab !== 6 && 'primary'}
            />
            <Service>{T('photographyAndVideoghraphy')}</Service>
          </ServiceBlock>
        </Row>
      </HideOnDeskTop>
    )
  }

  return (
    <Section active={isActive}>
      <SectionSidebar primaryColor onClick={() => setActive(2)}>
        <SidebarName>{T('services')}</SidebarName>
      </SectionSidebar>
      {isActive && (
        <>
          <LanguageSelector />
          <ContentContainer>
            <LogoContainer>
              <Logo src={BrandLogo} alt="" />
            </LogoContainer>
            <Container>
              <Title>{T('services')}</Title>
              {renderdDeskTopServicesTabs()}
              {renderdMobileServicesTabs()}
              {renderTextBasedOnSelectedTab()}
            </Container>
          </ContentContainer>
        </>
      )}
    </Section>
  )
}
export default Services
