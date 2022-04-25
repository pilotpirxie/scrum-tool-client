import {
  ActionType,
  DeleteCard,
  SetAllCards,
  SetOneCard,
} from '../actions/cards';

export type Card = {
  id: string;
  content: string;
  author: string;
  column: number;
  votes: number;
  createdAt: string;
  updatedAt: string;
};

export type CardsState = Array<Card>;

const initialState: CardsState = [
  {
    id: 'card-1',
    content: 'Card 1',
    author: 'Author 1',
    column: 0,
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
    votes: 0,
  },
];

export type Action = SetOneCard | SetAllCards | DeleteCard;

export default function reducer(
  state: CardsState = initialState,
  action: Action,
): CardsState {
  switch (action.type) {
    case ActionType.SetOneCard:
      return [
        ...state.map((card) =>
          card.id === action.payload.id ? { ...card, ...action.payload } : card,
        ),
      ];
    case ActionType.SetAllCards:
      return action.payload.cards;
    case ActionType.DeleteCard:
      return [...state.filter((card) => card.id !== action.payload.id)];
    default:
      return state;
  }
}
