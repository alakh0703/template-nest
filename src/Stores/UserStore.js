import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export const useUserStore = create(
    persist(
        (set) => ({
            user: {
                name: null,
                email: null,
                token: null,
                isPremiumUser: false,
            },
            setUser: (userInfo) => set({ user: userInfo }),
            clearUser: () => set({
                user: {
                    name: null,
                    email: null,
                    token: null,
                    isPremiumUser: false,
                },
            }),
        }),
        {
            name: 'user-storage', // unique name for storage item
            storage: createJSONStorage(() => localStorage), // use localStorage instead of sessionStorage
        }
    )
);
