import { ApolloClient, NormalizedCacheObject } from '@apollo/client';
import { createContext } from 'react';

export const ApiApolloClientContext = createContext<ApolloClient<
  NormalizedCacheObject
> | null>(null);
