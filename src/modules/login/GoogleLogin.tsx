import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { firebaseAuth } from "../../../firebase";
import { useUserStore } from "../../stores/store";


export default function GoogleLogin() {
    const provider = new GoogleAuthProvider();
    const setUser = useUserStore((state) => state.setUser);

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(firebaseAuth, provider);
            const displayName = result.user.displayName;
            const uid = result.user.uid;

            setUser(displayName, uid);

            console.log("Logged in as:", displayName, uid);
        } catch (error) {
            console.error("Error during Google login:", error);
        }

    };
    handleGoogleLogin()
}