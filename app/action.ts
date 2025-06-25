"use server"
import { createClient} from "@/utils/supabase/client"
import { createSupabaseServer } from '@/utils/supabase/server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export interface recensione{
    nome:string,
    cognome:string,
    email:string,
    descrizione:string,
    clienteDa:string,
}

export type FormState={
  message?:string
}

export async function inserimentoRecensione(state:FormState,rec:recensione){
    const db=createClient();

    const {error}= await db.from("Recensioni").insert(rec);

    if (error) {
        return {message:"Errore imprevisto"}
    }

    return {message:"Inserimento avvenuto con successo"}
}

export async function login(state:FormState,formData:FormData) {
  const supabase = await createSupabaseServer();

  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }


  const { error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    return {message:"Credenziali errate"}
  }
  

  revalidatePath('/')
  redirect("/")
  
}