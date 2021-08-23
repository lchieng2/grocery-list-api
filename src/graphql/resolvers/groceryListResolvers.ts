import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { GroceryListService } from "../../services/groceryListService";
import { GroceryList } from "../types/groceryList";

@Resolver()
export class GroceryListResolver {

    private service = new GroceryListService();


    @Mutation(returns => GroceryList)
    addList(
      @Arg("name") name: string
    ): GroceryList {
      return this.service.addListToStore(name);
    }

    @Query(() => [GroceryList])
    allGroceryLists() {
        return this.service.getAllLists();
    }

    @Query(() => GroceryList)
    getListByID(
        @Arg("ID") ID: string
    ) {
        return this.service.getListByID(ID);
    }
}