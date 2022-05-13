import { RawCard, RawUser } from './models';

export type OutgoingUsersEvents = {
  Join: (data: { boardId: string; nickname: string }) => void;
  ToggleReady: () => void;
  ChangeUserData: (data: { nickname: string; avatar: number }) => void;
};

export type IncomingUsersEvents = {
  Joined: (data: {
    users: RawUser[];
    cards: RawCard[];
    board: { id: string; stage: number; timerTo: Date };
  }) => void;
  UserState: (data: { user: RawUser }) => void;
  UsersState: (data: { users: RawUser[] }) => void;
};
