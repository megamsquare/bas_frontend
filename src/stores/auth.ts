import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
    const isAuthenticated = ref(false);
    const token = ref("");

    function login() {}

    function logout() {}

    function initializeAuthStore() {}

    return { isAuthenticated, token, login, logout, initializeAuthStore };
});