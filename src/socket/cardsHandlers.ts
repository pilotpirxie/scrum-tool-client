import { Socket } from 'socket.io-client';
import { IncomingEvents, OutgoingEvents } from './events';
import { RootDispatch } from '../utils/store';
import actions from '../actions';

function registerCardsHandlers(
  socket: Socket<IncomingEvents, OutgoingEvents>,
  dispatch: RootDispatch,
) {
  socket.on('Joined', (data) => {
    dispatch({
      type: actions.cards.SetAllCards,
      payload: {
        cards: data.cards,
      },
    });
  });
}

export default registerCardsHandlers;
