import { GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../../../firebase";
import { useUserStore } from "../../../stores/store";

export default function LoginButton() {
  const googleProvider = new GoogleAuthProvider();
  const setUser = useUserStore((state) => state.setUser);
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, googleProvider);
      const displayName = result.user.displayName ?? 'user';
      const uid = result.user.uid

      setUser(displayName, uid);
      navigate('/');

      sessionStorage.setItem('uid', uid);
      sessionStorage.setItem('name', displayName);

      console.log("Logged in as:", displayName, uid);
    } catch (error) {
      console.error("Error during Google login:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      const result = await signInWithPopup(firebaseAuth, new FacebookAuthProvider());
      const uid = result.user.uid
      const displayName = result.user.displayName ?? 'user';

      sessionStorage.setItem('uid', uid);
      sessionStorage.setItem('name', displayName);

      navigate('/');
    } catch (error) {
      console.error("Error during Facebook login:", error);
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

