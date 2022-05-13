import { Socket } from 'socket.io-client';
import { NavigateFunction } from 'react-router-dom';
import { IncomingEvents, OutgoingEvents } from './events';
import { RootDispatch } from '../utils/store';
import actions from '../actions';

function registerCardsHandlers(
  socket: Socket<IncomingEvents, OutgoingEvents>,
  dispatch: RootDispatch,
  navigate: NavigateFunction,
) {
  socket.on('Joined', (data) => {
    dispatch({
      type: actions.cards.SetAllCards,
      payload: {
        cards: data.cards,
      },
    });

    dispatch({
      type: actions.config.SetUsers,
      payload: {
        users: data.users,
      },
    });

    dispatch({
      type: actions.config.SetTimer,
      payload: {
        timer: Date.parse(data.board.timerTo),
      },
    });

    dispatch({
      type: actions.config.SetStage,
      payload: {
        stage: data.board.stage,
      },
    });

    navigate(`/retro/${data.board.id}`);
  });
}

export default registerCardsHandlers;
