import { Request, Response } from "express";
import { getManager } from "typeorm";
import { User } from "../entity/User";

/**
 * Handles calls from the 'users' route.
 */
export default class UserController {
  /**
   * Gets a collection of all users.
   * @param request The HTTP request.
   * @param response The HTTP response.
   */
  static async getUsers(request: Request, response: Response): Promise<void> {
    const userRepository = getManager().getRepository(User);
    const users = await userRepository.find();

    response.send(users);
  }
}
