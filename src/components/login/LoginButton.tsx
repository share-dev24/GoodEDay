<<<<<<< HEAD
=======
import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { firebaseAuth, firebaseDb } from "../../../firebase";
import { useUserStore } from "../../stores/store";

export default function LoginButton() {
    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()
    const setUser = useUserStore((state) => state.setUser);
    const navigate = useNavigate();

    const handleGoogleLogin = async () => {
        try {
            const result = await signInWithPopup(firebaseAuth, googleProvider);
            const uid = result.user.uid;
            const displayName = result.user.displayName ?? 'user';
            const photoURL = result.user.photoURL ?? 'user';

            const userRef = doc(firebaseDb, 'userData', uid);
            const docSnap = await getDoc(userRef);
            // 최초로그인
            if (!docSnap.exists()) {
                await setDoc(userRef, {
                    name: displayName,
                    photo: photoURL,
                });

                setUser(displayName, uid, photoURL);

                sessionStorage.setItem('uid', uid);
                sessionStorage.setItem('name', displayName);
                sessionStorage.setItem('photo', photoURL);
            } else {
                // 재로그인
                const userData = docSnap.data();
                setUser(userData.name, uid, userData.photo);
                sessionStorage.setItem('uid', uid);
                sessionStorage.setItem('name', userData.name);
                sessionStorage.setItem('photo', userData.photo);
            }

            navigate('/');
        } catch (error) {
            console.error("Google 로그인 중 오류:", error);
        }
    };

    const handleFacebookLogin = async () => {
        try {
            const result = await signInWithPopup(firebaseAuth, facebookProvider);
            const uid = result.user.uid;
            const displayName = result.user.displayName ?? 'user';
            const photoURL = result.user.photoURL ?? 'user';

            const userRef = doc(firebaseDb, 'userData', uid);
            const docSnap = await getDoc(userRef);
            // 최초로그인
            if (!docSnap.exists()) {
                await setDoc(userRef, {
                    name: displayName,
                    photo: photoURL,
                });

                setUser(displayName, uid, photoURL);

                sessionStorage.setItem('uid', uid);
                sessionStorage.setItem('name', displayName);
                sessionStorage.setItem('photo', photoURL);
            } else {
                // 재로그인
                const userData = docSnap.data();
                setUser(userData.name, uid, userData.photo);
                sessionStorage.setItem('uid', uid);
                sessionStorage.setItem('name', userData.name);
                sessionStorage.setItem('photo', userData.photo);
            }

            navigate('/');
        } catch (error) {
        }
    };


    return (
        <div className="flex flex-col gap-[8px] w-full item-center">
            <button
                onClick={handleGoogleLogin}
                className='w-full p-md text-xl font-bold text-white bg-gradient-to-r from-secondary to-primary rounded-md transition duration-150 ease-in-out hover:opacity-80'
            >
                구글 로그인으로 시작하기
            </button>
            <button
                onClick={handleFacebookLogin}
                className='w-full p-md text-xl font-bold text-white bg-gradient-to-r from-secondary to-primary rounded-md transition duration-150 ease-in-out hover:opacity-80'
            >
                페이스북 로그인으로 시작하기
            </button>
        </div>
    );
}
>>>>>>> feature-firebase-login-function
