import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { getNextState } from './redux/reducer';
import './App.css';
import ChooseLanguageHandler from './components/ChooseLanguageHandler';

const store = createStore(getNextState, applyMiddleware(thunk));

function App() {
  return (
    <div>
      <Provider store={store}>
        <ChooseLanguageHandler />
      </Provider>
    </div>
  );
}

export default App;
