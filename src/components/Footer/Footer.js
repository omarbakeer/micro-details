import React, { useState } from 'react';
import { Footer, Filler, Division } from './Footer.style';

const FooterContainer = props => {
  return (
    <Footer>
      {/* <Division> */}
        <Filler/>
        <Filler color="black"/>
        <Filler/>
        <Filler color="black"/>
        <Filler/>
      {/* </Division> */}
      <Division />
      <Division />
      <Division />
      <Division />
    </Footer>
  );
};

export default FooterContainer;
