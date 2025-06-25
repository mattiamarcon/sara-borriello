"use client"

import { useTransition } from "react"
import { login } from "@/app/action"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState } from "react-dom"
import { Loader2 } from "lucide-react"

export default function LoginForm() {
  const [state, formAction] = useFormState(login, { message: "" })
  const [isPending, startTransition] = useTransition()

  // Create a wrapper function that uses useTransition
  const handleSubmit = (formData: FormData) => {
    startTransition(() => {
      formAction(formData)
    })
  }

  return (
    <form className="flex flex-col gap-6" action={handleSubmit}>
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Accedi al tuo account</h1>
        <p className="text-muted-foreground text-sm text-balance">
          Inserisci le credenziali per accedere
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-3">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="nome.cognome@gmail.com" required />
        </div>
        <div className="grid gap-3">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" name="password" type="password" placeholder="password" required />
        </div>
        <Button type="submit" className="w-full bg-second cursor-pointer" disabled={isPending}>
          {isPending ? (
            <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Accesso in corso...
            </>
            ) : (
            "Accedi"
            )}
        </Button>
        {state.message && <div className="text-red-500">{state.message}</div>}
        </div>
    </form>
  )
}

//  <form className="flex flex-col gap-6" action={handleSubmit}>
//       <div className="flex flex-col items-center gap-2 text-center">
//         <h1 className="text-2xl font-bold">Accedi al tuo account</h1>
//         <p className="text-muted-foreground text-sm text-balance">
//           Inserisci le credenziali per accedere
//         </p>
//       </div>
//       <div className="grid gap-6">
//         <div className="grid gap-3">
//           <Label htmlFor="email">Email</Label>
//           <Input id="email" type="email" placeholder="m@example.com" required />
//         </div>
//         <div className="grid gap-3">
//           <div className="flex items-center">
//             <Label htmlFor="password">Password</Label>
//           </div>
//           <Input id="password" type="password" required />
//         </div>
//         <Button type="submit" className="w-full">
//           Login
//         </Button>
//         {state.message && <div className="text-red-500">{state.message}</div>}
//         </div>
//     </form>
