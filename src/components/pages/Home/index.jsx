import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/components/App/context';
import './home.scss';

const loadedMessage = 'React application has loaded.';

const Home = () => {
  const [loaded, updateLoaded] = useState(false);
  const { appTitle, pageTitle } = useAppContext();
  const welcomeText = `Welcome to ${pageTitle} page on`;
  const appText = `the ${appTitle} server.`;
  const welcome = [welcomeText, appText].join(' ');

  useEffect(() => {
    updateLoaded(true);
  }, []);

  return (
    <div className="home" data-hook="home">
      <p>{welcome}</p>
      <p className="emoji">😎</p>
      {loaded && <p className="home__loaded">{loadedMessage}</p>}
    </div>
  );
};

export default Home;
