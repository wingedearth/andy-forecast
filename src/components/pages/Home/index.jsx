import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/components/App/context';

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
      {loaded && <p>{loadedMessage}</p>}
    </div>
  );
};

export default Home;
