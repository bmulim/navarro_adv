export interface User {
  id: string;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string;
  imageUrl?: string;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface Area {
  id: string;
  title: string;
  description: string;
  icon?: string;
  imageUrl?: string;
  order?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Schedule {
  id: string;
  dayOfWeek: string;
  openTime: string;
  closeTime: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginDto {
  email: string;
  password: string;
}

export interface AuthResponse {
  access_token: string;
  user: User;
}

export interface ApiResponse<T> {
  data: T;
  statusCode: number;
  timestamp: string;
}
