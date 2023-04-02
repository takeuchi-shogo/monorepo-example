import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { UsersModules } from './users/users.module';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      path: '/graphql',
      autoSchemaFile: join(process.cwd(), '/src/graphql/schema.gql'),
      sortSchema: true,
      driver: ApolloDriver,
    }),
    UsersModules,
  ],
})
export class AppModule {}
