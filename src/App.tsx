import Router from './Router';
import { useEffect } from 'react';
import { useUserStore } from './stores/store';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient()

function App() {
  const { setUser } = useUserStore((state) => ({
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
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
    </QueryClientProvider>
  );
}

export default App;
