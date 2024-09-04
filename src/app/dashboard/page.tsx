
import Link from "next/link"
export default function Dashboard() {
  return (
    <div>
      <h1>dashboard</h1>
      <Link href={'/register'}><h1>logout</h1></Link>
      
    </div>
  )
}