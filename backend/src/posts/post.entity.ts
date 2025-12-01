export interface Post {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt?: string | null;
  imageUrl?: string | null;
  published: boolean;
  createdAt: Date;
  updatedAt: Date;
}
