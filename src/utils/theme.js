import { css } from 'styled-components';

const sizes = {
  maxTablet: 1023,
  maxPhone: 767
};

// create a media template
const media = {};
media.phone = (...args) => css`
  @media only screen and (max-width: ${sizes.maxPhone}px) {
    ${css(...args)}
  }
`;
media.tablet = (...args) => css`
  @media only screen and (min-width: ${sizes.maxPhone +
      1}px) and (max-width: ${sizes.maxTablet}px) {
    ${css(...args)}
  }
`;
media.desktop = (...args) => css`
  @media only screen and (min-width: ${sizes.maxTablet + 1}px) {
    ${css(...args)}
  }
`;

export default {
  sizes,
  media,
  colors: {
    primary: '#fcd72f', //  yellow
    black: '#000',
    white: '#fff',
    blue: '#0056b3',
    lightGray: '#f8f8f8',
    darkgrey:'#646464',
  },
  direction: 'ltr'
};
