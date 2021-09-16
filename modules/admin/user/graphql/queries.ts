const currentUser = `
  query currentUser {
    currentUser {
      _id
      email
      firstName
      lastName
      isOwner
      type
      companyName
      companyRegistrationNumber
      phone
      customerId
    }
  }
`;

export { currentUser };
