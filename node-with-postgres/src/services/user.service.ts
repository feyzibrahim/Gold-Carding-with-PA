import { User } from "../database/models";
import { UserEntity } from "../entities";

export class UserService {
  async create(data: UserEntity) {
    const user = await User.create({
      name: data.name,
      email: data.email,
      password: data.password,
      role: data.role,
      payer_id: data.payer_id,
      provider_id: data.provider_id,
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

  async findByEmail(email: string) {
    const user = await User.findOne({ where: { email: email } });
    return user;
  }

  async update(data: UserEntity) {
    const updated = await User.update(
      {
        name: data.name,
        email: data.email,
        password: data.password,
        role: data.role,
        payer_id: data.payer_id,
        provider_id: data.provider_id,
      },
      {
        where: { id: data.id },
      }
    );
    return updated;
  }

  async deleteUser(id: string | number) {
    const user = await User.findOne({
      where: { id: id },
    });
    if (!user) {
      return;
    }
    await user.destroy();
    return user;
  }
}
