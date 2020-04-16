import React, { useState, useEffect } from 'react'
import smoothscroll from 'smoothscroll-polyfill'
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
  mobileCenteredText,
} from 'components/CommonStyles'
import { T } from 'locale'
import BrandLogo from 'images/Logo.png'
import {
  Container,
  Title,
  Row,
  ServiceBlock,
  Service,
  Sections,
  extendIcon,
  iconSize,
} from './Services.style'

const Services = ({ isActive, setActive }) => {
  const [selectedTab, setSelectedTab] = useState(1)

  useEffect(() => {
    smoothscroll.polyfill()
  }, [])

  const scrollToContent = () => {
    let element = document.querySelector('#scrollHere')
    element.scrollIntoView({
      behavior: 'smooth',
    })
  }

  const renderTextBasedOnSelectedTab = () => {
    if (selectedTab === 1) {
      return (
        <>
          <Title id="scrollHere">{T('marketingPlan')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('marketingPlanParahraphOne')}
          </Text>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('marketingPlanParahraphTwo')}
          </Text>
        </>
      )
    }
    if (selectedTab === 2) {
      return (
        <>
          <Title id="scrollHere">{T('designAndDevelopment')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('designAndDevelopmentParahraphOne')}
          </Text>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('designAndDevelopmentParahraphTwo')}
          </Text>
        </>
      )
    }
    if (selectedTab === 3) {
      return (
        <>
          <Title id="scrollHere">{T('buissnessConsultation')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('buissnessConsultationParahraphOne')}
          </Text>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('buissnessConsultationParahraphTwo')}
          </Text>
        </>
      )
    }
    if (selectedTab === 4) {
      return (
        <>
          <Title id="scrollHere">{T('trainingAndWorkshop')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('trainingAndWorkshopParahraphOne')}
          </Text>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('trainingAndWorkshopParahraphTwo')}
          </Text>
        </>
      )
    }
    if (selectedTab === 5) {
      return (
        <>
          <Title id="scrollHere">{T('growthHacking')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('growthHackingParahraphOne')}
          </Text>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('growthHackingParahraphTwo')}
          </Text>
        </>
      )
    }
    if (selectedTab === 6) {
      return (
        <>
          <Title id="scrollHere">{T('photographyAndVideoghraphy')}</Title>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('photographyAndVideoghraphyOne')}
          </Text>
          <Text paragraph extendStyle={mobileCenteredText}>
            {T('photographyAndVideoghraphyTwo')}
          </Text>
        </>
      )
    }
  }

  return (
    <Section active={isActive}>
      <SectionSidebar primaryColor onClick={() => setActive(2)}>
        <SidebarName>{T('services')}</SidebarName>
      </SectionSidebar>
      {isActive && (
        <>
          <LanguageSelector />
          <ContentContainer padding="5px 5% 5% 11%">
            <LogoContainer>
              <Logo src={BrandLogo} alt="" />
            </LogoContainer>
            <Container>
              <Title mainTitle>{T('services')}</Title>
              <Sections>
                <ServiceBlock
                  order={1}
                  selected={selectedTab === 1}
                  onClick={() => {
                    setSelectedTab(1)
                    scrollToContent()
                  }}
                >
                  <Icon
                    className="icon"
                    icon="e97d"
                    size={26}
                    color={'primary'}
                    extendStyle={iconSize}
                  />
                  <Service>{T('marketingPlan')}</Service>
                </ServiceBlock>
                <ServiceBlock
                  order={2}
                  selected={selectedTab === 2}
                  onClick={() => {
                    setSelectedTab(2)
                    scrollToContent()
                  }}
                >
                  <Row>
                    <Icon
                      className="icon"
                      icon="eae8"
                      size={26}
                      color={'primary'}
                      extendStyle={extendIcon}
                    />
                    <Service>{T('designAndDevelopment')}</Service>
                  </Row>
                </ServiceBlock>
                <ServiceBlock
                  order={6}
                  selected={selectedTab === 3}
                  lastEelement
                  onClick={() => {
                    setSelectedTab(3)
                    scrollToContent()
                  }}
                >
                  <Row>
                    <Icon
                      className="icon"
                      icon="e962"
                      size={26}
                      color={'primary'}
                      extendStyle={extendIcon}
                    />
                    <Service>{T('buissnessConsultation')}</Service>
                  </Row>
                </ServiceBlock>
                <ServiceBlock
                  order={4}
                  selected={selectedTab === 4}
                  lastRow
                  onClick={() => {
                    setSelectedTab(4)
                    scrollToContent()
                  }}
                >
                  <Row >
                    <Icon
                      className="icon"
                      icon="ecf4"
                      size={26}
                      color={'primary'}
                      extendStyle={extendIcon}
                    />
                    <Service>{T('trainingAndWorkshop')}</Service>
                  </Row>
                </ServiceBlock>
                <ServiceBlock
                  order={5}
                  selected={selectedTab === 5}
                  lastRow
                  onClick={() => {
                    setSelectedTab(5)
                    scrollToContent()
                  }}
                >
                  <Row >
                    <Icon
                      className="icon"
                      icon="e97d"
                      size={26}
                      color={'primary'}
                      extendStyle={extendIcon}
                    />
                    <Service>{T('growthHacking')}</Service>
                  </Row>
                </ServiceBlock>
                <ServiceBlock
                  order={3}
                  selected={selectedTab === 6}
                  lastRow
                  lastEelement
                  onClick={() => {
                    setSelectedTab(6)
                    scrollToContent()
                  }}
                >
                  <Row >
                    <Icon
                      className="icon"
                      icon="eece"
                      size={26}
                      color={'primary'}
                      extendStyle={extendIcon}
                    />
                    <Service>{T('photographyAndVideoghraphy')}</Service>
                  </Row>
                </ServiceBlock>
              </Sections>
              {renderTextBasedOnSelectedTab()}
            </Container>
          </ContentContainer>
        </>
      )}
    </Section>
  )
}

export default Services
