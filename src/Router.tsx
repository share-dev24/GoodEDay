import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Main from './routes/Main';
import Login from './routes/Login';
import Posts from './routes/Posts';
import PostDetail from './routes/PostDetail';
import CreateCard from './routes/CreateCard';
import CompletedCard from './routes/CompletedCard';
import CreatePost from './routes/CreatePost';
import Profile from './routes/Profile';
import NotFound from './screens/NotFound';

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element: <Main />,
        children: [
          {
            path: ':postId',
            element: <PostDetail />
          }
        ]
      },
      {
        path: 'login',
        element: <Login />
      },
      {
        path: 'posts',
        element: <Posts />,
        children: [
          {
            path: ':postId',
            element: <PostDetail />
          }
        ]
      },
      {
        path: 'create-card/:theme',
        element: <CreateCard />
      },
      {
        path: 'completed-card',
        element: <CompletedCard />
      },
      {
        path: 'user-page',
        element: <Profile />,
        children: [
          {
            path: 'create-post/:cardId',
            element: <CreatePost />
          },
          {
            path: ':postId',
            element: <PostDetail />
          }
        ]
      }
    ],
    errorElement: <NotFound />
  }
]);

export default function Router() {
  return <RouterProvider router={route} />;
}
