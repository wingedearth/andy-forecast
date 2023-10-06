import React from 'react';
import { renderToString } from 'react-dom/server';
import template from '@/server/template';
import App from '@/components/App/index';
import Home from '@/components/pages/Home/index';

const appTitle = 'andy-client';
const pageTitle = 'Home';

const createPageTemplate = (data) => {
  const markup = renderToString(
    <App data={data}>
      <Home />
    </App>
  );
  return template(data, markup);
};

/**
 * @function HomeController
 * @requires Express.js
 * @param {Object} req - request
 * @param {Object} res - response
 */
const HomeController = (req, res) => {
  const params = {
    ...req.params,
    ...req.query
  };

  const data = {
    appTitle,
    pageTitle,
    params
  };

  const page = createPageTemplate(data);

  res.send(page);
};

export default HomeController;
