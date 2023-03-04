import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number;
  name: string;
  @Field(() => Int)
  age?: number;
  active: boolean;
}
