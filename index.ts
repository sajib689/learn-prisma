import { prisma } from "./lib/prisma";

async function main() {
  const result = await prisma.user.create({
    data: {
      name: "Sajib",
      email: "sajibbabu751@gmail.com",
    },
  });
  console.log(result);
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
