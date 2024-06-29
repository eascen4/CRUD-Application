import { User } from '../models/userModel.js';

export async function getUsers(req, res) {
  const users = await User.find();

  return res.status(200).json(users);
}