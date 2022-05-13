import { takeLeading } from 'redux-saga/effects';
import { ConfigureNewSocket } from '../actions/config';
import configureNewSocket from './transport';
import actions from '../actions';

export default function* rootSaga() {
  yield takeLeading<ConfigureNewSocket>(
    actions.config.ConfigureNewSocket,
    configureNewSocket,
  );
}
