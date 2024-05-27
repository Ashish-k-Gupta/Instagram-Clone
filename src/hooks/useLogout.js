import { auth } from '../firebase/firebase';
import { useSignOut } from 'react-firebase-hooks/auth';
import useShowToast from './useShowToast';
import userAuthStore from '../store/authStore';

const useLogout = () => {
  const [signOut, loading, error] = useSignOut(auth);
  const showToast = useShowToast();
  const logoutUser = userAuthStore((state) => state.logout); 

  const handleLogout = async()=>{
    try{
        await signOut();
        localStorage.removeItem('user-info')
        logoutUser();
        showToast('success', "You account has been logout", 'success')
    }
    catch(error){
        showToast('error', error.message, 'error')
    }
  }

  return {handleLogout}
}

export default useLogout
