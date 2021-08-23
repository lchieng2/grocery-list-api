import { Field, ID, ObjectType } from 'type-graphql';
import {GroceryItem} from './groceryItem';

@ObjectType()
export class GroceryList {
    @Field(type => ID)
    id: string;
    
    @Field()
    name: string;

    @Field(type => [GroceryItem], { nullable: true })
    groceryItems?: [GroceryItem]
}