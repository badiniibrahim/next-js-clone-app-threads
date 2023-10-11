import { getAuthSession } from "@/lib/auth"
import { prisma } from "@/lib/prisma";
import Post from "@/src/features/post/Post";
import { getLatesPots } from "@/src/query/post.query";

export default async function Home() {
  const session  = await getAuthSession();

  const posts = await getLatesPots()
  
  return (
   <div>
    {posts.map((p)=>(
      <Post post={p} key={p.id}/>
    ))}
    </div>
  )
}
