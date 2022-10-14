import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Components/Layout/Main';
import RegisterReactBootstrap from './Components/RegisterReactBootstrap/RegisterReactBootstrap';
import SignIn from './Components/SignIn/SignIn';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <RegisterReactBootstrap></RegisterReactBootstrap>,
        },
        {
          path: '/register',
          element: <RegisterReactBootstrap></RegisterReactBootstrap>,
        },
        {
          path: '/sign-in',
          element: <SignIn></SignIn>,
        },
      ],
    },
  ]);
  return (
    <div>
      {/* <Register></Register> */}

      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
