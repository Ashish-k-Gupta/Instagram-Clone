import { create } from "zustand";


const useUserProfileStore = create ((set) => ({
    userProfile: null, 
    setUSerProfile: (userProfile) => set({userProfile}),
    //  add Post
}))

export default useUserProfileStore;