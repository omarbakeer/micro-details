import React, { useState } from 'react'
import {
  ClientsContainer,
  ClientLogo,
  Container,
  Row,
  ItemIndicator,
  ItemIndicatorList,
} from './WeWorkWith.style'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

import Logo_1 from 'images/1.jpg'
import Logo_2 from 'images/2.jpg'
import Logo_3 from 'images/3.jpg'
import Logo_4 from 'images/4.jpg'
import Logo_5 from 'images/5.jpg'
import Logo_16 from 'images/16.jpg'
import Logo_17 from 'images/17.jpg'
import Logo_21 from 'images/21.jpg'
import Logo_67 from 'images/67.jpg'
import Logo_68 from 'images/68.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const WeWorkWith = () => {
  const [index, setIndex] = useState(0)

  const renderSlideIndicator = () => {
    return (
      <ItemIndicatorList>
        <ItemIndicator selected={index === 0} onClick={() => setIndex(0)} />
        <ItemIndicator selected={index === 1} onClick={() => setIndex(1)} />
      </ItemIndicatorList>
    )
  }

  return (
    <Container>
      <Row>
        <AutoPlaySwipeableViews
          index={index}
          onChangeIndex={setIndex}
          enableMouseEvents
          containerStyle={{ height: 'min-content' }}
        >
          <ClientsContainer>
            <ClientLogo src={Logo_1} alt="client logo" />
            <ClientLogo src={Logo_2} alt="client logo" />
            <ClientLogo src={Logo_67} alt="client logo" />
            <ClientLogo src={Logo_68} alt="client logo" />
            <ClientLogo src={Logo_5} alt="client logo" />
          </ClientsContainer>
          <ClientsContainer>
            <ClientLogo src={Logo_3} alt="client logo" />
            <ClientLogo src={Logo_4} alt="client logo" />
            <ClientLogo src={Logo_16} alt="client logo" />
            <ClientLogo src={Logo_17} alt="client logo" />
            <ClientLogo src={Logo_21} alt="client logo" />
          </ClientsContainer>
        </AutoPlaySwipeableViews>
      </Row>
      {renderSlideIndicator()}
    </Container>
  )
}
export default WeWorkWith
