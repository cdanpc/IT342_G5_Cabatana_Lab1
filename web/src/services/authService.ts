import api from './api';

export interface RegisterData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface LoginData {
  email: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  type: string;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
}

export interface UserResponse {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
}

class AuthService {
  async register(data: RegisterData): Promise<AuthResponse> {
    // Clear any existing invalid tokens before registration
    this.clearInvalidToken();
    
    const response = await api.post<AuthResponse>('/auth/register', data);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  async login(data: LoginData): Promise<AuthResponse> {
    // Clear any existing invalid tokens before login
    this.clearInvalidToken();
    
    const response = await api.post<AuthResponse>('/auth/login', data);
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify(response.data));
    }
    return response.data;
  }

  logout(): void {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  }

  getCurrentUser(): AuthResponse | null {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      return JSON.parse(userStr);
    }
    return null;
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }

  async getUserProfile(): Promise<UserResponse> {
    const response = await api.get<UserResponse>('/user/me');
    return response.data;
  }

  // Clear any invalid tokens from localStorage
  private clearInvalidToken(): void {
    const token = localStorage.getItem('token');
    if (token && (token.trim() === '' || token.split('.').length !== 3)) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
  }
}

export default new AuthService();
