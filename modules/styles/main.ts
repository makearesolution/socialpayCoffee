import { colors, dimensions, typography } from '../styles';
import { rgba } from '../styles/ecolor';
import styled, { css } from 'styled-components';
import styledTS from 'styled-components-ts';

const Header = styledTS<{ color?: string; backgroundImage?: string }>(styled.div)`
  color: ${colors.colorWhite};
  font-size: ${typography.fontSizeBody}px;

  background-color: ${colors.dashboardBlue};

  h3 {
    font-size: 1.75rem;
    font-weight: ${typography.fontWeightLight};
    margin: 20px 0;
  }
`;

const HeaderTop = styled.div`
  display: block;
`;

const HeaderLogo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 100%;
    max-width: 250px;
    cursor: pointer;
  }
`;

const HeaderTitle = styled.span`
  margin-left: 10px;
  padding-left: 10px;
  border-left: 1px solid ${colors.colorWhite};
  font-size: 16px;
  letter-spacing: 1px;
  text-transform: capitalize;
`;

const HeaderRight = styled.div`
  display: flex;
  /* flex-direction: column; */
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 100%;
`;

const HeaderLeft = styled.div`
  padding: 1rem;
  background: #fff;
`;

const SupportMenus = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: flex-end;

  a {
    margin-left: 10px;
    letter-spacing: 0.5px;
    opacity: 0.8;
  }

  > button {
    color: ${colors.colorWhite} !important;
  }
`;
const Search = styled.div``;
const WebLink = styled.a`
  -ms-flex: 0 0 auto;
  flex: 0 0 auto;
  width: auto;
  max-width: 100%;
`;

const HeaderLinks = styled.div`
  text-align: right;
`;

const LinkItem = styledTS<{ active?: boolean }>(styled.span)`
  display: inline-block;
  padding-right: ${dimensions.unitSpacing}px;
  margin-right: ${dimensions.unitSpacing}px;
  font-size: 14px;
  opacity: 0.9;
  border-right: 1px solid #fff;
  text-transform: capitalize;
  position: relative;
  transition: all ease 0.3s;

  &:last-child {
    margin-right: 0;
    border-right: 0;
  }

  border-bottom: 2px solid transparent;

  ${(props) =>
    props.active &&
    `
    font-weight: 600;
    opacity: 1;

    &:after {
      content: '.';
      position absolute;
      bottom: -15px;
      left: 45%;
      font-size: 25px;
    }
  `}

  &:hover {
    opacity: 1;
  }
`;

const MainContent = styledTS<{ baseColor?: string }>(styled.div)`
  min-height: 30vh;
  padding: 32px;
  @media screen and (max-width: 992px) {
    padding: 16px;
  }
  ${(props) =>
    props.baseColor &&
    css`
      .base-color {
        color: ${props.baseColor} !important;
      }
    `};
`;

const Container = styledTS<{ transparent?: boolean; shrink?: boolean }>(styled.div)`
  // max-width: 1200px;
      width:100%;
  margin: 0 auto;

  ${(props) =>
    !props.shrink &&
    css`
      height: 100%;
      height: calc(100% - 20px);
    `};
  
  @media (max-width: 1200px) {
    width: 80%;
  }

  @media (max-width: 800px) {
    width: 90%;
  }
`;

const BoxRoot = styledTS<{ selected?: boolean }>(styled.div)`
  text-align: center;
  float: left;
  background: ${colors.colorLightBlue};
  box-shadow: ${(props) => (props.selected ? `0 10px 20px ${rgba(colors.colorCoreDarkGray, 0.12)}` : `0 6px 10px 1px ${rgba(colors.colorCoreGray, 0.08)}`)} ;
  margin-right: ${dimensions.coreSpacing}px;
  border-radius: ${dimensions.unitSpacing / 2 - 1}px;
  transition: all 0.25s ease;
  border: 1px solid
    ${(props) => (props.selected ? colors.colorSecondary : colors.borderPrimary)};

  > a {
    display: block;
    padding: ${dimensions.coreSpacing}px;
    text-decoration: none;

    &:focus {
      text-decoration: none;
    }
  }

  img {
    width: 83px;
    transition: all 0.5s ease;
  }

  span {
    color: ${colors.colorCoreGray};
    display: block;
    margin-top: ${dimensions.unitSpacing}px;
  }

  &:hover {
    cursor: pointer;
    box-shadow: 0 10px 20px ${rgba(colors.colorCoreDarkGray, 0.12)};

    span {
      font-weight: 500;
    }

    img {
      transform: scale(1.1);
    }
  }

  @media (max-width: 780px) {
    width: 100%;
  }
`;

