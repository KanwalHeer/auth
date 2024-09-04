
import Link from "next/link"
export default function Dashboard() {
  return (
    <div className="flex flex-col p-8 items-center">
      <h1 className="text-2xl font-extrabold">dashboard</h1>
      <Link href={'/register'}><h1 className="text-xl font-bold">logout</h1></Link>
    </div>
  )
}