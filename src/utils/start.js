import React from 'react';
import { hydrateRoot } from 'react-dom/client';
import App from '@/components/App';

/**
 * @func whenDOMIsReady
 * @param {func} fn callback to run when DOM is ready
 */
const whenDOMIsReady = (fn) => {
  if (document.readyState !== 'loading') {
    fn(window.__INITIAL_STATE__);
  } else if (document.addEventListener) {
    document.addEventListener('DOMContentLoaded', () => {
      fn(window.__INITIAL_STATE__);
    });
  } else {
    document.attachEvent('onreadystatechange', () => {
      if (document.readyState !== 'loading') {
        fn(window.__INITIAL_STATE__);
      }
    });
  }
};

/**
 * @function start
 */
export default (Component) => {
  whenDOMIsReady((data) => {
    const domNode = document.getElementById('root');

    // See: https://react.dev/reference/react-dom/client/hydrateRoot
    hydrateRoot(
      domNode,
      <App data={data}>
        <Component />
      </App>
    );
  });
};
