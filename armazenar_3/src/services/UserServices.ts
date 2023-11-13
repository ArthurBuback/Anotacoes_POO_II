import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

class UserService{
    constructor(){}

    // Se não me engano ele colocou outro nome ou outra função totalmente nova no lugar desse "createUser"; porém não tenho anotado.
    // Esses são "Métodos"
    async createUser(user: Prisma.UserCreateInput){
        try{
            const newuser = await prisma.user.create({
                data: user
            });
            return newuser;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async findUsers(id: string | undefined){
        try{
            if(id){
                const user = await prisma.user.findUnique({
                    where: {
                        id
                    }
                })
                return user;
            }else{
                const users = await prisma.user.findMany();
                return users;
            }
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updateUsers(id: string, newData: Prisma.UserCreateInput){
        try{
            const UserUpdated = await prisma.user.update({
                where: {
                    id
                }, data: {
                    email: newData.email,
                    name: newData.name,
                }
            });
            return UserUpdated;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async deleteUser(id: string){
        try{
            if(!id){
                return console.log("Um id é necessário para deletar um usuário");
            }
            await prisma.user.delete({where: {id}});
            return "ok";
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

export default new UserService();