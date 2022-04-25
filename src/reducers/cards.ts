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
    stackedOn: 'card-2',
    content: 'Card 1',
    author: 'Author 1',
    column: 0,
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
    votes: 0,
  },
  {
    id: 'card-2',
    stackedOn: 'card-3',
    content: 'Card 2',
    author: 'Author 1',
    column: 0,
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
    votes: 0,
  },
  {
    id: 'card-3',
    stackedOn: null,
    content: 'Card 3',
    author: 'Author 2',
    column: 0,
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
    votes: 0,
  },
  {
    id: 'card-4',
    stackedOn: 'card-1',
    content: 'Card 4',
    author: 'Author 1',
    column: 0,
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
    votes: 0,
  },
  {
    id: 'card-5',
    stackedOn: null,
    content: 'Card 5',
    author: 'Author 1',
    column: 1,
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
    votes: 0,
  },
  {
    id: 'card-6',
    stackedOn: null,
    content: 'Card 6',
    author: 'Author 1',
    column: 2,
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
    votes: 0,
  },
  {
    id: 'card-7',
    stackedOn: null,
    content: 'Card 7',
    author: 'Author 1',
    column: 2,
    createdAt: '2020-01-01T00:00:00.000Z',
    updatedAt: '2020-01-01T00:00:00.000Z',
    votes: 0,
  },
];

export type Action = SetOneCard | SetAllCards | DeleteCard | GroupCards;

export default function reducer(
  state: CardsState = initialState,
  action: Action,
): CardsState {
  switch (action.type) {
    case ActionType.SetOneCard:
      return [
        ...state.filter((card) => card.id !== action.payload.id),
        action.payload,
      ];
    case ActionType.SetAllCards:
      return action.payload;
    case ActionType.DeleteCard:
      return [...state.filter((card) => card.id !== action.payload)];
    default:
      return state;
  }
}
