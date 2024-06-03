import { create } from "zustand";

const getUserFromLocalStorage = () => {
  const userInfo = localStorage.getItem("user-info");
  try {
    return userInfo ? JSON.parse(userInfo) : null;
  } catch (error) {
    console.error("Failed to parse user-info from localStorage:", error);
    return null;
  }
};

const useAuthStore = create((set) => ({
  user: getUserFromLocalStorage(),
  login: (user) => {
    localStorage.setItem("user-info", JSON.stringify(user));
    set({ user });
  },
  logout: () => {
    localStorage.removeItem("user-info");
    set({ user: null });
  },
  setUser: (user) => {
    localStorage.setItem("user-info", JSON.stringify(user));
    set({ user });
  },
}));

export default useAuthStore;









/* 


















import { create } from "zustand";

const getUserFromLocalStorage = () => {
  const userInfo = localStorage.getItem("user-info");
  if (!userInfo) {
    return null;
  }
  try {
    const parsedUserInfo = JSON.parse(userInfo);
    // Additional validation to ensure parsed data is an object
    if (typeof parsedUserInfo === "object" && parsedUserInfo !== null) {
      return parsedUserInfo;
    }
    console.error("Invalid user-info data format:", userInfo);
    return null;
  } catch (error) {
    console.error("Failed to parse user-info from localStorage:", error);
    return null;
  }
};

const useAuthStore = create((set) => ({
  user: getUserFromLocalStorage(),
  login: (user) => {
    try {
      localStorage.setItem("user-info", JSON.stringify(user));
      set({ user });
    } catch (error) {
      console.error("Failed to save user-info to localStorage:", error);
    }
  },
  logout: () => {
    localStorage.removeItem("user-info");
    set({ user: null });
  },
  setUser: (user) => {
    try {
      localStorage.setItem("user-info", JSON.stringify(user));
      set({ user });
    } catch (error) {
      console.error("Failed to save user-info to localStorage:", error);
    }
  },
}));

export default useAuthStore;
 */