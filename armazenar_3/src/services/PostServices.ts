import { Prisma, PrismaClient } from "@prisma/client";
import UserServices from "./UserServices";

const prisma = new PrismaClient();

class PostServices{
    constructor(){

    }

    async findPost(id?: string){
        try{
            if(id){
                const post = await prisma.post.findUnique({
                    where: {id}
                })
                return post;
            }
            else{
                const posts = await prisma.post.findMany();
            }
        //Gerencia erros que podem dar
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async createPost(post: Prisma.PostCreateInput){
        try{
            const newpost = await prisma.post.create({
                data: post
            });
            return newpost;
        }catch(error){
            console.log(error);
            return null;
        }
    }

    async updatePost(id: string, post: Prisma.PostUpdateInput){
        try{
            const updatepost = await prisma.post.update({
                where:{id},
                data: post
            });
            console.log(this.updatePost);
        }catch(error){
            console.log(error);
        return null;
        }
    }

    async deletePost(id: string){
        try{
            const deletedPost = await prisma.post.delete({
                where:{id},
            });
            return deletedPost;
        }catch(error){
            console.log(error);
            return null;
        }
    }
}

// Singleton:
export default new PostServices();