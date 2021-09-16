import { colors, dimensions, typography } from '.';
import styled, { keyframes } from 'styled-components';
import styledTS from 'styled-components-ts';
const ClientLayout = styled.div``;

const Footer = styled.div`
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  padding: 1rem 2rem;
  z-index: 6;
  background: #fff;
`;
const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 0.5rem;
`;

const MenuItem = styled.div`
  display: block;
  text-align: center;
  transition: 0.5s;
  border-bottom: 2px solid transparent;

  &.active {
    transition: 0.5s;
    border-color: #a34f20;
    span {
      color: #a34f20;
      transition: 0.5s;
    }
    svg path {
      fill: #a34f20;
    }
  }
  img.day-coupon {
    animation-name: pulse;
    animation-duration: 2s;
    animation-delay: 1s;
    animation-iteration-count: infinite;
  }
  .day-coupon-tooltip.rs-tooltip {
    position: absolute;
    z-index: 6;
    display: block;
    font-size: 12px;
    opacity: 0;
    line-height: 1.66666667;
    width: 250px;
    left: 50%;
    right: 0;
    bottom: 80px;
    box-sizing: border-box;
    transform: translateX(-50%);
    margin: auto;
    .rs-tooltip-arrow {
      bottom: -17px;
      transform: rotate(180deg);
      top: auto;
    }
  }
  span {
    display: block;
    color: #acb0c5;
    font-family: Helvetica;
    font-size: 12px;
    font-weight: 300;
    transition: 0.5s;
  }
`;
const ListItem = styled.div`
  margin: 1rem 0;
  padding: 0.6rem;
  box-shadow: 3px 5px 10px rgba(0, 0, 0, 0.16);
  border-radius: 10px;
  background-color: #fefefe;
  color: #000;
  .thumbnail {
    width: 100%;
    margin-right: 0.6rem;
    img {
      width: 100%;
      height: auto;
    }
  }
  .caption {
    min-height: 90px;
    h6 {
      font-size: 15px;
      font-weight: 600;
    }
    span {
      font-size: 16px;
    }
  }
`;
const SearchOrg = styled.div`
  padding: 1rem 2rem;
  position: fixed;
  width: 100%;
  background: #fff;
  /* box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1); */
  left: 0;
  top: 0;
  z-index: 5;
  .rs-picker-toggle {
    background-color: #f1f4fb !important;
  }
  .rs-picker-toggle-wrapper {
    width: 100%;
  }
  .rs-picker-input {
    border: 0;
  }
  .rs-picker-toggle-placeholder {
    color: #474747;
    font-family: Helvetica;
    font-size: 13px;
    font-weight: 300;
  }
  .rs-picker-toggle-caret {
    color: #333;
  }
`;

const OrgContainer = styled.div`
  width: 100%;
  margin-top: 3.5rem;
  padding: 1rem 1.5rem;
  margin-bottom: 6rem;
`;

const Description = styled.div`
  font-family: Helvetica;
  font-size: 14px;
  font-weight: 300;
  margin-top: 1rem;
  max-height: ${(props) => (props.expand ? '1500px' : '80px')};
  padding-bottom: ${(props) => (props.expand ? '1rem' : '0')};
  transition: 0.5s;
  overflow: hidden;
  position: relative;
  .readmore-btn {
    position: absolute;
    bottom: 0;
    right: 0;
    display: block;
    width: 100%;
    height: 60px;
    text-align: center;
    color: blue;
    font-weight: bold;
    font-size: 16px;
    padding-top: 40px;
    background-image: ${(props) => (props.expand ? 'none' : 'linear-gradient(to bottom, rgba(255, 255, 255, 0), white)')};
    cursor: pointer;
    i {
      font-size: 24px;
      color: #666;
    }
  }
