import { prisma } from "./lib/prisma";

async function others() {
  //   const users = Array.from(
  //     {
  //       length: 100000,
  //     },
  //     (_, i) => ({
  //       name: `User ${i + 1}`,
  //       email: `user${i + 1}@example.com`,
  //       profilePhoto: `https://example.com/photos/user${i + 1}.jpg`,
  //     }),
  //   );
  //   // create some data
  //   const insertedUsers = await prisma.user.createMany({
  //     data: users,
  //     skipDuplicates: true,
  //   });
  //   console.log(`Inserted ${insertedUsers.count} users`);

  const users = await prisma.user.findMany({
    where: {
      email: {
        contains: "uSer82588@example.com",
        mode: "insensitive",
      },
    },
    orderBy: {
      id: "asc",
    },
  });
  console.log(users);
}

others()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
