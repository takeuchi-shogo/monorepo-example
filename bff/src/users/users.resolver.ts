import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { User } from './models/user.model';
import { Inject, OnModuleInit } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { IUserService } from './users.interface';

@Resolver()
export class UserResolver implements OnModuleInit {
  constructor(
    @Inject('UsersServiceClient')
    private client: ClientGrpc,
  ) {}

  private usersService: IUserService;

  onModuleInit() {
    this.usersService = this.client.getService<IUserService>('UsersService');
  }

  @Query(() => User, { name: 'user' })
  async getUser(@Args('id', { type: () => Int }) id: number) {
    return this.usersService.findOneById({ id: id });
  }
}
