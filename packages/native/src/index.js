import React from 'react'
import App from './App';

import { Provider } from 'react-redux'
import { store } from '@space/core/redux/stores';

export default () => (
  <Provider store={store}>
    <App />
  </Provider>
)
