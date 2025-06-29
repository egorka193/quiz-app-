export enum LocalStorageKeys {
  Users = 'usersData',
  CurrentUser = 'currentUser',
}
export type UserCredentials = {
  login: string;
  password: string;
};

export interface User {
  name: string;
  role: 'admin' | 'guest' | 'user';
}