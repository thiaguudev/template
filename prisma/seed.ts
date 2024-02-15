import { Plan, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const plans = [
    {
      name: "Starter",
      country: "en",
      priceId: "price_1OeiErKFxdF5l7Kyp5Fwo80l",
    },
    {
      name: "Plus",
      country: "en",
      priceId: "price_1OeiFgKFxdF5l7Ky49c1c1gM",
    },
    {
      name: "Business",
      country: "en",
      priceId: "price_1OeiG0KFxdF5l7KyG8iihEcK",
    },
  ] as Plan[];

  for (let plan of plans) {
    await prisma.plan.upsert({
      where: { name: plan.name },
      create: plan,
      update: {},
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
