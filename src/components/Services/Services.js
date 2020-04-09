import React, { useState } from 'react'
import { Logo, LogoContainer, Text, Icon } from 'components/CommonStyles'
import BrandLogo from 'images/Logo.png'
import {
  Container,
  Row,
  ServiceBlock,
  Service,
  ShowOnDesktop,
  HideOnDeskTop,
} from './Services.style'

const Services = () => {
  const [selectedTab, setSelectedTab] = useState(4)

  const renderTextBasedOnSelectedTab = () => {
    if (selectedTab === 1) {
      return (
        <>
          <Text title>Marketing Plan</Text>
          <Text paragraph>
            We started our journey when we experienced the reach and impact of
            digital marketing on brands. The marketeers focus on ‘details’, but
            our team is passionate about ‘micro details’. We started this
            company so we can continue to analyze and use these details to
            create unique and successful marketing campaigns for our clients.
          </Text>
          <Text paragraph>
            Courses and training sessions designed to give you an introduction
            into the world of high-level creative thinking and how it can be
            applied to marketing and technology. Social Media Marketing, Program
            and Design Training, Marketing Plan Training are just some of the
            topics covered. Whether you are looking to network, renew ideas or
            learn from scratch, Micro Details wants you to discover the
            opportunities.
          </Text>
        </>
      )
    }
    if (selectedTab === 2) {
      return (
        <>
          <Text title>Design And Development</Text>
          <Text paragraph>
            We started our journey when we experienced the reach and impact of
            digital marketing on brands. The marketeers focus on ‘details’, but
            our team is passionate about ‘micro details’. We started this
            company so we can continue to analyze and use these details to
            create unique and successful marketing campaigns for our clients.
          </Text>
          <Text paragraph>
            Courses and training sessions designed to give you an introduction
            into the world of high-level creative thinking and how it can be
            applied to marketing and technology. Social Media Marketing, Program
            and Design Training, Marketing Plan Training are just some of the
            topics covered. Whether you are looking to network, renew ideas or
            learn from scratch, Micro Details wants you to discover the
            opportunities.
          </Text>
        </>
      )
    }
    if (selectedTab === 3) {
      return (
        <>
          <Text title>Business Consultation</Text>
          <Text paragraph>
            We started our journey when we experienced the reach and impact of
            digital marketing on brands. The marketeers focus on ‘details’, but
            our team is passionate about ‘micro details’. We started this
            company so we can continue to analyze and use these details to
            create unique and successful marketing campaigns for our clients.
          </Text>
          <Text paragraph>
            Courses and training sessions designed to give you an introduction
            into the world of high-level creative thinking and how it can be
            applied to marketing and technology. Social Media Marketing, Program
            and Design Training, Marketing Plan Training are just some of the
            topics covered. Whether you are looking to network, renew ideas or
            learn from scratch, Micro Details wants you to discover the
            opportunities.
          </Text>
        </>
      )
    }
    if (selectedTab === 4) {
      return (
        <>
          <Text title>Training and Workshop</Text>
          <Text paragraph>
            We started our journey when we experienced the reach and impact of
            digital marketing on brands. The marketeers focus on ‘details’, but
            our team is passionate about ‘micro details’. We started this
            company so we can continue to analyze and use these details to
            create unique and successful marketing campaigns for our clients.
          </Text>
          <Text paragraph>
            Courses and training sessions designed to give you an introduction
            into the world of high-level creative thinking and how it can be
            applied to marketing and technology. Social Media Marketing, Program
            and Design Training, Marketing Plan Training are just some of the
            topics covered. Whether you are looking to network, renew ideas or
            learn from scratch, Micro Details wants you to discover the
            opportunities.
          </Text>
        </>
      )
    }
    if (selectedTab === 5) {
      return (
        <>
          <Text title>Original Digital Grwoth</Text>
          <Text paragraph>
            We started our journey when we experienced the reach and impact of
            digital marketing on brands. The marketeers focus on ‘details’, but
            our team is passionate about ‘micro details’. We started this
            company so we can continue to analyze and use these details to
            create unique and successful marketing campaigns for our clients.
          </Text>
          <Text paragraph>
            Courses and training sessions designed to give you an introduction
            into the world of high-level creative thinking and how it can be
            applied to marketing and technology. Social Media Marketing, Program
            and Design Training, Marketing Plan Training are just some of the
            topics covered. Whether you are looking to network, renew ideas or
            learn from scratch, Micro Details wants you to discover the
            opportunities.
          </Text>
        </>
      )
    }
    if (selectedTab === 6) {
      return (
        <>
          <Text title>Training and Workshop</Text>
          <Text paragraph>
            We started our journey when we experienced the reach and impact of
            digital marketing on brands. The marketeers focus on ‘details’, but
            our team is passionate about ‘micro details’. We started this
            company so we can continue to analyze and use these details to
            create unique and successful marketing campaigns for our clients.
          </Text>
          <Text paragraph>
            Courses and training sessions designed to give you an introduction
            into the world of high-level creative thinking and how it can be
            applied to marketing and technology. Social Media Marketing, Program
            and Design Training, Marketing Plan Training are just some of the
            topics covered. Whether you are looking to network, renew ideas or
            learn from scratch, Micro Details wants you to discover the
            opportunities.
          </Text>
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
            <Service>Marketing Plan</Service>
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
            <Service>Design and development</Service>
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
            <Service>Business consultation</Service>
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
            <Service>Training and Workshop</Service>
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
            <Service>Original digital growth</Service>
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
            <Service>Photography and videography</Service>
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
            <Service>Design and development</Service>
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
            <Service>Business consultation</Service>
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
            <Service>Training and Workshop</Service>
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
            <Service>Original digital growth</Service>
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
          </ServiceBlock>
        </Row>
      </HideOnDeskTop>
    )
  }

  return (
    <>
      <LogoContainer>
        <Logo src={BrandLogo} alt="" />
      </LogoContainer>
      <Container>
        <Text title>Services</Text>
        {renderdDeskTopServicesTabs()}
        {renderdMobileServicesTabs()}
        {renderTextBasedOnSelectedTab()}
      </Container>
    </>
  )
}
export default Services
