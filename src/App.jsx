import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './layout/Layout'
import StarshipList from './StarshipList.tsx'
import Home from './Home.tsx'
import Login from './features/login/Login.tsx';
import Register from './features/register/Register.tsx';
import ProtectedRoute from './utils/ProtectedRoute.tsx';
import { useAuth } from './context/authContext.tsx';  

export default function App() {

  const {user} = useAuth()

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route element={<ProtectedRoute canNavigate={user} redirectPath='/login' />}>
              <Route path="starships" element={<StarshipList />} />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="sign-up" element={<Register/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}