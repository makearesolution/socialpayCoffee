export const checkCustomer = `
  query checkCustomer($token: String!) {
    checkCustomer(token: $token) {
      _id
      email
      firstName
      lastName
      erxesCustomerId
    }
  }
`;
