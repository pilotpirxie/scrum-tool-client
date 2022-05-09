import { User } from '../reducers/config';

export enum ActionType {
  SetNickname = 'CONFIG/SET_NICKNAME',
  SetCode = 'CONFIG/SET_CODE',
  SetStage = 'CONFIG/SET_STAGE',
  SetTimer = 'CONFIG/SET_TIMER',
  SetUsers = 'CONFIG/SET_USERS',
}

export type SetNickname = {
  type: ActionType.SetNickname;
  payload: {
    nickname: string;
  };
};

export type SetCode = {
  type: ActionType.SetCode;
  payload: {
    code: string;
  };
};

export type SetStage = {
  type: ActionType.SetStage;
  payload: {
    stage: number;
  };
};

export type SetTimer = {
  type: ActionType.SetTimer;
  payload: {
    timer: number;
  };
};

export type SetUsers = {
  type: ActionType.SetUsers;
  payload: {
    users: Array<User>;
  };
};
