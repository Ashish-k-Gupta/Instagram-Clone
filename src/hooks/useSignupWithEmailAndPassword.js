import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth'
import { auth, firestore } from "../firebase/firebase"
import { FormLabel, useToast } from '@chakra-ui/react';
import { create } from 'zustand';
import { doc, setDoc } from 'firebase/firestore';
import { json } from 'react-router-dom';
import useShowToast from './useShowToast';
import userAuthStore from '../store/authStore';

const useSignUpWithEmailAndPassword = () => {
  const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth);
  const showToast = useShowToast()
  const loginUser = userAuthStore(state => state.login)
  const logoutUser = userAuthStore(state => state.logout)

  const signup = async (inputs) => {
    if (!inputs.username || !inputs.fullName || !inputs.email || !inputs.password) {
      showToast("Error", "Please fill all the input fields", "error");
      return;
    }
    try {
      const newUser = await createUserWithEmailAndPassword(inputs.email, inputs.password)
      if (!newUser && error) {
        showToast("Error", error.message, "error");
        return
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          username: inputs.username,
          fullName: inputs.fullName,
          bio: '',
          profilePicURL: "",
          followers: [],
          following: [],
          posts: [],
          createAt: Date.now()
        }
        await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
        localStorage.setItem("user-info", JSON.stringify(userDoc))
        loginUser
        showToast("Account Created", "We've created your account for you.", "success");
      }
    }
    catch (error) {
      showToast("Error", error.message, "error")
    }
  }


  return { loading, error, signup }

}

export default useSignUpWithEmailAndPassword;
