import { registerRootComponent } from 'expo';
import { activateKeepAwake } from 'expo-keep-awake';

import Root from './src/index';

if (__DEV__) {
  activateKeepAwake();
}

registerRootComponent(Root);
