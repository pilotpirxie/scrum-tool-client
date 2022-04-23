import { combineReducers } from 'redux';

import config from './config';
import cards from './cards';

export default combineReducers({
  config,
  cards,
});
