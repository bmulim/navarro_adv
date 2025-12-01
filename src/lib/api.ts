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
  getAll: async (token?: string): Promise<ApiResponse<Post[]>> => {
    return fetchApi<ApiResponse<Post[]>>("/posts", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  },

  getBySlug: async (slug: string): Promise<ApiResponse<Post>> => {
    return fetchApi<ApiResponse<Post>>(`/posts/${slug}`);
  },

  getPublished: async (): Promise<ApiResponse<Post[]>> => {
    return fetchApi<ApiResponse<Post[]>>("/posts?published=true");
  },

  create: async (
    data: Partial<Post>,
    token: string
  ): Promise<ApiResponse<Post>> => {
    return fetchApi<ApiResponse<Post>>("/posts", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  update: async (
    id: string,
    data: Partial<Post>,
    token: string
  ): Promise<ApiResponse<Post>> => {
    return fetchApi<ApiResponse<Post>>(`/posts/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  delete: async (id: string, token: string): Promise<ApiResponse<void>> => {
    return fetchApi<ApiResponse<void>>(`/posts/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

// Areas API
export const areasApi = {
  getAll: async (token?: string): Promise<ApiResponse<Area[]>> => {
    return fetchApi<ApiResponse<Area[]>>("/areas", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  },

  getById: async (id: string): Promise<ApiResponse<Area>> => {
    return fetchApi<ApiResponse<Area>>(`/areas/${id}`);
  },

  create: async (
    data: Partial<Area>,
    token: string
  ): Promise<ApiResponse<Area>> => {
    return fetchApi<ApiResponse<Area>>("/areas", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  update: async (
    id: string,
    data: Partial<Area>,
    token: string
  ): Promise<ApiResponse<Area>> => {
    return fetchApi<ApiResponse<Area>>(`/areas/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  delete: async (id: string, token: string): Promise<ApiResponse<void>> => {
    return fetchApi<ApiResponse<void>>(`/areas/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

// Schedules API
export const schedulesApi = {
  getAll: async (token?: string): Promise<ApiResponse<Schedule[]>> => {
    return fetchApi<ApiResponse<Schedule[]>>("/schedules", {
      headers: token ? { Authorization: `Bearer ${token}` } : {},
    });
  },

  create: async (
    data: Partial<Schedule>,
    token: string
  ): Promise<ApiResponse<Schedule>> => {
    return fetchApi<ApiResponse<Schedule>>("/schedules", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  update: async (
    id: string,
    data: Partial<Schedule>,
    token: string
  ): Promise<ApiResponse<Schedule>> => {
    return fetchApi<ApiResponse<Schedule>>(`/schedules/${id}`, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { Authorization: `Bearer ${token}` },
    });
  },

  delete: async (id: string, token: string): Promise<ApiResponse<void>> => {
    return fetchApi<ApiResponse<void>>(`/schedules/${id}`, {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    });
  },
};

// Auth API (for admin)
export const authApi = {
  checkSetup: async (): Promise<
    ApiResponse<{ needsSetup: boolean; hasAdmin: boolean }>
  > => {
    return fetchApi<ApiResponse<{ needsSetup: boolean; hasAdmin: boolean }>>(
      "/auth/setup"
    );
  },

  login: async (credentials: LoginDto): Promise<ApiResponse<AuthResponse>> => {
    return fetchApi<ApiResponse<AuthResponse>>("/auth/login", {
      method: "POST",
      body: JSON.stringify(credentials),
    });
  },

  register: async (
    credentials: LoginDto & { name: string }
  ): Promise<ApiResponse<AuthResponse>> => {
    return fetchApi<ApiResponse<AuthResponse>>("/auth/register", {
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
