import ReviewForm from "./review-form"

export default function ReviewLink() {
  return (
    <div className=" rounded-lg my-16 p-4 w-fit mx-auto text-center ">
      <div className="flex flex-col items-center space-y-3">
        <h3 className="text-first text-4xl font-bold">Hai provato i nostri servizi?</h3>
        <p className="text-lg text-gray-600">
          La tua opinione è importante! Condividi la tua esperienza con altri clienti.
        </p>
        <ReviewForm />
      </div>
    </div>
  )
}