import { prisma } from "@/lib/prisma";
import { Prisma } from "@prisma/client";

export const getLatesPots = async (userId?: string) => await prisma.post.findMany({
    where:{
      parentId:null
    },
    take:20,
    orderBy:{
        createdAt:'desc'
    },
    select:{
      id:true,
      content:true,
      createdAt:true,
      user:{
        select:{
          image:true,
          username:true,
          id:true,
          name:true
        }
      },
      likes:{
        select:{
          userid:true
        },
        where:{
          userid:userId ?? "error"
        }
      },
      _count:{
        select:{
          likes:true,
          replies:true
        }
      }
    }
  });

  export type PostHome = Prisma.PromiseReturnType<typeof getLatesPots>[number]