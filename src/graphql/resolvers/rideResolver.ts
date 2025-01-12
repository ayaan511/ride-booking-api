import { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLList } from "graphql";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const RideType = new GraphQLObjectType({
  name: "Ride",
  fields: {
    id: { type: GraphQLInt },
    userId: { type: GraphQLInt },
    driverId: { type: GraphQLInt },
    status: { type: GraphQLString },
    createdAt: { type: GraphQLString },
  },
});

const rideQueries = {
  rides: {
    type: new GraphQLList(RideType),
    resolve: async () => {
      return prisma.ride.findMany();
    },
  },
};

export default rideQueries;
