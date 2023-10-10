import { getAuthSession } from "@/lib/auth"

export default async function Home() {
  const session  = await getAuthSession();
  
  return (
   <div>
    <p>{JSON.stringify(session, null, 2)}</p>
    Home</div>
  )
}
