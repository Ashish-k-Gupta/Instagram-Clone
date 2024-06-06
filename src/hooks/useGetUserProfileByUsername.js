import { useEffect, useState } from "react";
import useShowToast from './useShowToast'
import useUserProfileStore from "../store/userProfileStore";


const useGetUserProfileByUsername = () => {
        const [isLoading, setIsLoading] = useState(true);
        const showToast = useShowToast();
        const {userProfile, setUserProfile} = useUserProfileStore()
        useEffect(() => {
            const getUserProfile = async() =>{
                setIsLoading(true)
                try{
                    const q = query(collection(firestore, "users"), where("username", "==", username))
                    const querySnapshot = await getDocs(q)
                    if(querySnapshot.empty){

                    }
                }
                catch (error){
                    showToast("Error", error.message, "error")
                }
            }
        })
}

export default useGetUserProfileByUsername;
