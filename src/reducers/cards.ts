import {
  ActionType,
  DeleteCard,
  GroupCards,
  SetAllCards,
  SetOneCard,
} from '../actions/cards';
import { RawCard } from '../socket/events/models';

export type CardsState = Array<RawCard>;

const initialState: CardsState = [];

export type Action = SetOneCard | SetAllCards | DeleteCard | GroupCards;

export default function reducer(
  state: CardsState = initialState,
  action: Action,
): CardsState {
  switch (action.type) {
    case ActionType.SetOneCard:
      return [
        ...state.filter((card) => card.id !== action.payload.card.id),
        action.payload.card,
      ];
    case ActionType.SetAllCards:
      return action.payload.cards;
    case ActionType.DeleteCard:
      return [...state.filter((card) => card.id !== action.payload.cardId)];
    default:
      return state;
  }
}
