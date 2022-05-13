import { io, Socket } from 'socket.io-client';
import { put, select } from 'redux-saga/effects';
import { RootState } from '../utils/store';
import { ConfigureNewSocket } from '../actions/config';
import { JoinedEventPayload } from '../utils/transportTypes';

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

  newSocket.on('Joined', (data: JoinedEventPayload) => {
    // eslint-disable-next-line no-console
    console.log(data);
  });

  yield put({
    type: 'SET_SOCKET',
    payload: {
      socket: newSocket,
    },
  });
}
