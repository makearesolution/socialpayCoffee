export const clientPortalCreateCustomer = `
  mutation createCustomer(
    $configId: String!,
    $firstName: String!,
    $lastName: String,
    $email: String,
    $code: String
  ) {
    clientPortalCreateCustomer(
      configId: $configId,
      firstName: $firstName,
      lastName: $lastName,
      email: $email,
      code: $code
    ) {
      _id
    }
  }
`;

export const clientPortalCreateCompany = `
  mutation createCompany(
    $configId: String!,
    $companyName: String!
    $email: String!
  ) {
    clientPortalCreateCompany(
      configId: $configId,
      companyName: $companyName
      email: $email
    ) {
      _id
    }
  }
`;
