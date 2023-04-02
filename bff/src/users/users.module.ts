import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserResolver } from './users.resolver';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { join } from 'path';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER_PACKAGE',
        transport: Transport.GRPC,
        options: {
          url: 'localhost:8080',
          package: 'user',
          protoPath: join(__dirname, './proto/user.proto'),
        },
      },
    ]),
  ],
  providers: [UsersService, UserResolver],
})
export class UsersModules {}
