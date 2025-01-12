import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLInt },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
  },
});

const userQueries = {
  users: {
    type: new GraphQLList(UserType),
    resolve: async () => {
      return prisma.user.findMany();
    },
  },
};

export default userQueries;
