import { lazy } from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Login from 'pages/Login/Login';
import Layout from 'components/Layout/Layout';
import { PATHS } from 'constants/paths';

const Register = lazy(() => import('pages/Register/Register'));
const Reset = lazy(() => import('pages/Reset/Reset'));
const Forgot = lazy(() => import('pages/Forgot/Forgot'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));
const Overview = lazy(() => import('pages/Overview/Overview'));
const Tickets = lazy(() => import('pages/Tickets/Tickets'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));

export const router = createBrowserRouter([
  {
    path: PATHS.login,
    element: <Login />,
  },
  {
    path: PATHS.register,
    element: <Register />,
  },
  {
    path: PATHS.forgot,
    element: <Forgot />,
  },
  {
    path: PATHS.forgotSuccess,
    element: <Forgot />,
  },
  {
    path: PATHS.reset,
    element: <Reset />,
  },
  {
    path: PATHS.overview,
    element: <Layout />,
    children: [
      {
        path: PATHS.overview,
        element: <Overview />,
      },
      {
        path: 'tickets',
        element: <Tickets />,
      },
      {
        path: 'contacts',
        element: <Contacts />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);
