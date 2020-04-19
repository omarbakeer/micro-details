import React, { useState } from 'react'
import { Icon } from 'components/CommonStyles'
import {
  ClientsContainer,
  ClientLogo,
  Button,
  Container,
  Row,
  ItemIndicator,
  ItemIndicatorList,
} from './Clients.style'
import SwipeableViews from 'react-swipeable-views'
import { autoPlay } from 'react-swipeable-views-utils'

import Logo_1 from 'images/1.jpg'
import Logo_2 from 'images/2.jpg'
import Logo_3 from 'images/3.jpg'
import Logo_4 from 'images/4.jpg'
import Logo_5 from 'images/5.jpg'
import Logo_6 from 'images/6.jpg'
import Logo_7 from 'images/7.jpg'
import Logo_8 from 'images/8.jpg'
import Logo_9 from 'images/9.jpg'
import Logo_10 from 'images/10.jpg'
import Logo_11 from 'images/11.jpg'
import Logo_12 from 'images/12.jpg'
import Logo_13 from 'images/13.jpg'
import Logo_14 from 'images/14.jpg'
import Logo_15 from 'images/15.jpg'
import Logo_16 from 'images/16.jpg'
import Logo_17 from 'images/17.jpg'
import Logo_18 from 'images/18.jpg'
import Logo_19 from 'images/19.jpg'
import Logo_20 from 'images/20.jpg'
import Logo_21 from 'images/21.jpg'
import Logo_22 from 'images/22.jpg'
import Logo_23 from 'images/23.jpg'
import Logo_24 from 'images/24.jpg'
import Logo_25 from 'images/25.jpg'
import Logo_26 from 'images/26.jpg'
import Logo_27 from 'images/27.jpg'
import Logo_28 from 'images/28.jpg'
import Logo_29 from 'images/29.jpg'
import Logo_30 from 'images/30.jpg'
import Logo_31 from 'images/31.jpg'
import Logo_32 from 'images/32.jpg'
import Logo_33 from 'images/33.jpg'
import Logo_34 from 'images/34.jpg'
import Logo_35 from 'images/35.jpg'
import Logo_36 from 'images/36.jpg'
import Logo_37 from 'images/37.jpg'
import Logo_38 from 'images/38.jpg'
import Logo_39 from 'images/39.jpg'
import Logo_40 from 'images/40.jpg'
import Logo_41 from 'images/41.jpg'
import Logo_42 from 'images/42.jpg'
import Logo_43 from 'images/43.jpg'
import Logo_44 from 'images/44.jpg'
import Logo_45 from 'images/45.jpg'
import Logo_46 from 'images/46.jpg'
import Logo_47 from 'images/47.jpg'
import Logo_48 from 'images/48.jpg'
import Logo_49 from 'images/49.jpg'
import Logo_50 from 'images/50.jpg'
import Logo_51 from 'images/51.jpg'
import Logo_52 from 'images/52.jpg'
import Logo_53 from 'images/53.jpg'
import Logo_54 from 'images/54.jpg'
import Logo_55 from 'images/55.jpg'
import Logo_56 from 'images/56.jpg'
import Logo_57 from 'images/57.jpg'
import Logo_58 from 'images/58.jpg'
import Logo_59 from 'images/59.jpg'
import Logo_60 from 'images/60.jpg'
import Logo_61 from 'images/61.jpg'
import Logo_62 from 'images/62.jpg'
import Logo_63 from 'images/63.jpg'
import Logo_64 from 'images/64.jpg'
import Logo_65 from 'images/65.jpg'
import Logo_66 from 'images/66.jpg'
import Logo_67 from 'images/67.jpg'
import Logo_68 from 'images/68.jpg'
import Logo_69 from 'images/69.jpg'
import Logo_70 from 'images/70.jpg'
import Logo_71 from 'images/71.jpg'
import Logo_72 from 'images/72.jpg'
import Logo_73 from 'images/73.jpg'
import Logo_74 from 'images/74.jpg'
import Logo_75 from 'images/75.jpg'
import Logo_76 from 'images/76.jpg'
import Logo_77 from 'images/77.jpg'
import Logo_78 from 'images/78.jpg'
import Logo_79 from 'images/79.jpg'
import Logo_80 from 'images/80.jpg'
import Logo_81 from 'images/81.jpg'
import Logo_82 from 'images/82.jpg'
import Logo_83 from 'images/83.jpg'
import Logo_84 from 'images/84.jpg'
import Logo_85 from 'images/85.jpg'
import Logo_86 from 'images/86.jpg'
import Logo_87 from 'images/87.jpg'
import Logo_88 from 'images/88.jpg'
import Logo_89 from 'images/89.jpg'
import Logo_90 from 'images/90.jpg'
import Logo_91 from 'images/91.jpg'
import Logo_92 from 'images/92.jpg'
import Logo_93 from 'images/93.jpg'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews)

