import React from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { HashRouter } from 'react-router-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import switchPlayerReducer from './reducers/switch-player-reducer';

const store = createStore(switchPlayerReducer);

let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

const render = (Component) => {
  ReactDom.render(
    <HashRouter>
      <Provider store={store}>
        <Component />
      </Provider>
    </HashRouter>,
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
