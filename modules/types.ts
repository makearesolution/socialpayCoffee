export type Store = {
  currentUser: IUser;
  router: any;
};
export interface IUser {
  _id: string;
  firstName: string;
  lastName: string;
  email: string;
  isOwner: boolean;
  type: string;
  companyName: string;
  customerId: string;
}

export type UserQueryResponse = {
  currentUser: IUser;
};

export type CustomerQueryResponse = {
  checkCustomer: IUser;
};
