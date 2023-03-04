import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  name: string;
  @Field(() => Int)
  age?: number;
  active: boolean;
}
