import React from 'react';
import ReactDOM from 'react-dom';
import reduxThunk from 'redux-thunk';
import reduxLogger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers/reducers';
import { Provider } from 'react-redux';
import './style/common.less';


import Header from './containers/Header';
import Footer from './components/Footer';
import Body from './components/Body';

const store = createStore(
  reducers,
  applyMiddleware(
    reduxThunk,
    reduxLogger
  )
);
console.log(store.getState())

const element = document.createElement('div');
element.id = 'root';
document.body.appendChild(element);

const Box = () => {
  return (
    <Provider store={store}>
      <div id="main">
        <Header />
        <Body />
        <Footer />
      </div>
    </Provider>
  );
}

ReactDOM.render(
  <Box />,
  document.getElementById('root')
);