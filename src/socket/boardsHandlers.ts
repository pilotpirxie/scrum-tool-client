import { Socket } from 'socket.io-client';
import { IncomingEvents, OutgoingEvents } from './events';
import { RootDispatch } from '../utils/store';
import actions from '../actions';

function registerBoardsHandlers(
  socket: Socket<IncomingEvents, OutgoingEvents>,
  dispatch: RootDispatch,
) {
  socket.on('BoardConfig', (data) => {
    dispatch({
      type: actions.config.SetStage,
      payload: {
        stage: data.board.stage,
      },
    });

    dispatch({
      type: actions.config.SetTimer,
      payload: {
        timerTo: data.board.timerTo,
      },
    });
  });
}

export default registerBoardsHandlers;
