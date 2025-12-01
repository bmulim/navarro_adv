export interface Area {
  id: string;
  title: string;
  description: string;
  icon?: string | null;
  imageUrl?: string | null;
  order?: string | null;
  createdAt: Date;
  updatedAt: Date;
}
