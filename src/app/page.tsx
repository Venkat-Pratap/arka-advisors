import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div><Image src="/logo-dark.png" alt="Arka Logo" width={172} height={16} /></div>
      <div className="mt-2">Test page</div>
</main>
)
}
