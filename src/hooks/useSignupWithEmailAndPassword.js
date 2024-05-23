import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { auth } from "../firebase/firebase"

const useSignupWithEmailAndPassword = () => {
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error
  ] = useCreateUserWithEmailAndPassword(auth);
  
  
    return {loading, error, signup}

} 

export default useSignupWithEmailAndPassword
