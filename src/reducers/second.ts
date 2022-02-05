import {
  ActionType, Decrement, Increment, SetValue,
} from '../actions/second';

export type SecondState = {
    counter: number;
}

const initialState : SecondState = {
  counter: 0,
};

export type Action = Increment | Decrement | SetValue;

export default function reducer(state:SecondState = initialState, action: Action) {
  switch (action.type) {
    case ActionType.Increment:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case ActionType.Decrement:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case ActionType.SetValue:
      return {
        ...state,
        counter: action.valueToSet,
      };
    default:
      return state;
  }
}
