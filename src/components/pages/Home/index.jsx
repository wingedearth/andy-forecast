import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/components/App/context';
import Usa from '@/assets/images/usa.svg';
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
      <div>
        <div>
          <div className="home__welcome">
            <div className="home__contents">
              <p>{welcome}</p>
              {loaded && <p className="home__loaded">{loadedMessage}</p>}
              <div className="home__usa">
                <Usa />
              </div>
              <p className="emoji">😎</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
