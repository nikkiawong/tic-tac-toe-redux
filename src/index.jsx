import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';

// const store = createStore(reducer);

const render = (Component) => {
  ReactDom.render(
    <AppContainer>
      <HashRouter>
        <Component />
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};


render(App);
// /*eslint-disable */
if (module.hot) {
  module.hot.accept('./components/App', () => {
    render(App);
  });
}
// /*eslint-enable */
