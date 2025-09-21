import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
import ProtectedRoute from "./components/ProtectedRoute";
import Products from './components/Products';
import PublicRoute from './components/PublicRoute';

function App() {

  const browserRoter = createBrowserRouter([
    {
      path: '/',
      element: <Home></Home>,
    },
    {
      path: '/about',
      element: <About></About>,
    },
    {
      path: '/contact',
      element: <Contact></Contact>,
    },
    {
      path: '/Login',
      element: <PublicRoute> <Login></Login></PublicRoute>,
    },
    {
      path: "/products",
      element: (
        <ProtectedRoute>
          <Products />
        </ProtectedRoute>
      ),
    },
    {
      path: '*',
      element: <Home></Home>,
    }
  ])

  return (
    <RouterProvider router={browserRoter}></RouterProvider>
  );
}

export default App;