`;
const OrgDetailContainer = styled.div`
  margin-bottom: 5rem;
  .cover {
    .rs-btn {
      background: #fff;
      left: 0.5rem;
      top: 0.5rem;
      padding: 5px 10px;
      color: #222;
      -webkit-transform: translateZ(0);
      position: fixed;
      box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.49);
      -webkit-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.49);
      -moz-box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.49);
    }
    img {
      width: 100%;
    }
  }
  .details {
    padding: 1rem 1.5rem;
    color: #000;
    h6 {
      color: #000000;
      font-family: Helvetica;
      font-size: 22px;
      font-weight: 700;
    }
    span {
      color: #000000;
      font-size: 14px;
    }
    address {
      font-style: normal;
      margin-top: 10px;
    }
    .links {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 2rem 0 1rem;
      .socials {
        display: flex;
        justify-content: space-between;
        a {
          i {
            font-size: 26px;
            margin: 0 1.5rem;
            &.fa-globe {
              color: #5e79e8;
            }
            &.fa-phone-alt {
              color: #2fce44;
            }
            &.fa-facebook-f {
              color: #097ceb;
            }
            &.fa-envelope {
              color: #ea4335;
            }
          }
        }
      }
      .more {
        box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
        border-radius: 5px;
        background-image: linear-gradient(180deg, #0e7abb 0%, #745ffa 100%);
        font-family: Helvetica;
        font-size: 14px;
        color: #fff;
        padding: 0.2rem 1rem;
      }
    }
  }
`;

const OrgCoupons = styled.div`
  padding: 1rem 1.5rem;
  h4 {
    color: #000;
    font-size: 20px;
    font-weight: 700;
    font-family: Helvetica;
    margin-bottom: 1.5rem;
  }
`;

const CouponItem = styled(ListItem)`
  &.used {
    box-shadow: none;
    transition: 0.4s;
  }
  .thumbnail {
    width: 100%;
  }
  .caption {
    position: relative;
    min-height: 90px;
    h6.branch-title {
      margin-bottom: 6px;
      font-size: 14px;
      font-weight: 400;
      color: #888;
    }
    h4 {
      margin-bottom: 0;
      font-size: 16px;
      font-weight: 600;
    }
    .coupon-code {
      color: #8e8e8e;
      font-size: 12px;
      font-weight: 700;
    }
    .details {
      display: flex;
      justify-content: space-between;
      padding: 0;
      width: 100%;
      bottom: 0;
      span {
        font-size: 16px;
        font-weight: 700;
      }
    }
  }
`;

const CouponContainer = styled.div`
  margin: 3rem 0 5rem;
`;

const WelcomeSlider = styled.div`
  background-color: #fff;
  .logo {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    z-index: 9;
    width: 80%;
    max-width: 300px;
    padding: 2.5rem;
  }
  .welcome-slider {
    .slick-slide {
      height: 100vh;
      width: 100%;
      background-color: #31adef;
      .welcome-item {
        width: 100%;
        display: inline-block;
        padding: 2rem;
        margin-top: 10%;
        height: 90vh;
        position: relative;
        h3 {
          color: #ffffff;
          font-size: 28px;
          font-weight: 700;
        }
        img {
          max-width: 200px;
        }
        .description {
          position: absolute;
          bottom: 0;
          right: 0;
          left: 0;
          padding: 2.5rem;
          text-align: center;
          width: 100%;
          p {
            color: #ffffff;
            font-size: 16px;
          }
          .rs-btn.rs-btn-violet {
            /* background: #fff;
            color: #531ba8;
            margin-top: 6rem;
            font-size: 18px;
            padding: 0.5rem 2rem;
            font-weight: 700;
            border-radius: 30px; */
            color: #fff;
            background: transparent;
            margin-top: 6rem;
            font-size: 16px;
            /* padding: 0.5rem 2rem; */
            font-weight: 700;
            border-radius: 30px;
            right: 0;
            text-align: right;
            width: 100%;
            i {
              margin-left: 1rem;
            }
          }
        }
      }
    }
    .slick-arrow {
      display: none !important;
    }
    .slick-dots {
      bottom: 50px;
      li {
        margin: 0;
        button {
          &:before {
            opacity: 0.75;
            color: #fff;
          }
        }
        &.slick-active {
          button {
            &:before {
              opacity: 0.75;
              color: #0b2323;
            }
          }
        }
      }
    }
  }
`;

const GiftContainer = styled.div`
  padding: 1.5rem 1.5rem 8rem 1.5rem;
  background-color: #f1f4fb;
  height: 100vh;
  .rs-picker-input {
    /* animation: ${(props) => (props.selectedBranch === 'disabled' ? 'headShake' : 'headShake')};
    animation-duration: 1s; */
    width: 100%;
    margin-bottom: 1rem;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.16);
    .rs-picker-toggle-placeholder {
      color: #474747;
    }
  }
  .pyro > .before,
  .pyro > .after {
    position: absolute;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    box-shadow: -120px -218.66667px blue, 248px -16.66667px #00ff84, 190px 16.33333px #002bff, -113px -308.66667px #ff009d, -109px -287.66667px #ffb300, -50px -313.66667px #ff006e,
      226px -31.66667px #ff4000, 180px -351.66667px #ff00d0, -12px -338.66667px #00f6ff, 220px -388.66667px #99ff00, -69px -27.66667px #ff0400, -111px -339.66667px #6200ff, 155px -237.66667px #00ddff,
      -152px -380.66667px #00ffd0, -50px -37.66667px #00ffdd, -95px -175.66667px #a6ff00, -88px 10.33333px #0d00ff, 112px -309.66667px #005eff, 69px -415.66667px #ff00a6, 168px -100.66667px #ff004c,
      -244px 24.33333px #ff6600, 97px -325.66667px #ff0066, -211px -182.66667px #00ffa2, 236px -126.66667px #b700ff, 140px -196.66667px #9000ff, 125px -175.66667px #00bbff, 118px -381.66667px #ff002f,
      144px -111.66667px #ffae00, 36px -78.66667px #f600ff, -63px -196.66667px #c800ff, -218px -227.66667px #d4ff00, -134px -377.66667px #ea00ff, -36px -412.66667px #ff00d4, 209px -106.66667px #00fff2,
      91px -278.66667px #000dff, -22px -191.66667px #9dff00, 139px -392.66667px #a6ff00, 56px -2.66667px #0099ff, -156px -276.66667px #ea00ff, -163px -233.66667px #00fffb, -238px -346.66667px #00ff73,
      62px -363.66667px #0088ff, 244px -170.66667px #0062ff, 224px -142.66667px #b300ff, 141px -208.66667px #9000ff, 211px -285.66667px #ff6600, 181px -128.66667px #1e00ff, 90px -123.66667px #c800ff,
      189px 70.33333px #00ffc8, -18px -383.66667px #00ff33, 100px -6.66667px #ff008c;
    -moz-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -webkit-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -o-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    -ms-animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
    animation: 1s bang ease-out infinite backwards, 1s gravity ease-in infinite backwards, 5s position linear infinite backwards;
  }

  .pyro > .after {
    -moz-animation-delay: 1.25s, 1.25s, 1.25s;
    -webkit-animation-delay: 1.25s, 1.25s, 1.25s;
    -o-animation-delay: 1.25s, 1.25s, 1.25s;
    -ms-animation-delay: 1.25s, 1.25s, 1.25s;
    animation-delay: 1.25s, 1.25s, 1.25s;
    -moz-animation-duration: 1.25s, 1.25s, 6.25s;
    -webkit-animation-duration: 1.25s, 1.25s, 6.25s;
    -o-animation-duration: 1.25s, 1.25s, 6.25s;
    -ms-animation-duration: 1.25s, 1.25s, 6.25s;
    animation-duration: 1.25s, 1.25s, 6.25s;
  }

  @-webkit-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white;
    }
  }
  @-moz-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white;
    }
  }
  @-o-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white;
    }
  }
  @-ms-keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white;
    }
  }
  @keyframes bang {
    from {
      box-shadow: 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white, 0 0 white,
        0 0 white;
    }
  }
  @-webkit-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-moz-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-o-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-ms-keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @keyframes gravity {
    to {
      transform: translateY(200px);
      -moz-transform: translateY(200px);
      -webkit-transform: translateY(200px);
      -o-transform: translateY(200px);
      -ms-transform: translateY(200px);
      opacity: 0;
    }
  }
  @-webkit-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }

    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }

    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }

    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }

    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-moz-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }

    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }

    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }

    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }

    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-o-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }

    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }

    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }

    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }

    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @-ms-keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }

    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }

    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }

    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }

    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
  @keyframes position {
    0%,
    19.9% {
      margin-top: 10%;
      margin-left: 40%;
    }

    20%,
    39.9% {
      margin-top: 40%;
      margin-left: 30%;
    }

    40%,
    59.9% {
      margin-top: 20%;
      margin-left: 70%;
    }

    60%,
    79.9% {
      margin-top: 30%;
      margin-left: 20%;
    }

    80%,
    99.9% {
      margin-top: 30%;
      margin-left: 80%;
    }
  }
