import { Card } from '../reducers/cards';

export enum ActionType {
  GroupCards = 'CARDS/GROUP_CARDS',
  SetOneCard = 'CARDS/SET_ONE',
  SetAllCards = 'CARDS/SET_ALL',
  DeleteCard = 'CARDS/DELETE',
}

export type GroupCards = {
  type: ActionType.GroupCards;
  payload: {
    sourceCard: string;
    targetCard: string;
  };
};

export type SetOneCard = {
  type: ActionType.SetOneCard;
  payload: {
    card: Card;
  };
};

export type SetAllCards = {
  type: ActionType.SetAllCards;
  payload: {
    cards: Array<Card>;
  };
};

export type DeleteCard = {
  type: ActionType.DeleteCard;
  payload: {
    cardId: string;
  };
};
