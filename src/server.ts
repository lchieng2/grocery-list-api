import "reflect-metadata";
import { ApolloServer } from 'apollo-server-fastify';
import fastify from 'fastify';
import { GroceryListResolver } from './graphql/resolvers/groceryListResolvers';
import { buildSchema } from "type-graphql";





const app = fastify();


(async function () {
    const schema = await buildSchema({
      resolvers: [GroceryListResolver],
      
    });
    const server = new ApolloServer({
      schema
    });
    await server.start();
    app.register(server.createHandler());
    await app.listen(3000);
  })();