import React, {createContext, useContext, useEffect, useState} from 'react';

import {signIn} from '../services/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

import api from '../services/api';

interface contextData {
  isSigned: boolean;
  cpf: number | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut: () => void;
  children: number;
}

const authContext = createContext<contextData>({} as contextData);

const AuthProvider: React.FC = ({children}) => {
  const [cpf, setCpf] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  // useEffect(() => {
  //   async function loadStorageData() {
  //     const storagedUser = await AsyncStorage.getItem('@MyUser_cpf');
  //     const storagedToken = await AsyncStorage.getItem('@UserToken');

  //     if (storagedUser && storagedToken) {
  //       setCpf(JSON.parse(storagedUser));
  //       api.defaults.headers.Authorization = `Baerer ${storagedToken}`;
  //     }

  //     setLoading(false);
  //   }

  //   loadStorageData();
  // });
  async function signed() {
    const response = await signIn();
    setCpf(response.cpf);

    api.defaults.headers.Auth = `Bearer ${response.token}`;
    await AsyncStorage.setItem('@MyUser_cpf', JSON.stringify(response.cpf));
    await AsyncStorage.setItem('@UserToken', response.token);
  }
  function signOut() {
    setCpf(null);
  }

  return (
    <AuthProvider value={{signed: !!cpf, cpf, loading, signIn, signOut}}>
      {children}
    </AuthProvider>
  );
};
function useAuth() {
  const context = useContext(authContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider.');
  }

  return context;
}
export {AuthProvider, useAuth};
