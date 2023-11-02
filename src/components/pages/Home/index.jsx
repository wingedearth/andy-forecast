import React from 'react';
import Search from '@/components/search';
import './home.scss';

const directions = 'Enter your ZIP code to get a five day forecast!';

const Home = () => {
  return (
    <div className="home" data-hook="home">
      <div className="home__contents">
        <p className="emoji">🌧️🌞☁️⚡❄️</p>
        <h2 className="home__directions">{directions}</h2>
        <Search />
      </div>
    </div>
  );
};

export default Home;
