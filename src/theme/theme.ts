import { createGlobalStyle } from 'styled-components'

import { colors } from 'src/theme'
import { device } from 'src/utils'

export const AppTheme = {
  ...colors,
}

export const GlobalStyles = createGlobalStyle`
  /* @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-display: block;
      font-weight: 400;
      src: local('SF Pro Display'), url('https://fonts.cdnfonts.com/s/59278/SFPRODISPLAYREGULAR.woff') format('woff');
  }

  @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-display: block;
      font-weight: 500;
      src: local('SF Pro Display'), url('https://fonts.cdnfonts.com/s/59278/SFPRODISPLAYMEDIUM.woff') format('woff');
  }

  @font-face {
      font-family: 'Montserrat';
      font-style: normal;
      font-display: block;
      font-weight: 700;
      src: local('SF Pro Display'), url('https://fonts.cdnfonts.com/s/59278/SFPRODISPLAYBOLD.woff') format('woff');
  } */

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
    color: ${colors.black};
  }

  a {
    text-decoration: none;
  }
  .swiper-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet, .swiper-pagination-horizontal.swiper-pagination-bullets .swiper-pagination-bullet {
    display: none;
    @media ${device.tablet} {
      background: white;
      border-radius: 3px;
      width: 60px;
      height: 2px;
      display: inline-block;
    }
  }

  .css-b62m3t-container {
    @media ${device.laptopXL} {
      max-width: 891px;
      width: 100%;
    }
  }
  .css-13cymwt-control {
    width: 587px;
    height: 50px;
    @media ${device.laptopXL} {
      width: 100%;
    }
  }
  .css-t3ipsp-control {
    width: 587px;
    height: 55px;
    @media ${device.laptopXL} {
      width: 100%;
    }
    
  }
  .swiper-slide {
    text-align: center;
    font-size: 18px;
    background: #fff;

    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }

  .swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  
`
