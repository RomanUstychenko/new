import axios, { AxiosInstance } from 'axios';

interface RegisterData {
  email: string;
  password: string;
  name?: string;
}

interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  user: {
    id: string;
    name: string;
    email: string;
    logoURL: string;
    verify: string;
  };
  token: string;
}

const instance: AxiosInstance = axios.create({
  baseURL: 
  'http://localhost:5000/api',
//   'https://project-rest-api.fly.dev/api',
});

export const setToken = (token: string | null): void => {
  if (token) {
    instance.defaults.headers.common['authorization'] = `Bearer ${token}`;
  } else {
    instance.defaults.headers.common['authorization'] = '';
  }
};

export const register = async (registerData: RegisterData): Promise<AuthResponse> => {
  const { data } = await instance.post<AuthResponse>('/users/register', registerData);
  instance.defaults.headers.common['authorization'] = `Bearer ${data.token}`;
  return data;
};

export const resendVerificationEmail = async (email: { email: string }): Promise<AuthResponse> => {
  const { data } = await instance.post<AuthResponse>('/users/verify', email);
  instance.defaults.headers.common['authorization'] = `Bearer ${data.token}`;
  return data;
};

export const login = async (loginData: LoginData): Promise<AuthResponse> => {
  const { data } = await instance.post<AuthResponse>('/users/login', loginData);
  instance.defaults.headers.common['authorization'] = `Bearer ${data.token}`;
  return data;
};

export const logout = async (): Promise<void> => {
  await instance.post('/users/logout');
};

export const getCurrentUser = async (token: string | null): Promise<AuthResponse | null> => {
  try {
    setToken(token);
    const { data } = await instance.get<AuthResponse>('/users/current');
    return data;
  } catch (error) {
    setToken(null);
    throw error;
  }
};
export default instance;