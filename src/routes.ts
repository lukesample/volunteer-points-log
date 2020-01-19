import { getUsers } from './controller/GetUsers';

/**
 * All application routes
 */
export const AppRoutes = [
  {
    path: '/users',
    method: 'get',
    action: getUsers
  }
];
