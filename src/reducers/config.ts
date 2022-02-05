import { ActionType, Setup } from '../actions/config';

export type ConfigState = {
  value: string;
};

const initialState: ConfigState = {
  value: '',
};

export type ConfigActions = Setup;

export default function reducer(
  state: ConfigState = initialState,
  action: ConfigActions,
) {
  switch (action.type) {
    case ActionType.Setup:
      return {
        ...state,
        value: action.newValue,
      };
    default:
      return state;
  }
}
