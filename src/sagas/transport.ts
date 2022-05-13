import { io, Socket } from 'socket.io-client';
import { put, select } from 'redux-saga/effects';
import { RootState } from '../utils/store';
import { ConfigureNewSocket } from '../actions/config';

export default function* configureNewSocket(action: ConfigureNewSocket) {
  const socket: Socket = yield select(
    (state: RootState) => state.config.socket,
  );

  if (socket) {
    socket.disconnect();
  }

  const newSocket = io('http://localhost:3001/', {
    transports: ['websocket', 'polling'],
  }).emit('Join', {
    nickname: action.payload.nickname,
    boardId: action.payload.boardId,
  });

  yield put({
    type: 'SET_SOCKET',
    payload: {
      socket: newSocket,
    },
  });
}
