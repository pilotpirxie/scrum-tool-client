import { Socket } from 'socket.io-client';
import { IncomingEvents, OutgoingEvents } from './events';
import { RootDispatch } from '../utils/store';
import actions from '../actions';

function registerCardsHandlers(
  socket: Socket<IncomingEvents, OutgoingEvents>,
  dispatch: RootDispatch,
) {
  socket.on('CardState', (data) => {
    dispatch({
      type: actions.cards.SetOneCard,
      payload: {
        card: data.card,
      },
    });
  });

  socket.on('CardsState', (data) => {
    dispatch({
      type: actions.cards.SetAllCards,
      payload: {
        cards: data.cards,
      },
    });
  });

  socket.on('DeleteCard', (data) => {
    dispatch({
      type: actions.cards.DeleteCard,
      payload: {
        cardId: data.cardId,
      },
    });
  });
}

export default registerCardsHandlers;
