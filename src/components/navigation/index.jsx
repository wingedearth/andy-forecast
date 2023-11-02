import React from 'react';
import { array } from 'prop-types';
import { useAppContext } from '@/components/App/context';
import Banner from '@/components/banner';
import Icon from '@/components/icon';
import './Navigation.scss';

/**
 * @function Navigation
 * @returns {React.ReactElement}
 */
const Navigation = ({ icons }) => {
  const { appTitle } = useAppContext();

  return (
    <Banner className="banner-red">
      <p className="navigation__title">{appTitle}</p>
      <div className="navigation__icons">
        {icons.map((icon, index) => (
          <Icon {...icon} key={`${appTitle}-banner-icon-${index}`} />
        ))}
      </div>
    </Banner>
  );
};

Navigation.propTypes = {
  icons: array
};

export default Navigation;
