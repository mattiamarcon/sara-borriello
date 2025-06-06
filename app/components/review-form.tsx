"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { AlertCircle, CheckCircle } from "lucide-react"
import { inserimentoRecensione, recensione } from "../action"
import { toast } from "sonner"

export default function Component() {
  const [formData, setFormData] = useState({
    nome: "",
    cognome: "",
    email: "",
    descrizione: "",
    clienteDa: "",
    consenso: false,
  })

  const [errors, setErrors] = useState<string[]>([])

  const validateForm = () => {
    const newErrors: string[] = []

    if (!formData.nome.trim()) newErrors.push("Nome è obbligatorio")
    if (!formData.cognome.trim()) newErrors.push("Cognome è obbligatorio")
    if (!formData.email.trim()) newErrors.push("Email è obbligatoria")
    if (!formData.email.includes("@") && formData.email.trim()) newErrors.push("Email non valida")
    if (!formData.descrizione.trim()) newErrors.push("Descrizione è obbligatoria")
    if (!formData.clienteDa) newErrors.push("Tipo recensione è obbligatorio")
    if (!formData.consenso) newErrors.push("È necessario accettare il consenso per procedere")

    setErrors(newErrors)
    return newErrors.length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      const recensione:recensione={
        nome:formData.nome,
        cognome:formData.cognome,
        email:formData.email,
        descrizione:formData.descrizione,
        clienteDa:formData.clienteDa,
      };
      inserimentoRecensione(recensione)
      toast("Grazie! La tua recensione è stata inviata con successo.", {
        duration: 3000,
      })

      setFormData({
        nome: "",
        cognome: "",
        email: "",
        descrizione: "",
        clienteDa: "",
        consenso: false,
      })

    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))

    if (errors.length > 0) {
      setErrors([])
    }
  }

  return (
    <div className="min-h-screen bg-whiteLogo py-12 px-4 pt-20">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Lascia una Recensione</h1>
          <p className="text-gray-600">Condividi la tua esperienza con noi. Tutti i campi sono obbligatori.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-sm border">
          {errors.length > 0 && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <ul className="list-disc list-inside space-y-1">
                  {errors.map((error, index) => (
                    <li key={index}>{error}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="nome" className="text-sm font-medium text-gray-700">
                Nome *
              </Label>
              <Input
                id="nome"
                value={formData.nome}
                onChange={(e) => handleInputChange("nome", e.target.value)}
                placeholder="Inserisci il tuo nome"
                className={`${
                  errors.some((e) => e.includes("Nome")) ? "border-red-500" : "border-gray-300"
                } focus:border-first focus:ring-first`}
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="cognome" className="text-sm font-medium text-gray-700">
                Cognome *
              </Label>
              <Input
                id="cognome"
                value={formData.cognome}
                onChange={(e) => handleInputChange("cognome", e.target.value)}
                placeholder="Inserisci il tuo cognome"
                className={`${
                  errors.some((e) => e.includes("Cognome")) ? "border-red-500" : "border-gray-300"
                } focus:border-first focus:ring-first`}
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email *
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e.target.value)}
              placeholder="inserisci@email.com"
              className={`${
                errors.some((e) => e.includes("Email")) ? "border-red-500" : "border-gray-300"
              } focus:border-first focus:ring-first`}
            />
          </div>

           <div className="space-y-2">
            <Label htmlFor="clienteDa" className="text-sm font-medium text-gray-700">
              Periodo di allenamento con Sara
            </Label>
            <Select value={formData.clienteDa} onValueChange={(value) => handleInputChange("clienteDa", value)}>
              <SelectTrigger
                className={`${
                  errors.some((e) => e.includes("clienteDa")) ? "border-red-500" : "border-gray-300"
                } focus:border-first focus:ring-first`}
              >
                <SelectValue placeholder="Seleziona il tipo di recensione" />
              </SelectTrigger>
              <SelectContent className="bg-white border border-gray-200 shadow-md">
                <SelectItem value="1-3 Mesi">1-3 Mesi</SelectItem>
                <SelectItem value="3-6 Mesi">3-6 Mesi</SelectItem>
                <SelectItem value="6 Mesi-1 Anno">6 Mesi-1 Anno</SelectItem>
                <SelectItem value="Più di un anno">Più di un anno</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="descrizione" className="text-sm font-medium text-gray-700">
              Descrizione *
            </Label>
            <Textarea
              id="descrizione"
              value={formData.descrizione}
              onChange={(e) => handleInputChange("descrizione", e.target.value)}
              placeholder="Descrivi la tua esperienza..."
              className={`min-h-[120px] ${
                errors.some((e) => e.includes("Descrizione")) ? "border-red-500" : "border-gray-300"
              } focus:border-first focus:ring-first`}
            />
          </div>

          <div className="flex items-start space-x-3">
            <Checkbox
              id="consenso"
              checked={formData.consenso}
              onCheckedChange={(checked) => handleInputChange("consenso", checked as boolean)}
              className={`mt-1 ${errors.some((e) => e.includes("consenso")) ? "border-red-500" : ""}`}
            />
            <div className="space-y-1">
              <Label htmlFor="consenso" className="text-sm font-medium text-gray-700 cursor-pointer">
                Consenso al trattamento dei dati *
              </Label>
              <p className="text-xs text-gray-500">
                Acconsento al trattamento della mia email e alla pubblicazione della recensione sul sito web.
              </p>
            </div>
          </div>

          <Button type="submit" className="w-full bg-first hover:bg-second text-white py-3 text-lg font-medium cursor-pointer">
            Invia Recensione
          </Button>
        </form>
      </div>
    </div>
  )
}
