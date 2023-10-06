import React from 'react';
import { useAppContext } from '@/components/App/context';

const Home = () => {
  const { appTitle, pageTitle } = useAppContext();
  const welcomeText = `Welcome to ${pageTitle} page on`;
  const appText = `the ${appTitle} server.`;
  const welcome = [welcomeText, appText].join(' ');

  return (
    <div className="home" data-hook="home">
      <p>{welcome}</p>
    </div>
  );
};

export default Home;
