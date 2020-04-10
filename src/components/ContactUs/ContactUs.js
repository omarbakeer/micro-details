import React, { useState } from 'react'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
  LogoContainer,
  Logo,
  Text,
  Icon,
} from 'components/CommonStyles'
import {
  BasicRow,
  Col,
  Title,
  Row,
  Link,
  Address,
  AddressTitle,
  AddressDetails,
  Form,
  InputField,
  TextArea,
  Button,
  extendIcon,
} from './ContactUs.style'
import BrandLogo from 'images/Logo.png'

const ContactUs = ({ isActive, setActive }) => {
  const [activeAddress, setActiveAddress] = useState(0);
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = () => {
    console.warn("Submitted")
  }
  return (
    <Section active={isActive} color="#fcd72f">
      <SectionSidebar onClick={() => setActive(0)}>
        <SidebarName />
        <SidebarName>hello world</SidebarName>
      </SectionSidebar>
      {isActive && (
        <ContentContainer>
          <LogoContainer>
            <Logo src={BrandLogo} alt="" />
          </LogoContainer>
          <Text title>Contact us</Text>
          <BasicRow>
            <Col flex={3}>
              <Title>Contact info.</Title>
              <Row>
                <Icon icon="ec8a" size={24} extendStyle={extendIcon} />
                <Link href="tel:+966 12 6017687">+966 12 6017687</Link>
              </Row>
              <Row>
                <Icon icon="ef14" size={24} extendStyle={extendIcon} />
                <Link href="mailto:info@micro-details.com">
                  info@micro-details.com
                </Link>
              </Row>
            </Col>
            <Col flex={4}>
              <Title>Our offices</Title>
              <Row>
                <Address active={activeAddress === 0} onClick={() => setActiveAddress(0)}>
                  <AddressTitle>Jeddah</AddressTitle>
                  <AddressDetails>
                  Prince Sultan Street, Al Murjana Tower, 7th floor, Jeddah- KSA
                  </AddressDetails>
                </Address>
                <Address active={activeAddress === 1} onClick={() => setActiveAddress(1)}>
                  <AddressTitle>Cairo</AddressTitle>
                  <AddressDetails>
                    55 Makram Ebaid, City Center Tower 4th floor, Cairo - Egypt
                  </AddressDetails>
                </Address>
              </Row>
            </Col>
          </BasicRow>
          <BasicRow>
          <Col flex={3}>
            <Title>Say Hello!</Title>
            <Form onSubmit={handleSubmit} method="POST" autoComplete="nope">
              <InputField
                placeholder="Full Name"
                value={fullName}
                onChange={({ target : { value }}) => setFullName(value)}
              />
              <InputField
                type="email"
                placeholder="Email Address"
                value={emailAddress}
                onChange={({ target : { value }}) => setEmailAddress(value)}
              />
              <InputField
                type="tel"
                placeholder="Mobile"
                value={mobile}
                onChange={({ target : { value }}) => setMobile(value)}
              />
              <TextArea 
                value={message}
                onChange={({ target : { value }}) => setMessage(value)}
                placeholder="Message"
              />
              <Button>Send</Button>
            </Form>
          </Col>
          <Col flex={4}></Col>
          </BasicRow>
        </ContentContainer>
      )}
    </Section>
  )
}

export default ContactUs
