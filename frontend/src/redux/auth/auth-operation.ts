import { createAsyncThunk } from '@reduxjs/toolkit';
import * as api from '../../API/auth';
import { AuthResponse } from '../../API/auth';
import { AppDispatch, RootState } from '../store';
interface AuthData {
  email: string;
  password: string;
}

interface ErrorResponse {
  status: number;
  message: string;
}

export interface User {
  user: {
    id: string;
    name: string;
    email: string;
    logoURL?: string; // робимо ці поля опціональними
  verify?: string;
  },
  token: string;
}

export const registerUser = createAsyncThunk<User, AuthData, { rejectValue: ErrorResponse }>(
  'auth/register',
  async (data, { rejectWithValue }) => {
    try {
      const result: AuthResponse = await api.register(data);
console.log("result", result)
      const user: User = {
        user: result.user,
        // id: result.user.id,
        // name: result.user.name,
        // email: result.user.email,
        token: result.token, 
      };
      return user;
    } catch (error: any) {
      console.log("error", error)
      const errorResponse: ErrorResponse = {
        
        // status: error.response?.status || 500,
        status: error.response?.status,
        // message: error.response?.data?.message || 'Registration failed',
        message: error.response?.data?.message,
      };
      return rejectWithValue(errorResponse);
    }
  }
);

export const resendVerificationEmail = createAsyncThunk<void, string, { rejectValue: ErrorResponse }>(
  'auth/resendVerificationEmail',
  async (email, { rejectWithValue }) => {
    console.log('email', email);
    try {
      await api.resendVerificationEmail({ email });
    } catch (error: any) {
      const errorResponse: ErrorResponse = {
        status: error.response?.status || 500,
        message: error.response?.data?.message || 'Failed to resend verification email',
      };
      return rejectWithValue(errorResponse);
    }
  }
);

export const loginUser = createAsyncThunk<User, AuthData, { rejectValue: ErrorResponse }>(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const result: AuthResponse = await api.login(data);
      console.log("result", result)
      // Перетворюємо AuthResponse на User
      const user: User = {
        // id: result.user.id,
        // name: result.user.name,
        // email: result.user.email,
        user: result.user,
        token: result.token,
      };
      localStorage.setItem('token', result.token);
console.log("user", user)
      return user;
    } catch (error: any) {
      const errorResponse: ErrorResponse = {
        status: error.response?.status || 500,
        message: error.response?.data?.message || 'Login failed',
      };
      return rejectWithValue(errorResponse);
    }
  }
);

export const logoutUser = createAsyncThunk<void, void, { rejectValue: ErrorResponse }>(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await api.logout();
    } catch (error: any) {
      const errorResponse: ErrorResponse = {
        status: error.response?.status || 500,
        message: error.response?.data?.message || 'Logout failed',
      };
      return rejectWithValue(errorResponse);
    }
  }
);

export const current = createAsyncThunk<User, void, { rejectValue: ErrorResponse, state: RootState, dispatch: AppDispatch, }>(
  'auth/current',
  async (_, { rejectWithValue, getState }) => {
    try {
      const { auth } = getState();
      console.log("auth", auth)
        const result: AuthResponse | null = await api.getCurrentUser(auth.token);
        console.log("result", result)
      
      if (!result) {
        // Якщо результат null, повертаємо помилку
        console.log("null")
        return rejectWithValue({
          status: 401,
          message: 'User not authenticated',
        });
      }

      // Перетворюємо AuthResponse на User
      const user: User = {
        user: result.user,  
        token: result.token,
      };
      console.log("user", user)
      return user;
    } catch (error: any) {
      console.log("error")
      const errorResponse: ErrorResponse = {
        status: error.response?.status || 500,
        message: error.response?.data?.message || 'Failed to fetch current user',
      };
      return rejectWithValue(errorResponse);
    }
  }
);


// export const userUpdate = createAsyncThunk<User, Partial<User>, { rejectValue: ErrorResponse }>(
//   'auth/userUpdate',
//   async (userData, { rejectWithValue }) => {
//     try {
//       const result: AuthResponse = await api.userUpdate(userData);
      
//       // Перетворюємо AuthResponse на User
//       const user: User = {
//         id: result.user.id,
//         name: result.user.name,
//         email: result.user.email,
//         token: result.token,
//       };
//       return user;
//     } catch (error: any) {
//       const errorResponse: ErrorResponse = {
//         status: error.response?.status || 500,
//         message: error.response?.data?.message || 'Failed to update user data',
//       };
//       return rejectWithValue(errorResponse);
//     }
//   }
// );