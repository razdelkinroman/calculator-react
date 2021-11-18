import { createReducer, createAction } from '@reduxjs/toolkit';

const calcPercentage = (per: number, num: number) => (num * per) / 100;

export interface CalcState {
  value: string;
  state: string;
}

const initialState: CalcState = {
  value: '0',
  state: '',
};

const inputValue = createAction<string>('INPUT_VALUE');
const cancel = createAction('CANCEL');
const negate = createAction('NEGATE');
const operation = createAction<string>('OPERATION');
const result = createAction('RESULT');
const percent = createAction('PERCENT');

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(cancel, (state) => {
    state.value = '0';
    state.state = '';
  });

  builder.addCase(inputValue, (state, action) => {
    if (state.value === '0') {
      state.value = action.payload;
    } else {
      state.value += action.payload;
    }
  });

  builder.addCase(negate, (state) => {
    if (state.value[0] === '-') {
      console.log(state.value);
      state.value = state.value.substring(1);
    } else {
      state.value = `-${state.value}`;
    }
  });

  builder.addCase(operation, (state, action) => {
    state.state = state.state + state.value + action.payload;
    state.value = '0';
  });

  builder.addCase(percent, (state) => {
    const result = Function('return ' + state.state.slice(0, -1))();
    const percentage = calcPercentage(result, +state.value);

    state.state = state.state + percentage;
    state.value = '0';
  });

  builder.addCase(result, (state) => {
    let result;
    if (state.value !== '0') {
      result = Function('return ' + state.state + state.value)();
    } else {
      result = Function('return ' + state.state)();
    }

    state.value = `${result}`;
    state.state = '';
  });
});

export default reducer;
