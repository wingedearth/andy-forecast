import React from 'react';
import { any, string } from 'prop-types';
import { getClassNames } from '../../utils/getClassNames';
import './Banner.scss';

/**
 * @function Banner
 * @param {Array} [icons]
 * @returns {React.ReactElement}
 */
const Banner = ({ children, className }) => {
  const classNames = getClassNames('banner', className);

  return (
    <div className={classNames}>
      <div className="banner__content">{children}</div>
    </div>
  );
};

Banner.propTypes = {
  children: any,
  className: string
};

export default Banner;
