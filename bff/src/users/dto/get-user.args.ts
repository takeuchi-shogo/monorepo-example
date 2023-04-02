import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
class GetUserArgs {
  @Field({ nullable: true })
  name?: string;
}
