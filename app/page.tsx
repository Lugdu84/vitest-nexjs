import Counter from '@/components/counter'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center gap-3 p-24">
      <Link href={"/"}>
        <Button variant={"ghost"}>Home Page</Button>
      </Link>
      <Link href={"/counter"}>
        <Button variant={"ghost"}>Counter Page</Button>
      </Link>
    </main>
  )
}
