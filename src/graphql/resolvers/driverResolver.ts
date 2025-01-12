import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const DriverType = new GraphQLObjectType({
  name: "Driver",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

const driverQueries = {
  drivers: {
    type: new GraphQLList(DriverType),
    resolve: async () => {
      return prisma.driver.findMany();
    },
  },
};

export default driverQueries;
