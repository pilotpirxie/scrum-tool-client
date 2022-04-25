import { Card } from '../reducers/cards';

export enum ActionType {
  SetOneCard = 'CARDS/SET_ONE',
  SetAllCards = 'CARDS/SET_ALL',
  DeleteCard = 'CARDS/DELETE',
}

export type SetOneCard = {
  type: ActionType.SetOneCard;
  payload: Card;
};

export type SetAllCards = {
  type: ActionType.SetAllCards;
  payload: Array<Card>;
};

export type DeleteCard = {
  type: ActionType.DeleteCard;
  payload: string;
};
