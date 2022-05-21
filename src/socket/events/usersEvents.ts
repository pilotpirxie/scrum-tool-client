import { RawCard, RawUser } from './models';

export type OutgoingUsersEvents = {
  Join: (data: { boardId: string; nickname: string; avatar: number }) => void;
  ToggleReady: () => void;
  SetSelectedPlanningCard: (data: { selectedPlanningCard: number }) => void;
  ChangeUserData: (data: { nickname: string; avatar: number }) => void;
};

export type IncomingUsersEvents = {
  Joined: (data: {
    localUser: RawUser;
    users: RawUser[];
    cards: RawCard[];
    board: {
      id: string;
      stage: number;
      maxVotes: number;
      timerTo: number;
      mode: string;
    };
  }) => void;
  UserState: (data: { user: RawUser }) => void;
  UsersState: (data: { users: RawUser[] }) => void;
};
