import Link from "next/link"

export default function ReviewLink() {
  return (
    <div className=" rounded-lg my-16 p-4 w-fit mx-auto text-center">
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-first text-3xl font-bold">Hai provato i nostri servizi?</h3>
        <p className="text-lg text-gray-600">
          La tua opinione è importante! Condividi la tua esperienza con altri clienti.
        </p>
        <Link
          href="/lascia-recensione"
          className="inline-flex items-center p-3 my-5 text-xl bg-first text-white rounded-md hover:bg-second transition-colors"
        >
          Lascia una Recensione
        </Link>
      </div>
    </div>
  )
}