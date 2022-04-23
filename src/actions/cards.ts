import { Card } from '../reducers/cards';

export enum ActionType {
  SetOneCard = 'CARDS/SET_ONE',
  SetAllCards = 'CARDS/SET_ALL',
  DeleteCard = 'CARDS/DELETE',
}

export type SetOneCard = {
  type: ActionType.SetOneCard;
  payload: {
    id: string;
    card: Card;
  };
};

export type SetAllCards = {
  type: ActionType.SetAllCards;
  payload: {
    [id: string]: Card;
  };
};

export type DeleteCard = {
  type: ActionType.DeleteCard;
  payload: {
    id: string;
  };
};
