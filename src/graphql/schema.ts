import { GraphQLObjectType, GraphQLSchema } from "graphql";
import userQueries from "./resolvers/userResolver";
import driverQueries from "./resolvers/driverResolver";
import rideQueries from "./resolvers/rideResolver";

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    ...userQueries,
    ...driverQueries,
    ...rideQueries,
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

export default schema;