`;

const GiftItem = styled.div`
  margin: 1rem 0;
  text-align: center;
  /* pointer-events: none; */
  animation-name: ${(props) => (props.isPicked ? 'none' : 'coffeezoom')};
  animation-duration: 2s;
  animation-delay: 1s;
  height: 14vh;
  animation-iteration-count: infinite;
  &#gift1,
  &#gift3,
  &#gift5,
  &#gift7,
  &#gift9,
  &#gift11 {
    animation-delay: 2s;
  }
  &#gift0,
  &#gift2,
  &#gift4,
  &#gift6,
  &#gift8,
  &#gift10 {
    animation-delay: 1s;
  }
  &#${(props) => props.pickedItem} {
    animation-name: heartBeat;
    animation-duration: 2s;
    animation-delay: 1s;
  }
  img {
    width: auto;
    height: 100%;
  }
  .cap {
    animation-name: ${(props) => (props.isPicked ? 'none' : 'capmove')};
    animation-duration: 2s;
    /* animation-delay: 2s; */
    animation-iteration-count: infinite;
  }
  .cup {
  }
  @keyframes coffeezoom {
    50% {
      transform: scale(1.1);
    }
  }
  @keyframes capmove {
    50% {
      transform: rotate(-12deg);
    }
  }
`;
const Logo = styled.div`
  text-align: center;
  position: relative;
  &.logo {
    @-webkit-keyframes rotating /* Safari and Chrome */ {
      from {
        -webkit-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        transform: rotateY(0deg);
      }
      to {
        -webkit-transform: rotateY(360deg);
        -o-transform: rotateY(360deg);
        transform: rotateY(360deg);
        transition-delay: 2s;
      }
    }
    @keyframes rotating {
      from {
        -ms-transform: rotateY(0deg);
        -moz-transform: rotateY(0deg);
        -webkit-transform: rotateY(0deg);
        -o-transform: rotateY(0deg);
        transform: rotateY(0deg);
      }
      to {
        -ms-transform: rotateY(360deg);
        -moz-transform: rotateY(360deg);
        -webkit-transform: rotateY(360deg);
        -o-transform: rotateY(360deg);
        transform: rotateY(360deg);
        transition-delay: 2s;
      }
    }

    position: absolute;
    left: 0;
    top: 15%;
    right: 0;
    z-index: 9;
    width: 80%;
    max-width: 300px;
    padding: 2.5rem;
    .flex {
      text-align: left;
      position: absolute;
      width: 65%;
      left: 5%;
      right: 0;
      top: 0%;
      .tugrug {
        -webkit-animation: rotating 2s linear infinite;
        -moz-animation: rotating 2s linear infinite;
        -ms-animation: rotating 2s linear infinite;
        -o-animation: rotating 2s linear infinite;
        animation: rotating 2s linear infinite;
        transform-style: preserve-3d;

        /* animation-duration: 2s;
        animation-delay: 6s;
        animation-iteration-count: infinite; */
      }
    }
  }
  .flex {
    text-align: left;
    position: absolute;
    width: 100%;
    left: -12%;
    right: 0;
    top: -32%;
    .tugrug {
      width: 15%;
    }
    .spay {
      width: 40%;
      margin-left: 0.3rem;
      margin-top: 5px;
    }
  }
  .loves {
    width: 90%;
  }
