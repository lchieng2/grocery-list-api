import { Field, ID, ObjectType } from 'type-graphql';

@ObjectType()
export class GroceryItem {
    @Field(type => ID)
    id: string;
    
    @Field()
    name: string;

    @Field()
    price: number;

    @Field()
    description: string;
}