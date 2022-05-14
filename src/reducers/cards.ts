import {
  ActionType,
  DeleteCard,
  GroupCards,
  SetAllCards,
  SetOneCard,
} from '../actions/cards';

export type Card = {
  id: string;
  stackedOn: string | null;
  content: string;
  userId: string;
  column: number;
  votes: number;
};

export type CardsState = Array<Card>;

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
