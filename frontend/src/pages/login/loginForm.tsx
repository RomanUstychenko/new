import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from "../../redux/store";
import { loginUser } from '../../redux/auth/auth-operation';


// Типізація для даних форми входу
interface LoginFormData {
    email: string;
    password: string;
  }
  
    const Login: React.FC = () => {
      const dispatch = useDispatch<AppDispatch>();
      const { loading, error } = useSelector(
        (state: RootState) => state.auth
      );
  
    // Типізуємо функцію onLogin
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const form = event.target as HTMLFormElement;
      const formData = new FormData(form);
      const loginData: LoginFormData = {
        email: formData.get("email") as string,
        password: formData.get("password") as string,
      };
      dispatch(loginUser(loginData));
    };
  
    return (
      <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" required />
      <input type="password" name="password" placeholder="Password" required />
      <button type="submit" disabled={loading}>
        {loading ? "Registering..." : "Login"}
      </button>
      {error && (
  <p>
    {typeof error === 'string'
      ? error
      : `${error?.status}: ${error?.message || 'Unknown error'}`}
  </p>
)}
    </form>
    );
  };

  export default Login;