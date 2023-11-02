import React, { useEffect, useState } from 'react';
import { useAppContext } from '@/components/App/context';
import Usa from '@/assets/images/usa.svg';
import Navigation from '@/components/navigation';
import githubLogo from '@/assets/images/github.png';
import './home.scss';

const loadedMessage = 'React application has loaded.';
const pageTitle = 'Home';

const icons = [
  {
    alt: 'github',
    className: 'github-icon',
    href: 'http://www.github.com/wingedearth/forecast',
    src: githubLogo
  }
];

const Home = () => {
  const [loaded, updateLoaded] = useState(false);
  const { appTitle } = useAppContext();
  const welcomeText = `Welcome to ${pageTitle} page on`;
  const appText = `the ${appTitle} server.`;
  const welcome = [welcomeText, appText].join(' ');

  useEffect(() => {
    updateLoaded(true);
  }, []);

  return (
    <div className="home" data-hook="home">
      <Navigation icons={icons} />
      <div className="home__welcome">
        <div className="home__contents">
          <h1>Hello!</h1>
          <p>{welcome}</p>
          {loaded && <p className="home__loaded">{loadedMessage}</p>}
          <div className="home__usa">
            <Usa />
          </div>
          <p className="emoji">😎</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