`;
const WelcomePage = styled.div`
  background-color: #31adef;
  height: 100vh;
  border: 12px #fff solid;
  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
  z-index: 99;
  left: 0;
  right: 0;
  img {
    width: 80%;
  }
  img.amc {
    position: absolute;
    right: -12px;
    bottom: -12px;
    width: auto;
    height: 100%;
  }
`;

const Empty = styled.div`
  height: 100vh;
  background: #eee;
  display: flex;
  justify-content: center;
  align-items: center;
  div {
    text-align: center;
    i {
      font-size: 60px;
      margin-bottom: 2rem;
      color: #1b61b3;
    }
  }
  h4 {
    font-size: 30px;
    text-align: center;
    color: #1b61b3;
    max-width: 260px;
  }
`;

const LimitText = styled.div`
  text-align: center;
  text-align: center;
  background: rgba(255, 255, 255, 0.6);
  height: 100vh;
  position: absolute;
  z-index: 5;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  p {
    font-size: 20px;
    padding: 1.5rem;
    background: #fff;
    margin: 2rem;
    font-weight: bold;
    border-radius: 8px;
    color: #1b61b3;
    line-height: 1.4;
  }
`;
const BlankText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  font-size: 18px;
  text-align: center;
  color: #999;
`;
export {
  LimitText,
  BlankText,
  Empty,
  WelcomePage,
  Description,
  GiftItem,
  GiftContainer,
  WelcomeSlider,
  CouponContainer,
  CouponItem,
  OrgCoupons,
  OrgDetailContainer,
  OrgContainer,
  Footer,
  ClientLayout,
  Menu,
  MenuItem,
  ListItem,
  SearchOrg,
  Logo,
};