const Clients = () => {
  const [index, setIndex] = useState(0)
  const lastIndex = 4

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
  const renderSlideIndicator = () => {
    return (
      <ItemIndicatorList>
        <ItemIndicator selected={index === 0} onClick={() => setIndex(0)} />
        <ItemIndicator selected={index === 1} onClick={() => setIndex(1)} />
        <ItemIndicator selected={index === 2} onClick={() => setIndex(2)} />
        <ItemIndicator selected={index === 3} onClick={() => setIndex(3)} />
        <ItemIndicator selected={index === 4} onClick={() => setIndex(4)} />
      </ItemIndicatorList>
    )
  }

  return (
    <Container>
      <Row>
        <Button onClick={() => handleButtonClick('prevouis')}>
          <Icon icon="ea60" size={40} color={'primary'} />
        </Button>
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
            <ClientLogo src={Logo_6} alt="client logo" />
            <ClientLogo src={Logo_7} alt="client logo" />
            <ClientLogo src={Logo_8} alt="client logo" />
            <ClientLogo src={Logo_9} alt="client logo" />
            <ClientLogo src={Logo_10} alt="client logo" />
            <ClientLogo src={Logo_11} alt="client logo" />
            <ClientLogo src={Logo_12} alt="client logo" />
            <ClientLogo src={Logo_13} alt="client logo" />
            <ClientLogo src={Logo_14} alt="client logo" />
            <ClientLogo src={Logo_32} alt="client logo" />
            <ClientLogo src={Logo_31} alt="client logo" />
            <ClientLogo src={Logo_33} alt="client logo" />
            <ClientLogo src={Logo_34} alt="client logo" />
            <ClientLogo src={Logo_15} alt="client logo" />
            <ClientLogo src={Logo_22} alt="client logo" />
            <ClientLogo src={Logo_23} alt="client logo" />
            <ClientLogo src={Logo_35} alt="client logo" />
            <ClientLogo src={Logo_36} alt="client logo" />
            <ClientLogo src={Logo_37} alt="client logo" />
          </ClientsContainer>
          <ClientsContainer>
            <ClientLogo src={Logo_3} alt="client logo" />
            <ClientLogo src={Logo_4} alt="client logo" />
            <ClientLogo src={Logo_16} alt="client logo" />
            <ClientLogo src={Logo_17} alt="client logo" />
            <ClientLogo src={Logo_21} alt="client logo" />

            <ClientLogo src={Logo_18} alt="client logo" />
            <ClientLogo src={Logo_24} alt="client logo" />
            <ClientLogo src={Logo_25} alt="client logo" />
            <ClientLogo src={Logo_26} alt="client logo" />
            <ClientLogo src={Logo_27} alt="client logo" />
            <ClientLogo src={Logo_28} alt="client logo" />
            <ClientLogo src={Logo_29} alt="client logo" />
            <ClientLogo src={Logo_30} alt="client logo" />
            <ClientLogo src={Logo_43} alt="client logo" />
            <ClientLogo src={Logo_47} alt="client logo" />
            <ClientLogo src={Logo_49} alt="client logo" />
            <ClientLogo src={Logo_50} alt="client logo" />
            <ClientLogo src={Logo_51} alt="client logo" />
            <ClientLogo src={Logo_44} alt="client logo" />
            <ClientLogo src={Logo_52} alt="client logo" />
            <ClientLogo src={Logo_53} alt="client logo" />
            <ClientLogo src={Logo_54} alt="client logo" />
            <ClientLogo src={Logo_55} alt="client logo" />
            <ClientLogo src={Logo_56} alt="client logo" />
          </ClientsContainer>
          <ClientsContainer>
            <ClientLogo src={Logo_59} alt="client logo" />
            <ClientLogo src={Logo_60} alt="client logo" />
            <ClientLogo src={Logo_61} alt="client logo" />
            <ClientLogo src={Logo_62} alt="client logo" />
            <ClientLogo src={Logo_63} alt="client logo" />
            <ClientLogo src={Logo_64} alt="client logo" />
            <ClientLogo src={Logo_65} alt="client logo" />
            <ClientLogo src={Logo_66} alt="client logo" />

            <ClientLogo src={Logo_69} alt="client logo" />
            <ClientLogo src={Logo_70} alt="client logo" />
            <ClientLogo src={Logo_71} alt="client logo" />
            <ClientLogo src={Logo_72} alt="client logo" />
            <ClientLogo src={Logo_73} alt="client logo" />
            <ClientLogo src={Logo_74} alt="client logo" />
            <ClientLogo src={Logo_75} alt="client logo" />
            <ClientLogo src={Logo_76} alt="client logo" />
            <ClientLogo src={Logo_77} alt="client logo" />
            <ClientLogo src={Logo_78} alt="client logo" />
          </ClientsContainer>
          <ClientsContainer>
            <ClientLogo src={Logo_84} alt="client logo" />
            <ClientLogo src={Logo_87} alt="client logo" />
            <ClientLogo src={Logo_88} alt="client logo" />
            <ClientLogo src={Logo_89} alt="client logo" />
            <ClientLogo src={Logo_90} alt="client logo" />
            <ClientLogo src={Logo_92} alt="client logo" />
            <ClientLogo src={Logo_93} alt="client logo" />
            <ClientLogo src={Logo_91} alt="client logo" />
            <ClientLogo src={Logo_42} alt="client logo" />
            <ClientLogo src={Logo_20} alt="client logo" />
            <ClientLogo src={Logo_38} alt="client logo" />
            <ClientLogo src={Logo_39} alt="client logo" />
            <ClientLogo src={Logo_79} alt="client logo" />
            <ClientLogo src={Logo_80} alt="client logo" />
            <ClientLogo src={Logo_81} alt="client logo" />
            <ClientLogo src={Logo_82} alt="client logo" />
            <ClientLogo src={Logo_83} alt="client logo" />
            <ClientLogo src={Logo_85} alt="client logo" />
          </ClientsContainer>
          <ClientsContainer>
            <ClientLogo src={Logo_41} alt="client logo" />
            <ClientLogo src={Logo_57} alt="client logo" />
            <ClientLogo src={Logo_58} alt="client logo" />
            <ClientLogo src={Logo_45} alt="client logo" />
            <ClientLogo src={Logo_46} alt="client logo" />
            <ClientLogo src={Logo_86} alt="client logo" />
            <ClientLogo src={Logo_19} alt="client logo" />
            <ClientLogo src={Logo_48} alt="client logo" />
            <ClientLogo src={Logo_40} alt="client logo" />
          </ClientsContainer>
        </AutoPlaySwipeableViews>
        <Button onClick={() => handleButtonClick('next')}>
          <Icon icon="ea61" size={40} color={'primary'} />
        </Button>
      </Row>
      {renderSlideIndicator()}
    </Container>
  )
}
export default Clients
