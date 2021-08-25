import { api } from './api';

interface SingInReqData {
  email: string;
  password: string;
}

export const singInReq = async (data: SingInReqData) => {
  const result = await api.post('/login', data);

  if (result?.data?.status === 'OK') {
    return result?.data
  } else {
    console.log("eee", "deu ruim!!")
  }
}

export const recoverDataUser = async () => {
  return {
    name: 'Diego',
    email: 'ddzadravec@gmail.com',
    avatar: 'https://github.com/diegozfreitas.png'
  }
}