const ModalWrapper = styledTS<{ show?: boolean }>(styled.div)`
  .client-modal {
    position: fixed;
    overflow: auto;
    z-index: 9;
    background: rgba(48, 67, 92, .6);
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;

    > div {
      position: relative;
      z-index: 99;
      width: 60%;
      max-width: ${(props) => (props.isFull ? '900px' : '600px')};
      border-radius: 2px;
      margin: 100px auto;
    }
  }
`;

const ModalClose = styled.div`
  position: absolute;
  right: -40px;
  top: 0;
  width: 30px;
  height: 30px;
  background: rgba(0, 0, 0, 0.3);
  line-height: 30px;
  border-radius: 15px;
  text-align: center;
  color: #fff;
  cursor: pointer;
`;

const HeadProfile = styled.div`
  display: flex;
  align-items: center;
  img {
    width: auto;
    height: 50px;
    border-radius: 100%;
    margin-right: 1rem;
  }
  div {
    h4 {
      font-size: 16px;
      font-weight: 700;
      margin-bottom: 5px;
    }
    span {
      float: right;
      &:hover {
        cursor: pointer;
      }
    }
  }
`;

const SideBar = styled.div`
  background: ${colors.dashboardBlue};
  width: 100%;
  height: 100vh;
  padding-top: 3rem;
`;

const SideLink = styled.ul`
  list-style: none;
  margin: 1rem 0;
  text-align: right;
  padding-left: 0;
  li.active a {
    background: #1d778f;
  }
  a {
    padding: 0.5rem 2.5rem;
    width: 80%;
    border-radius: 10px 0 0 10px;
    display: inline-block;
    text-align: center;
    color: #fff;
    font-size: 15px;
    font-weight: 700;
    margin-bottom: 1rem;
  }
`;

const DashboardContainer = styled.div`
  display: block;
`;

const MainDashboard = styled.div`
  background: #f0f2f0;
`;

const ProductItem = styled.div`
  background: #fff;
  padding-bottom: 0.2rem;
  border-radius: 10px;
  margin: 0 0rem 2rem;

  .thumbnail {
    height: 280px;
    background-size: cover !important;
    background-repeat: no-repeat !important;
    background-position: center !important;
    border-radius: 10px;
  }
  .caption {
    margin: 1rem;
  }
  .coupon-btn {
    margin-top: 1rem;
    text-align: center;
  }
  .details {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: 700;
      font-size: 16px;
      color: #777;
    }
  }
`;

const BranchItem = styled(ProductItem)`
  .thumbnail {
    position: relative;
    .rs-btn {
      position: absolute;
      right: 0.5rem;
      top: 0.5rem;
    }
  }
`;

const AddBranch = styled(ProductItem)`
  .thumbnail {
    position: relative;
    background: #e9e9e9;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    .fa-plus {
      font-size: 28px;
      background: #d1d1d1;
      color: #fff;
      padding: 1.5rem;
      border-radius: 10px;
    }
  }
`;

const CouponDetail = styled.div`
  h5 {
    text-align: center;
  }
  img {
    max-width: 100%;
    border-radius: 10px;
  }
  h6 {
  }
  span {
    display: block;
    margin: 0.5rem 0;
  }
`;

const UsedCouponList = styled.div`
  .coupon-scroll {
    max-height: 500px;
    min-height: 200px;
    overflow: scroll;
  }
  .coupon-count {
    display: flex;
    justify-content: space-between;
    padding: 0 0.5rem 1rem;
    span {
      font-size: 16px;
    }
  }
  .coupon-item {
    border-bottom: 1px solid #eee;
    margin: 0.5rem 0;
    padding: 0.5rem;
    h6 {
      font-size: 14px;
    }
    .flex {
      display: flex;
      justify-content: space-between;
    }
  }
`;
export {
  BranchItem,
  AddBranch,
  HeadProfile,
  CouponDetail,
  ProductItem,
  MainDashboard,
  Header,
  SideBar,
  HeaderTop,
  HeaderLogo,
  HeaderTitle,
  HeaderRight,
  HeaderLeft,
  SupportMenus,
  WebLink,
  HeaderLinks,
  MainContent,
  Container,
  BoxRoot,
  Search,
  LinkItem,
  ModalWrapper,
  ModalClose,
  SideLink,
  DashboardContainer,
  UsedCouponList,
};
