import { RawCard } from '../socket/events/models';

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
    card: RawCard;
  };
};

export type SetAllCards = {
  type: ActionType.SetAllCards;
  payload: {
    cards: Array<RawCard>;
  };
};

export type DeleteCard = {
  type: ActionType.DeleteCard;
  payload: {
    cardId: string;
  };
};
