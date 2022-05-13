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
  SetUser,
  SetUserId,
  SetUsers,
} from '../actions/config';

export type User = {
  id: string;
  nickname: string;
  avatar: number;
  isReady: boolean;
};

export type ConfigState = {
  localUser: User;
  board: {
    boardId: string;
    stage: number;
    timerTo: string;
  };
  users: Array<User>;
  socket: Socket | null;
};

const initialState: ConfigState = {
  localUser: {
    id: '',
    avatar: 0,
    isReady: false,
    nickname: '',
  },
  board: {
    boardId: '',
    stage: 0,
    timerTo: Date().toString(),
  },
  users: [],
  socket: null,
};

export type ConfigActions =
  | SetUserId
  | SetNickname
  | SetAvatar
  | SetIsReady
  | SetCode
  | SetStage
  | SetTimer
  | SetUser
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
    case ActionType.SetUserId:
      return {
        ...state,
        localUser: {
          ...state.localUser,
          id: action.payload.id,
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
    case ActionType.SetUser:
      return {
        ...state,
        users: [
          ...state.users.filter((user) => user.id !== action.payload.user.id),
          action.payload.user,
        ],
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
