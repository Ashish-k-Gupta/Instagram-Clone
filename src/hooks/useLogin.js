import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import useShowToast from "./useShowToast";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { auth, firestore } from "../firebase/firebase";
import userAuthStore from "../store/authStore";


const useLogin = () => {

    const showToast = useShowToast();
    const [signInWithEmailAndPassword, loading, error] = useSignInWithEmailAndPassword(auth);
    const loginUser = userAuthStore((state) => state.login);

    const login = async (inputs) => {

        if (!inputs.email || !inputs.password) {
            return showToast("Error", "Please Fill all the fields", "error")
        }
        try {

            const userCred = await signInWithEmailAndPassword(inputs.email, inputs.password);

           if (userCred) {
				const docRef = doc(firestore, "users", userCred.user.uid);
				const docSnap = await getDoc(docRef);
				localStorage.setItem("user-info", JSON.stringify(docSnap.data()));
				loginUser(docSnap.data());
			}

        } catch (error) {
            showToast("Error", error.message, "error")
        }
    }
    return { loading, error, login };
}
export default useLogin;


// Uncaught SyntaxError: JSON.parse: unexpected character at line 1 column 1 of the JSON data