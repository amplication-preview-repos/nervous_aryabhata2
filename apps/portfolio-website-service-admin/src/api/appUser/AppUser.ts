export type AppUser = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  username: string | null;
  email: string | null;
  password: string | null;
  role?: "Option1" | null;
};
