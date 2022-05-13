import { IncomingUsersEvents, OutgoingUsersEvents } from './usersEvents';
import { IncomingCardsEvents, OutgoingCardsEvents } from './cardsEvents';
import { IncomingBoardsEvents, OutgoingBoardsEvents } from './boardsEvents';

export type IncomingEvents = IncomingUsersEvents &
  IncomingCardsEvents &
  IncomingBoardsEvents;
export type OutgoingEvents = OutgoingUsersEvents &
  OutgoingCardsEvents &
  OutgoingBoardsEvents;
