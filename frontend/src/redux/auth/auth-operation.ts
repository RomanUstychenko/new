import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import * as api from '../../API/auth'
// Типізація для даних реєстрації та відповіді
// Типізація для даних реєстрації та відповіді
interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

interface AuthResponse {
  token: string;
}

// Асинхронна функція для реєстрації
export const registerUser = createAsyncThunk<AuthResponse, RegisterData>(
  'auth/register',
  async (registerData, { rejectWithValue }) => {
    try {
      const response = await api.register(registerData); // Використовуємо метод з об'єкта api
      return response;
    } catch (error: any) {
      return rejectWithValue(error.response.data);
    }
  }
);