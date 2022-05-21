import { Socket } from 'socket.io-client';
import {
  ActionType,
  ConfigureNewSocket,
  SetAvatar,
  SetBoardMode,
  SetCode,
  SetIsReady,
  SetMaxVotes,
  SetNickname,
  SetSelectedPlanningCard,
  SetSocket,
  SetStage,
  SetTimer,
  SetUser,
  SetUserId,
  SetUsers,
} from '../actions/config';
import { RawUser } from '../socket/events/models';

export type ConfigState = {
  localUser: RawUser;
  board: {
    boardId: string;
    stage: number;
    timerTo: number;
    maxVotes: number;
    mode: string;
  };
  users: Array<RawUser>;
  socket: Socket | null;
};

const initialState: ConfigState = {
  localUser: {
    id: '',
    avatar: 0,
    isReady: false,
    nickname: '',
    selectedPlanningCard: 0,
  },
  board: {
    boardId: '',
    stage: 0,
    timerTo: Date.now(),
    maxVotes: 0,
    mode: '',
  },
  users: [],
  socket: null,
};

export type ConfigActions =
  | SetUserId
  | SetNickname
  | SetSelectedPlanningCard
  | SetAvatar
  | SetIsReady
  | SetCode
  | SetStage
  | SetBoardMode
  | SetTimer
  | SetUser
  | SetUsers
  | SetSocket
  | ConfigureNewSocket
  | SetMaxVotes;

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
          timerTo: action.payload.timerTo,
        },
      };
    case ActionType.SetBoardMode:
      return {
        ...state,
        board: {
          ...state.board,
          mode: action.payload.mode,
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
    case ActionType.SetSelectedPlanningCard:
      return {
        ...state,
        localUser: {
          ...state.localUser,
          selectedPlanningCard: action.payload.selectedPlanningCard,
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
    case ActionType.SetMaxVotes:
      return {
        ...state,
        board: {
          ...state.board,
          maxVotes: action.payload.maxVotes,
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
        localUser:
          state.localUser.id === action.payload.user.id
            ? action.payload.user
            : state.localUser,
        users: [
          ...state.users.filter((user) => user.id !== action.payload.user.id),
          action.payload.user,
        ],
      };
    case ActionType.SetUsers: {
      const localUser = action.payload.users.find(
        (user) => user.id === state.localUser.id,
      );
      return {
        ...state,
        localUser: localUser || state.localUser,
        users: action.payload.users,
      };
    }
    case ActionType.SetSocket: {
      state.socket?.disconnect();
      return {
        ...state,
        socket: action.payload.socket,
      };
    }
    default:
      return state;
  }
}
