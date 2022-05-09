import {
  ActionType,
  SetCode,
  SetNickname,
  SetStage,
  SetTimer,
  SetUsers,
} from '../actions/config';

export type User = {
  id: string;
  nickname: string;
  avatarId: number;
  isReady: boolean;
  createdAt: string;
  updatedAt: string;
};

export type ConfigState = {
  nickname: string;
  code: string;
  stage: number;
  timer: number;
  users: Array<User>;
};

const initialState: ConfigState = {
  nickname: '',
  code: '',
  stage: 0,
  timer: 0,
  users: [],
};

export type ConfigActions =
  | SetNickname
  | SetCode
  | SetStage
  | SetTimer
  | SetUsers;

export default function reducer(
  state: ConfigState = initialState,
  action: ConfigActions,
) {
  switch (action.type) {
    case ActionType.SetCode:
      return {
        ...state,
        code: action.payload.code,
      };
    case ActionType.SetNickname:
      return {
        ...state,
        nickname: action.payload.nickname,
      };
    case ActionType.SetStage:
      return {
        ...state,
        stage: action.payload.stage,
      };
    case ActionType.SetTimer:
      return {
        ...state,
        timer: action.payload.timer,
      };
    case ActionType.SetUsers:
      return {
        ...state,
        users: action.payload.users,
      };
    default:
      return state;
  }
}
