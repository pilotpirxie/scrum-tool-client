import {
  ActionType,
  DeleteCard,
  SetAllCards,
  SetOneCard,
} from '../actions/cards';

export type Card = {
  content: string;
  author: string;
  column: number;
  votes: number;
  createdAt: string;
  updatedAt: string;
};

export type CardsState = {
  [key: string]: Card;
};

const initialState: CardsState = {
  'card-1': {
    content: 'Card 1',
    author: 'Author 1',
    column: 0,
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
    votes: 0,
  },
};

export type Action = SetOneCard | SetAllCards | DeleteCard;

export default function reducer(
  state: CardsState = initialState,
  action: Action,
) {
  switch (action.type) {
    case ActionType.SetOneCard:
      return {
        ...state,
        [action.payload.id]: action.payload,
      };
    case ActionType.SetAllCards:
      return action.payload;
    case ActionType.DeleteCard:
      return {
        ...state,
        [action.payload.id]: undefined,
      };
    default:
      return state;
  }
}
