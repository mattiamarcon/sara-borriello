"use server"
import { createClient} from "@/utils/supabase/client"

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