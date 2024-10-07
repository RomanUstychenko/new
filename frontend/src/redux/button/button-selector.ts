import { ButtonState } from "./button-slice";

export const getButtonStatus = (state: { button: ButtonState }) => state.button.value;