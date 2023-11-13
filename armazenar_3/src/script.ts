import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  // Aqui escrevemos os comandos para preencher e esvaziar o Banco de Dados
  const newuser = await prisma.user.create({
    data: {
        email: "otaviolube@gmail.com",
        name: "otavio lube"
    }
  })
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })