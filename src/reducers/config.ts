import { Socket } from 'socket.io-client';
import {
  ActionType,
  ConfigureNewSocket,
  SetAvatar,
  SetCode,
  SetIsReady,
  SetNickname,
  SetSocket,
  SetStage,
  SetTimer,
  SetUsers,
} from '../actions/config';

export type User = {
  nickname: string;
  avatar: number;
  isReady: boolean;
};

export type ConfigState = {
  localUser: User;
  board: {
    boardId: string;
    stage: number;
    timer: number;
  };
  users: Array<User>;
  socket: Socket | null;
};

const initialState: ConfigState = {
  localUser: {
    avatar: 0,
    isReady: false,
    nickname: '',
  },
  board: {
    boardId: '',
    stage: 0,
    timer: 0,
  },
  users: [],
  socket: null,
};

export type ConfigActions =
  | SetNickname
  | SetAvatar
  | SetIsReady
  | SetCode
  | SetStage
  | SetTimer
  | SetUsers
  | SetSocket
  | ConfigureNewSocket;

export default function reducer(
  state: ConfigState = initialState,
  action: ConfigActions,
) {
  switch (action.type) {
    case ActionType.SetBoardId:
      return {
        ...state,
        board: {
          ...state.board,
          boardId: action.payload.boardId,
        },
      };
    case ActionType.SetStage:
      return {
        ...state,
        board: {
          ...state.board,
          stage: action.payload.stage,
        },
      };
    case ActionType.SetTimer:
      return {
        ...state,
        board: {
          ...state.board,
          timer: action.payload.timer,
        },
      };
    case ActionType.SetNickname:
      return {
        ...state,
        localUser: {
          ...state.localUser,
          nickname: action.payload.nickname,
        },
      };
    case ActionType.SetAvatar:
      return {
        ...state,
        localUser: {
          ...state.localUser,
          avatar: action.payload.avatar,
        },
      };
    case ActionType.SetIsReady:
      return {
        ...state,
        localUser: {
          ...state.localUser,
          isReady: action.payload.isReady,
        },
      };
    case ActionType.SetUsers:
      return {
        ...state,
        users: action.payload.users,
      };
    case ActionType.SetSocket:
      return {
        ...state,
        socket: action.payload.socket,
      };
    default:
      return state;
  }
}
