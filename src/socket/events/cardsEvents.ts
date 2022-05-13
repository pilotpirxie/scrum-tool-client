import { RawCard } from './models';

export type OutgoingCardsEvents = {
  CreateCard: (data: { content: string; column: number }) => void;
  UpdateCard: (data: { cardId: string; content: string }) => void;
  DeleteCard: (data: { cardId: string }) => void;
  GetCards: () => void;
  GroupCards: (data: { cardId: string; stackedOn: string }) => void;
  UngroupCards: (data: { cardId: string }) => void;
  UpvoteCard: (data: { cardId: string }) => void;
  DownvoteCard: (data: { cardId: string }) => void;
};
export type IncomingCardsEvents = {
  CardState: (data: { card: RawCard }) => void;
  DeleteCard: (data: { cardId: string }) => void;
  CardsState: (data: { cards: RawCard[] }) => void;
};
