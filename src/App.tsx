import Router from './Router';
import { useEffect } from 'react';
import { useUserStore } from './stores/store';
import type { UserState } from './types/staticType';

function App() {
  const { setUser } = useUserStore<UserState>((state) => ({
    displayName: state.displayName,
    uid: state.uid,
    photo: state.photo,
    setUser: state.setUser,
  }));
  useEffect(() => {
    const storedUid = sessionStorage.getItem('uid');
    const name = sessionStorage.getItem('name');
    const photo = sessionStorage.getItem('photo');

    if (storedUid) {
      setUser(name, storedUid, photo);
    }

  }, []);
  return <Router />;
}

export default App;
