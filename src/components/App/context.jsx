import { createContext, useContext } from 'react';

export const AppContext = createContext({
  appTitle: 'andy-forecast',
  pageTitle: 'App',
  params: {}
});

export const useAppContext = () => useContext(AppContext);
