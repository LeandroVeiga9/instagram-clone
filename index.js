import React from 'react';
import { registerRootComponent } from 'expo';

import Navigator from './src/Navigator'
import { Provider } from 'react-redux'
import storeConfig from './src/store/storeConfig'

const store = storeConfig()

const Redux = () => (
  <Provider store={store}>
    <Navigator />
  </Provider>
)

registerRootComponent(Redux);
