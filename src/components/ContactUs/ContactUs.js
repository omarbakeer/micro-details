import React, { useState } from 'react'
import GoogleMapReact from 'google-map-react'
import axios from 'axios'
import LanguageSelector from 'components/LangaugeSelector'
import { T } from 'locale'
import {
  Section,
  SectionSidebar,
  SidebarName,
  ContentContainer,
  LogoContainer,
  Logo,
  Icon,
} from 'components/CommonStyles'
import {
  BasicRow,
  Col,
  MainTitle,
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
  Marker,
  extendIcon,
  SpecialStyle,
  MessageSent
} from './ContactUs.style'
import BrandLogo from 'images/Logo.png'

const officesCoordinates = {
  eg: {
    lat: 30.0684895,
    long: 31.3453752,
  },
  sa: {
    lat: 21.5472008,
    long: 39.1465893,
  }
}

const ContactUs = ({ isActive, setActive }) => {
  const [activeAddress, setActiveAddress] = useState('sa');
  const [fullName, setFullName] = useState('');
  const [emailAddress, setEmailAddress] = useState('');
  const [mobile, setMobile] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault()
    let data = {
      name: fullName,
      email: emailAddress,
      mobile,
      message
    }
    axios.post('https://yeivffcxg3.execute-api.eu-central-1.amazonaws.com/production/', data)
      .then( res => {
        console.log("Message sent")
        setFullName('')
        setEmailAddress('')
        setMobile('')
        setMessage('')
        setIsSent(true)
      })
      .catch( () => {
        console.log('Message not sent')
      })
  }

  return (
    <Section active={isActive}>
      <SectionSidebar primaryColor onClick={() => setActive(0)}>
        <SidebarName>{T('contactUs')}</SidebarName>
      </SectionSidebar>
      {isActive && (
        <>
          <LanguageSelector />
          <ContentContainer padding="5px 5% 5% 11%">
            <LogoContainer>
              <Logo src={BrandLogo} alt="" />
            </LogoContainer>
            <MainTitle >{T('contactUs')}</MainTitle>
            <BasicRow>
              <Col flex={3}>
                <Title>{T('contactInfo')}</Title>
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
                <Title>{T('ourOffices')}</Title>
                <Row>
                  <Address active={activeAddress === 'sa'} onClick={() => setActiveAddress('sa')}>
                    <AddressTitle>{T('jeddah')}</AddressTitle>
                    <AddressDetails>
                      {T('saudiAddress')}
                    </AddressDetails>
                  </Address>
                  <Address active={activeAddress === 'eg'} onClick={() => setActiveAddress('eg')}>
                    <AddressTitle>{(T('cairo'))}</AddressTitle>
                    <AddressDetails>
                      {T('egyptAddress')}
                    </AddressDetails>
                  </Address>
                </Row>
              </Col>
            </BasicRow>
            <BasicRow reversedOnMobile>
              <Col flex={3}>
                <Title highLight>{T('say')} <SpecialStyle>{T('hello')}</SpecialStyle></Title>
                <Form onSubmit={handleSubmit} method="POST" autoComplete="nope">
                  <InputField
                    placeholder={T('fullNamePlaceholder')}
                    value={fullName}
                    onChange={({ target : { value }}) => setFullName(value)}
                  />
                  <InputField
                    type="email"
                    placeholder={T('emailPlaceholder')}
                    value={emailAddress}
                    onChange={({ target : { value }}) => setEmailAddress(value)}
                  />
                  <InputField
                    type="tel"
                    placeholder={T('mobilePlaceholder')}
                    value={mobile}
                    onChange={({ target : { value }}) => setMobile(value)}
                  />
                  <TextArea 
                    value={message}
                    onChange={({ target : { value }}) => setMessage(value)}
                    placeholder={T('messagePlaceholder')}
                  />
                  <Button>{T('send')}</Button>
                  {true && (
                    <MessageSent>{T('yourInquiryHaveBeenSent')}</MessageSent>
                  )}
                </Form>
              </Col>
              <Col flex={4} styleMapOnMobile>
                <GoogleMapReact
                  bootstrapURLKeys={{ key: 'AIzaSyDeKmRpFXMx8AMPDqUVYzToSchYbnRDXTw' }}
                  yesIWantToUseGoogleMapApiInternals
                  defaultZoom={16}
                  center={[officesCoordinates[activeAddress].lat, officesCoordinates[activeAddress].long]}
                >
                  <Marker
                    lat={officesCoordinates[activeAddress].lat}
                    lng={officesCoordinates[activeAddress].long}
                    text="My Marker"
                  />
                </GoogleMapReact>
              </Col>
            </BasicRow>
          </ContentContainer>
        </>
      )}
    </Section>
  )
}

export default ContactUs
