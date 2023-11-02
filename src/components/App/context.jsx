import { createContext, useContext } from 'react';

export const AppContext = createContext({
  appTitle: 'Forecast USA',
  pageTitle: 'App',
  params: {}
});

export const useAppContext = () => useContext(AppContext);
