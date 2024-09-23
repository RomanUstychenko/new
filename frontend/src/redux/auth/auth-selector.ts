import { AuthState } from './auth-slice'; // Імпорт типу AuthState
// Селектор для отримання статусу реєстрації
export const selectIsRegistered = (state: { auth: AuthState }) => state.auth.isRegister;

export const selectIsLogin = (state: { auth: AuthState }) => state.auth.isLogin;
// Селектор для отримання статусу завантаження
export const selectIsLoading = (state: { auth: AuthState }) => state.auth.loading;

// Селектор для отримання помилки
export const selectAuthError = (state: { auth: AuthState }) => state.auth.error;