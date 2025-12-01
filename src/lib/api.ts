import type {
  Post,
  Area,
  Schedule,
  LoginDto,
  AuthResponse,
  ApiResponse,
} from "@/types/api";

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3001/api";

class ApiError extends Error {
  constructor(
    message: string,
    public statusCode: number,
    public response?: unknown
  ) {
    super(message);
    this.name = "ApiError";
  }
}

async function fetchApi<T>(
  endpoint: string,
  options?: RequestInit
): Promise<T> {
  const url = `${API_URL}${endpoint}`;

  try {
    const response = await fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        ...options?.headers,
      },
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({}));
      throw new ApiError(
        error.message || `HTTP error! status: ${response.status}`,
        response.status,
        error
      );
    }

    const data = await response.json();
    return data as T;
  } catch (error) {
    if (error instanceof ApiError) {
      throw error;
    }
    throw new ApiError(
      error instanceof Error ? error.message : "Unknown error",
      500
    );
  }
}

// Posts API
export const postsApi = {
  getAll: async (): Promise<ApiResponse<Post[]>> => {
    return fetchApi<ApiResponse<Post[]>>("/posts");
  },

  getBySlug: async (slug: string): Promise<ApiResponse<Post>> => {
    return fetchApi<ApiResponse<Post>>(`/posts/${slug}`);
  },

  getPublished: async (): Promise<ApiResponse<Post[]>> => {
    return fetchApi<ApiResponse<Post[]>>("/posts?published=true");
  },
};

// Areas API
export const areasApi = {
  getAll: async (): Promise<ApiResponse<Area[]>> => {
    return fetchApi<ApiResponse<Area[]>>("/areas");
  },

  getById: async (id: string): Promise<ApiResponse<Area>> => {
    return fetchApi<ApiResponse<Area>>(`/areas/${id}`);
  },
};

// Schedules API
export const schedulesApi = {
  getAll: async (): Promise<ApiResponse<Schedule[]>> => {
    return fetchApi<ApiResponse<Schedule[]>>("/schedules");
  },
};

// Auth API (for admin)
export const authApi = {
  login: async (credentials: LoginDto): Promise<ApiResponse<AuthResponse>> => {
    return fetchApi<ApiResponse<AuthResponse>>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  },

  getProfile: async (token: string): Promise<ApiResponse<AuthResponse>> => {
    return fetchApi<ApiResponse<AuthResponse>>("/auth/profile", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
  },
};

export { ApiError };
