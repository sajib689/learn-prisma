import { prisma } from "./lib/prisma";

async function main() {
  const user = await prisma.user.upsert({
    where: {
      email: "john.doe@example.com",
    },
    update: {
      name: "Jane Doe",
      profilePhoto: "https://example.com/profile-photo.jpg",
    },
    create: {
      name: "John Doe",
      email: "john.doe@example.com",
      profilePhoto: "https://example.com/profile-photo.jpg",
    },
  });
  console.log("Upserted user:", user);

  const allUsers = await prisma.user.findMany();

    console.log("All users:", JSON.stringify(allUsers, null, 2));
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
