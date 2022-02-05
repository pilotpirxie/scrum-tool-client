export enum ActionType {
  Setup = 'CONFIG/SETUP'
}

export type Setup = {
  type: ActionType.Setup;
  newValue: string;
}
