import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

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
    }
  ])

  return (
    <RouterProvider router={browserRoter}></RouterProvider>
  );
}

export default App;
