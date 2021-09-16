import { mutations } from '../graphql';
import Login from '../components/Login';
import { gql, useMutation } from '@apollo/client';
import { Alert } from 'rsuite';
type Props = {};

function LoginContainer(props: Props) {
  const [loginUser] = useMutation(gql(mutations.login));

  const login = (email: string, password: string) => {
    loginUser({
      variables: {
        email,
        password,
      },
    })
      .then(() => {
        window.location.href = '/';
      })
      .catch((error) => {
        Alert.error('Хэргэлэгчийн нэр эсвэл нууц үг буруу байна.');
      });
  };

  return <Login login={login} />;
}

export default LoginContainer;
