import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { registerUser, loginUser, logoutUser, current, User } from './auth-operation';

// Типізація для відповіді авторизації
export interface AuthResponse {
    token: string; // Поле токена
  }


// Типізація стану
export interface AuthState {
  user: {
    email: string | null;
    name: string | null;
    logoURL: string | null;
    verify: string | null;
    id: string | null;
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
    logoURL: null,
    verify: null,
    id: null,
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
        // state.user = action.payload.user;
        console.log("action", action.payload)
        state.user = {
          ...state.user, // залишаємо попередні значення для відсутніх полів
          ...action.payload.user,
          logoURL: action.payload.user.logoURL || null, // якщо значення відсутнє, задаємо null
          verify: action.payload.user.verify || null,   // якщо значення відсутнє, задаємо null
        };
        state.token = action.payload.token;
        state.isLogin = true;
      })
      .addCase(loginUser.rejected, (state, action: PayloadAction<any>) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = { name: null, email: null, logoURL: null, verify: null, id: null };
        state.token = null;
        state.isLogin = false;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | { status: number; message: string };
      })

      .addCase(current.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(current.fulfilled, (state, action: PayloadAction<User>) => {
        state.loading = false;
        state.user = {
          ...state.user, // Зберігаємо існуючі поля користувача
          ...action.payload,
          logoURL: action.payload.user.logoURL ?? null, // Перевіряємо, чи поле не undefined
          verify: action.payload.user.verify ?? null,   // Перевіряємо, чи поле не undefined
        };
        state.isLogin = true;
      })
      .addCase(current.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string | { status: number; message: string };
      })

      // .addCase(userUpdate.pending, (state) => {
      //   state.loading = true;
      //   state.error = null;
      // })
      // .addCase(userUpdate.fulfilled, (state, action: PayloadAction<User>) => {
      //   state.loading = false;
      //   state.user = action.payload;
      // })
      // .addCase(userUpdate.rejected, (state, action) => {
      //   state.loading = false;
      //   state.error = action.payload as string | { status: number; message: string };
      // });
  },
});

// export const { resetRegisterState } = authSlice.actions;
export const authReducer = authSlice.reducer;