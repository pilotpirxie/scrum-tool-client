export type RawUser = {
  id: string;
  nickname: string;
  avatar: number;
  isReady: boolean;
};

export type RawCard = {
  id: string;
  stackedOn: string;
  content: string;
  userId: string;
  column: number;
  votes: number;
};
