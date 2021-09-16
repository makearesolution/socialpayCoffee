import * as express from 'express';
import { IUserDocument } from './db/models/definitions';

export interface IContext {
  res: express.Response;
  requestInfo: any;
  user: IUserDocument;
}

export interface ILoginParams {
  type?: string;
  email: string;
  password: string;
  deviceToken?: string;
  description?: string;
}
