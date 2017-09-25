import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import App from 'App';
import '@blueprintjs/core/dist/blueprint.css';
import 'flexboxgrid/dist/flexboxgrid.min.css';

const rootElement = document.getElementById('root');

render(
  <AppContainer>
    <App />
  </AppContainer>
  , rootElement
);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(
      <AppContainer>
        <NextApp/>
      </AppContainer>
      , rootElement
    );
  });
}
