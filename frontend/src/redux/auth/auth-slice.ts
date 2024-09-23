import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser, loginUser, User } from './auth-operation';

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
  isLogin: boolean;
  loading: boolean;
  error: string | { status: number; message: string }  | null;
}

const initialState: AuthState = {
  user: {
    email: null,
    name: null,
  },
  token: null,
  isRegister: false,
  isLogin: false,
  loading: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // Інші дії, такі як логін, реєстрація тощо
    // resetRegisterState: (state) => {
    //   state.isRegister = false;
    //   state.error = null;
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action: PayloadAction<AuthResponse>) => {
        console.log("action", action)
        state.loading = false;
        state.token = action.payload.token; // Зберігаємо токен
        state.isRegister = true;
      })
      .addCase(registerUser.rejected, (state, action: PayloadAction<any>) => {
        console.log("action", action)
        state.loading = false;
        state.error = action.payload;
      })

      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = action.payload;
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

// export const { resetRegisterState } = authSlice.actions;
export const authReducer = authSlice.reducer;