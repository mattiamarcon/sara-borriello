"use server"
import { createClient} from "@/utils/supabase/client"

export interface recensione{
    nome:string,
    cognome:string,
    email:string,
    descrizione:string,
    clienteDa:string,
}

export async function inserimentoRecensione(rec:recensione){
    const db=createClient();

    const {error}= await db.from("Recensioni").insert(rec);

    console.log(error)
}