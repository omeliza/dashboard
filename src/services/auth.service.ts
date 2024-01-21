/* eslint-disable no-console */
import { IForgot, IReset } from 'interfaces/interfaces';
import { axiosInstance } from 'services';

export const onForgotSubmit = (data: IForgot) => console.log(data);

export const onResetSubmit = (data: IReset) => console.log(data);

export const signUp = async (
  email: string,
  firstName: string,
  lastName: string,
  password: string,
) =>
  axiosInstance.post<string>(`/auth/signup`, {
    email,
    firstName,
    lastName,
    password,
  });

export const signIn = async (email: string, password: string) =>
  axiosInstance.post(`/auth/signin`, {
    email,
    password,
  });
