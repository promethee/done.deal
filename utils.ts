import { User } from './pages/api/users';

export const formatUserName = (user: Pick<User, 'title' | 'firstname' | 'lastname'>): string => {
  return `${user.title} ${user.firstname} ${user.lastname}`;
}
