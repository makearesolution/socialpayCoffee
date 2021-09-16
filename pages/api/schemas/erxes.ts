export const types = `
  input Variables {
    _id: String
  }
`;

export const queries = `
  erxesQuery(name: String!, variables: Variables): JSON
`;
