import { create } from "zustand";
import { persist } from "zustand/middleware";
import { ROLE_META, type SessionUser, type UserRole } from "@/types/roles";

type AuthState = {
  user: SessionUser | null;
  isAuthenticated: boolean;
  signIn: (input: { name: string; email: string; role: UserRole }) => void;
  setRole: (role: UserRole) => void;
  signOut: () => void;
};

export const useAuthStore = create<AuthState>()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      signIn: ({ name, email, role }) =>
        set({
          isAuthenticated: true,
          user: {
            id: crypto.randomUUID(),
            name,
            email,
            role,
          },
        }),
      setRole: (role) => {
        const current = get().user;
        if (!current) return;
        set({ user: { ...current, role } });
      },
      signOut: () => set({ user: null, isAuthenticated: false }),
    }),
    { name: "shipla-auth" },
  ),
);

export function roleHome(role: UserRole): string {
  return ROLE_META[role].home;
}
