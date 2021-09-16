const login = `
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

const logout = `
  mutation {
    logout
  }
`;

export default {
  login,
  logout
};
