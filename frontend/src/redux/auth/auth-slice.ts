import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser } from './auth-operation';

// Типізація для відповіді авторизації
export interface AuthResponse {
    token: string; // Поле токена
  }

// Типізація стану
export interface AuthState {
  user: {
    email: string | null;
    name: string | null;
  };
  token: string | null;
  isRegister: boolean;
  loading: boolean;
  error: string | null;
}

const initialState: AuthState = {
  user: {
    email: null,
    name: null,
  },
  token: null,
  isRegister: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        state.loading = false;
        state.token = action.payload.token; // Зберігаємо токен
        state.isRegister = true;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export default authSlice.reducer;
export const authReducer = authSlice.reducer;