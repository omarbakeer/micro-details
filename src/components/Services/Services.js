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
} from 'components/CommonStyles'
import { T } from 'locale'
import BrandLogo from 'images/Logo.png'
import { Container, Row, ServiceBlock, Service } from './Services.style'

const Services = ({ isActive, setActive }) => {
  const [selectedTab, setSelectedTab] = useState(4)

  const renderTextBasedOnSelectedTab = () => {
    if (selectedTab === 1) {
      return (
        <>
          <Text title>{T('marketingPlan')}</Text>
          <Text paragraph>{T('marketingPlanParahraphOne')}</Text>
          <Text paragraph>{T('marketingPlanParahraphTwo')}</Text>
        </>
      )
    }
    if (selectedTab === 2) {
      return (
        <>
          <Text title>{T('designAndDevelopment')}</Text>
          <Text paragraph>{T('designAndDevelopmentParahraphOne')}</Text>
          <Text paragraph>{T('designAndDevelopmentParahraphTwo')}</Text>
        </>
      )
    }
    if (selectedTab === 3) {
      return (
        <>
          <Text title>{T('buissnessConsultation')}</Text>
          <Text paragraph>{T('buissnessConsultationParahraphOne')}</Text>
          <Text paragraph>{T('buissnessConsultationParahraphTwo')}</Text>
        </>
      )
    }
    if (selectedTab === 4) {
      return (
        <>
          <Text title>{T('trainingAndWorkshop')}</Text>
          <Text paragraph>{T('trainingAndWorkshopParahraphOne')}</Text>
          <Text paragraph>{T('trainingAndWorkshopParahraphTwo')}</Text>
        </>
      )
    }
    if (selectedTab === 5) {
      return (
        <>
          <Text title>{T('growthHacking')}</Text>
          <Text paragraph>{T('growthHackingParahraphOne')}</Text>
          <Text paragraph>{T('growthHackingParahraphTwo')}</Text>
        </>
      )
    }
    if (selectedTab === 6) {
      return (
        <>
          <Text title>{T('photographyAndVideoghraphy')}</Text>
          <Text paragraph>{T('photographyAndVideoghraphyOne')}</Text>
          <Text paragraph>{T('photographyAndVideoghraphyTwo')}</Text>
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
            <Service>Marketing Plan</Service>
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
            <Service>Photography and videography</Service>
            <Service>{T('marketingPlan')}</Service>
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
              <Text title>{T('services')}</Text>
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
