export type OutgoingBoardsEvents = {
  SetTimer: (data: { duration: number }) => void;
  SetBoardMode: (data: { mode: string }) => void;
  SetMaxVotes: (data: { maxVotes: number }) => void;
  SetStage: (data: { stage: number }) => void;
};

export type IncomingBoardsEvents = {
  BoardConfig: (data: {
    board: {
      stage: number;
      timerTo: number;
      maxVotes: number;
      mode: string;
    };
  }) => void;
};
