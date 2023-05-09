import { userRepository } from "../repositories";

export const createUserService = async (payload: any) => {
  const newUser = await userRepository.create({ ...payload });
  return await userRepository.save(newUser);
};
