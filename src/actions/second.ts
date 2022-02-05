export enum ActionType {
  Increment = 'SECOND/INCREMENT',
  Decrement = 'SECOND/DECREMENT',
  SetValue = 'SECOND/SET_VALUE'
}

export type Increment = {
  type: ActionType.Increment
}

export type Decrement = {
  type: ActionType.Decrement
}

export type SetValue = {
  type: ActionType.SetValue,
  valueToSet: number;
}
