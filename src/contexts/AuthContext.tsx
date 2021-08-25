import { createContext, useContext, useEffect, useState } from "react";
import { setCookie, parseCookies, destroyCookie } from 'nookies';
import Router from 'next/router';

import { singInReq, recoverDataUser } from "src/services/auth";
import { api } from "src/services/api";

interface singInData {
  email: string;
  password: string;
}

interface User {
  name: string;
  email: string;
  avatar: string;
}

interface AuthContextType {
  isAuthenticated: boolean;
  singIn: (data: singInData) => Promise<void>;
  user: User | null;
  logOut: () => void;
}

export const AuthContext = createContext({} as AuthContextType);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState<User | null>({} as User)

  const isAuthenticated = !!user;

  useEffect(() => {
    const { authToken: token } = parseCookies()

    if (token) {
      recoverDataUser().then(res => {
        setUser(res)
      })
    }

  }, [])

  const singIn = async ({ email, password }: singInData) => {
    const { token } = await singInReq({
      email,
      password,
    })

    setCookie(undefined, 'authToken', token, {
      maxAge: 60 * 60 * 1
    })

    setUser({
      name: 'Diego',
      email: 'ddzadravec@gmail.com',
      avatar: 'https://github.com/diegozfreitas.png'
    })

    api.defaults.headers['Authorization'] = `Bearer ${token}`;

    Router.push('/dashboard');
  }

  const logOut = async () => {
    api.defaults.headers['Authorization'] = ``;

    setUser(null)

    destroyCookie(undefined, 'authToken', '')

    Router.push('/');
  }

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, singIn, logOut }}>
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const useContextAuth = useContext(AuthContext);

  return useContextAuth
}