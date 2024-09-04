// Define a type that matches NextAuth's expectations
export interface NextAuthUser {
    email: string;
    name?: string;
    image?: string;
    role?: string;
  }
  