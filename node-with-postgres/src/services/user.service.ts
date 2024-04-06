import { User } from "../database/models";
import { UserEntity } from "../entities";

export class UserService {
  async create(data: UserEntity) {
    const user = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
    });
    return user;
  }

  async findAll() {
    const users = await User.findAll();
    return users;
  }

  async findById(id: string | number) {
    const user = await User.findOne({ where: { id: id } });
    return user;
  }

  async update(data: UserEntity) {
    const updated = await User.update(
      {
        name: data.name,
        email: data.email,
        password: data.password,
      },
      {
        where: { id: data.id },
      }
    );
    return updated;
  }
}
