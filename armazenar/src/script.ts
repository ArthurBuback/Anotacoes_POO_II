import { PrismaClient } from '@prisma/client'
import UserService from './services/UserServices'

const prisma = new PrismaClient()

async function main() {
  UserService.createUser({email: 'otaviolube@gmail.com'});
  // console.log(await UserService.findUsers());
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