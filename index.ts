import { prisma } from "./lib/prisma";

async function main() {
  const users = await prisma.user.update({
    where: {
      id: 4,
    },
    data: {
      name: "Sajib",
    },
  });
  console.log(users);
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
