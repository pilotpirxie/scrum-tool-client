export type OutgoingBoardsEvents = {
  SetTimer: (data: { duration: number }) => void;
  SetStage: (data: { stage: number }) => void;
};

export type IncomingBoardsEvents = {
  BoardConfig: (data: { board: { stage: number; timerTo: string } }) => void;
};
