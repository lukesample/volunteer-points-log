import { Request, Response } from 'express';
import { getManager } from 'typeorm';
import { User } from '../entity/User';

/**
 * Gets a collection of all users.
 * @param request The HTTP request.
 * @param response The HTTP response.
 */
export async function getUsers(request: Request, response: Response) {
  const userRepository = getManager().getRepository(User);
  const users = await userRepository.find();

  response.send(users);
}
