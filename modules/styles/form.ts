import styled from 'styled-components';
import { colors, dimensions } from '../styles';
import { Button } from 'rsuite';
const Input = styled.input`
  margin-bottom: 20px;
  width: 100%;
  border: none;
  border-bottom: 1px solid #ddd;
  padding: 4px;
`;
const ForgotPassword = styled.div`
  text-align: right;
  a {
    color: #918f8f;
  }
`;
const LoginFormWrapper = styled.div`
  width: 380px;
  height: 450px;
  background: #fff;
  padding: 2rem 2.5rem;
  margin-top: 5rem;
  border-radius: 10px;
  color: ${colors.golomtDarkBlue};
  h1 {
    color: ${colors.golomtDarkBlue};
    font-size: 18px;
    text-align: center;
  }
  h2 {
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    margin-top: 3rem;
  }
`;
const LoginPage = styled.div`
  height: 100vh;
  width: 100%;
  background: ${colors.golomtLightGrey};
  display: flex;
  justify-content: center;
  align-content: center;
`;
const Error = styled.label`
  color: ${colors.colorCoreRed};
  margin-top: ${dimensions.unitSpacing - 3}px;
  display: block;
  font-size: 12px;
`;

export { ForgotPassword, LoginPage, LoginFormWrapper, Input, Error };
