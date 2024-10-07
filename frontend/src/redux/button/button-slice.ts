import { createSlice, PayloadAction  } from '@reduxjs/toolkit';

type StateType = boolean | string | null;

export interface ButtonState {
  value: StateType;
}

const initialState: ButtonState = {
  value: "main",
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    setButton: (state, action: PayloadAction<StateType>) => {
        state.value = action.payload;
      },
  },
});

export const { setButton } = buttonSlice.actions;
export const buttonReducer = buttonSlice.reducer;