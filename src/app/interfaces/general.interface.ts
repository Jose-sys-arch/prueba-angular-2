export interface GeneralResponse<T = undefined> {
  statusCode: number;
  message: string;
  data?: T | null;
  error?: string;
}

export interface LoginRequest {
  correo: string;
  password: string;
}

export interface TokenDecode {
  email: string;
  role: 'ADMIN' | 'USER';
  id: number;
}
