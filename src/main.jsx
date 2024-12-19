import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Provider } from 'react-redux';
import store from './redux/store';
import MainLayout from './layouts/MainLayout.jsx';
import Home from "./pages/Home/Home.jsx"
import Login from './pages/Login/Login.jsx';
import Register from './pages/Register/Register.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children: [
      { path: "", element: <Home /> },
    ],
  },
  
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  }
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    
        <Provider store={store}>
          <RouterProvider router={router} />
          
        </Provider>
  </StrictMode>,
)
