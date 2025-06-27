import { createBrowserRouter } from 'react-router-dom';
import Time from '../pages/Time/Time';
import Login from '../pages/Login/Login';
import NotFound from '../pages/Not-found/Not-found';
import MainLayout from '../layouts/MainLayout';
import Projects from '../pages/Projects/Projects';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Time />,
      },
      {
        path: '/projects',
        element: <Projects />,
      },
      {
        path: '/projects/:projectId/time',
        element: <Time />,
      },
      {
        path: 'clients',
        element: <div>Clients Page</div>,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);
