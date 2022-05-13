import { Socket } from 'socket.io-client';
import { User } from '../reducers/config';

export enum ActionType {
  SetNickname = 'CONFIG/SET_NICKNAME',
  SetCode = 'CONFIG/SET_CODE',
  SetStage = 'CONFIG/SET_STAGE',
  SetTimer = 'CONFIG/SET_TIMER',
  SetUsers = 'CONFIG/SET_USERS',
  ConfigureNewSocket = 'CONFIG/CONFIGURE_NEW_SOCKET',
  SetSocket = 'CONFIG/SET_SOCKET',
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

export type ConfigureNewSocket = {
  type: ActionType.ConfigureNewSocket;
  payload: {
    nickname: string;
    boardId: string;
  };
};

export type SetSocket = {
  type: ActionType.SetSocket;
  payload: {
    socket: Socket;
  };
};
