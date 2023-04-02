import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UsersService {
  findOneById(id: number): User {
    const result = { id: id };
    return result;
  }
}
