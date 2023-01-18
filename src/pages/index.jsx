import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href='/users'><h1>USERS</h1></Link>
      <Link href='/posts'><h1>POSTS</h1></Link>
    </>
  )
}
