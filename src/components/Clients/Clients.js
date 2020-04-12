import React, { useState } from 'react'
import { Icon } from 'components/CommonStyles'
import {
  ClientsContainer,
  ClientLogo,
  Button,
  Container,
} from './Clients.style'
import SwipeableViews from 'react-swipeable-views'
import Logo_1 from 'images/(1).jpg'
import Logo_2 from 'images/(2).jpg'
import Logo_3 from 'images/(3).jpg'
import Logo_4 from 'images/(4).jpg'
import Logo_5 from 'images/(5).jpg'
import Logo_6 from 'images/(6).jpg'
import Logo_7 from 'images/(7).jpg'
import Logo_8 from 'images/(8).jpg'
import Logo_9 from 'images/(9).jpg'
import Logo_10 from 'images/(10).jpg'
import Logo_11 from 'images/(11).jpg'
import Logo_12 from 'images/(12).jpg'
import Logo_13 from 'images/(13).jpg'
import Logo_14 from 'images/(14).jpg'
import Logo_15 from 'images/(15).jpg'
import Logo_16 from 'images/(16).jpg'
import Logo_17 from 'images/(17).jpg'
import Logo_18 from 'images/(18).jpg'
import Logo_19 from 'images/(19).jpg'
import Logo_20 from 'images/(20).jpg'
import Logo_21 from 'images/(21).jpg'
import Logo_22 from 'images/(22).jpg'
import Logo_23 from 'images/(23).jpg'
import Logo_24 from 'images/(24).jpg'
import Logo_25 from 'images/(25).jpg'
import Logo_26 from 'images/(26).jpg'
import Logo_27 from 'images/(27).jpg'
import Logo_28 from 'images/(28).jpg'
import Logo_29 from 'images/(29).webp'
import Logo_30 from 'images/(30).png'
import Logo_31 from 'images/(31).jpg'
import Logo_32 from 'images/(32).jpg'


const Clients = () => {
  const [index, setIndex] = useState(0)
  const lastIndex = 1

  const handleButtonClick = (type) => {
    if (type === 'next') {
      if (index === lastIndex) {
        setIndex(0)
      } else {
        setIndex(index + 1)
      }
    }
    if (type === 'prevouis') {
      if (index === 0) {
        setIndex(lastIndex)
      } else {
        setIndex(index - 1)
      }
    }
  }

  return (
    <Container>
      <Button onClick={() => handleButtonClick('prevouis')}>
        <Icon icon="ea60" size={40} color={'primary'} />
      </Button>
      <SwipeableViews index={index} interval={1000} autoplay enableMouseEvents>
        <ClientsContainer>
          <ClientLogo src={Logo_1} alt="client" />
          <ClientLogo src={Logo_2} alt="client" />
          <ClientLogo src={Logo_3} alt="client" />
          <ClientLogo src={Logo_4} alt="client" />
          <ClientLogo src={Logo_5} alt="client" />
          <ClientLogo src={Logo_6} alt="client" />
          <ClientLogo src={Logo_7} alt="client" />
          <ClientLogo src={Logo_8} alt="client" />
          <ClientLogo src={Logo_9} alt="client" />
          <ClientLogo src={Logo_10} alt="client" />
          <ClientLogo src={Logo_11} alt="client" />
          <ClientLogo src={Logo_12} alt="client" />
          <ClientLogo src={Logo_13} alt="client" />
          <ClientLogo src={Logo_14} alt="client" />
          <ClientLogo src={Logo_15} alt="client" />
          <ClientLogo src={Logo_32} alt="client" />

        </ClientsContainer>
        <ClientsContainer>
          <ClientLogo src={Logo_16} alt="client" />
          <ClientLogo src={Logo_17} alt="client" />
          <ClientLogo src={Logo_18} alt="client" />
          <ClientLogo src={Logo_19} alt="client" />
          <ClientLogo src={Logo_20} alt="client" />
          <ClientLogo src={Logo_21} alt="client" />
          <ClientLogo src={Logo_22} alt="client" />
          <ClientLogo src={Logo_23} alt="client" />
          <ClientLogo src={Logo_24} alt="client" />
          <ClientLogo src={Logo_25} alt="client" />
          <ClientLogo src={Logo_26} alt="client" />
          <ClientLogo src={Logo_27} alt="client" />
          <ClientLogo src={Logo_28} alt="client" />
          <ClientLogo src={Logo_29} alt="client" />
          <ClientLogo src={Logo_30} alt="client" />
          <ClientLogo src={Logo_31} alt="client" />





             
   
          
        </ClientsContainer>
      </SwipeableViews>
      <Button onClick={() => handleButtonClick('next')}>
        <Icon icon="ea61" size={40} color={'primary'} />
      </Button>
    </Container>
  )
}
export default Clients
