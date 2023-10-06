import { createContext, useContext } from 'react';

export const AppContext = createContext({
  appTitle: 'andy-client',
  pageTitle: 'App',
  params: {}
});

export const useAppContext = () => useContext(AppContext);
