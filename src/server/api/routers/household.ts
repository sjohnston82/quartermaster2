import { z } from "zod";


import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";



export const householdRouter = createTRPCRouter({
  //   create: protectedProcedure
  //     .input(
  //       z.object({
  //         name: z.string(),
  //         members: z.object({ name: z.string(), email: z.string() }),
  //       })
  //     )
  //     .mutation(({ ctx, input }) => {
  //       return ctx.prisma.household.create({
  //         data: {
  //           name: input.name,
  //           members: input.members
  //         },
  //       });
  //     }),
  create: protectedProcedure
    .input(z.string())
    .mutation(async ({ ctx, input }) => {
      const userId = ctx.session.user.id;

      return ctx.prisma.household.create({
        data: {
          name: input,
          members: {
            connect: { id: userId }, // set the table join
          },
        },
        include: {
          members: true, // join the household and members in the return
        },
      });
    }),
  getUser: protectedProcedure.query(({ ctx }) => {
    const userId = ctx.session.user.id;

    return ctx.prisma.user.findUnique({
      where: { id: userId },
      include: { household: true }, // include household. Note this object won't include members or invitedList as we need to explicitly join those also
    });
  }),
});
