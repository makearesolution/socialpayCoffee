import React from 'react';
import { LoginFormWrapper, LoginPage } from '../../../styles/form';
import { Form, FormGroup, FormControl, ControlLabel, Button } from 'rsuite';

type Props = {
  login: (email: string, password: string) => void;
};

type State = {
  email?: string;
  password?: string;
};

class Login extends React.Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(values: any) {
    this.setState({ email: values.email });
    this.setState({ password: values.password });
  }

  handleSubmit(checkStatus) {
    if (checkStatus) {
      this.props.login(this.state.email, this.state.password);
    }
  }

  render() {
    return (
      <LoginPage>
        <LoginFormWrapper>
          <h1>{'Golomt Loyalty Campaign'}</h1>

          <Form onChange={this.handleChange} onSubmit={this.handleSubmit}>
            <h2>{'Нэвтрэх'}</h2>
            <FormGroup>
              <ControlLabel>{'Хэргэлэгчийн нэр'}</ControlLabel>
              <FormControl
                name="email"
                placeholder={'registered@email.com'}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <ControlLabel>{'Нууц үг'}</ControlLabel>
              <FormControl
                name="password"
                type="password"
                placeholder={'password'}
                required={true}
              />
            </FormGroup>

            <FormGroup>
              <Button
                className="form-submit"
                appearance="primary"
                type="submit"
              >
                Нэвтрэх
              </Button>
            </FormGroup>
          </Form>
        </LoginFormWrapper>
      </LoginPage>
    );
  }
}

export default Login;
