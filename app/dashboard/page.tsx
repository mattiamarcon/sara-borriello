"use client"

import { useEffect, useState } from "react"
import { Users, Eye, Globe, Monitor, Smartphone, Clock, MessageSquare } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Trash2 } from "lucide-react"
import { DashboardSkeleton } from "../components/skeletonStats"
import { useRouter } from "next/navigation"
import { createClient } from "@/utils/supabase/client"


interface webSiteData{
  activeUsers:number,
  stats:{
    visits:{
      value:number
    },
    visitors:{
      value:number
    }
    totaltime:{
      value:number
    }
  }
  countries:stats[],
  operatingSystems:stats[],
  devices:stats[],
  browsers:stats[],
  sessionDuration:number,
}

interface stats{
  x:string,
  y:number,
  percentage:number,
}

interface Review {
  id: number
  author: string
  email: string
  comment: string
}

export default function Dashboard() {

  const db=createClient();

  const [data, setData] = useState<webSiteData>();
  const [activeUsers,setActiveUsers]=useState(0);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState("7")
  const [reviews, setReviews] = useState<Review[]>([])
  const [expandedReviews, setExpandedReviews] = useState<Set<number>>(new Set())

  const router= useRouter();

  useEffect(()=>{

    setLoading(true);

    async function getData(){

      const res=await fetch(`api/analytics?days=${timeRange}`);
      const stats=await res.json();

      console.log(stats)

      setData(stats);

      setLoading(false)
    }

    async function getActiveUsers(){
      const res=await fetch('api/activeUsers');
      const active=await res.json();

      setActiveUsers(active)
    }

    getData();
    getActiveUsers();
  },[timeRange]);

  useEffect(()=>{
    function setPercentage(){

      calcPercentageOS();
      calcPercentageDevices();
      calcPercentageBrowsers();
      calcPercentageCountries();

    }  
 
    setPercentage();
    router.refresh();
  },[data]);

 useEffect(() => {
  async function getRecensioni() {
    const { data } = await db.from("Recensioni").select("*");

    if (data) {
      const nuoveTestimonianze = data.map(rec => ({
        id: rec.id as number,
        author: rec.nome + " " + rec.cognome,
        email: rec.email as string,
        comment: rec.descrizione as string,
      }));



      setReviews(nuoveTestimonianze);
    }
  }

  getRecensioni();
  
}, []);


  function calcPercentageOS(){

    if(data){
      const os=data.operatingSystems;
      let SumC=0;

      os.forEach(c=>{
        SumC+=c.y;
      })
 

      data.operatingSystems.forEach(c=>{
        c.percentage=(c.y/SumC)*100;
      })
    }
  }

  function calcPercentageDevices(){

    if(data){
      const devices=data.devices;
      let SumC=0;

      devices.forEach(c=>{
        SumC+=c.y;
      })

      data.devices.forEach(c=>{
        c.percentage=(c.y/SumC)*100;
      })
    }

  }

  function calcPercentageBrowsers(){

    if(data){
      const browsers=data.browsers;
      let SumC=0;

      browsers.forEach(c=>{
        SumC+=c.y;
      })

      data.browsers.forEach(c=>{
        c.percentage=(c.y/SumC)*100;
      })
    }
  }

  function calcPercentageCountries(){
 
    if(data){
      const countries=data.countries;
      let SumC=0;

      countries.forEach(c=>{
        SumC+=c.y;
      })

      data.countries.forEach(c=>{
        c.percentage=(c.y/SumC)*100;
      })
    }
  }

  const handleDeleteReview =  async (reviewId: number) => {
     await db.from("Recensioni").delete().eq("id",reviewId);
     const updatedReviews = reviews.filter((review) => review.id !== reviewId)
    setReviews(updatedReviews);
  }

 const toggleReviewExpansion = (reviewId: number) => {
    const newExpanded = new Set(expandedReviews)
    if (newExpanded.has(reviewId)) {
      newExpanded.delete(reviewId)
    } else {
      newExpanded.add(reviewId)
    }
    setExpandedReviews(newExpanded)
  }


  if(loading){
    return ( <DashboardSkeleton />)
  }


    if(data){
      return (
      <div className="min-h-screen bg-gray-50 mt-20">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
              </div>
              <div className="flex items-center space-x-4">
                <Select value={timeRange} onValueChange={setTimeRange}>
                  <SelectTrigger className="w-32">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem className="bg-white" value="1">24 ore</SelectItem>
                    <SelectItem className="bg-white" value="7">7 giorni</SelectItem>
                    <SelectItem className="bg-white" value="30">30 giorni</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Tabs defaultValue="analytics" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="reviews">Recensioni</TabsTrigger>
            </TabsList>

            <TabsContent value="analytics" className="space-y-6">
              {/* Metriche principali */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">Utenti Attivi</CardTitle>
                    <Users className="h-4 w-4 text-green-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{activeUsers}</div>
                    <p className="text-xs text-muted-foreground">
                      <span className="inline-flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-1 animate-pulse"></span>
                        Online ora
                      </span>
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                    <CardTitle className="text-sm font-medium">
                      {
                        timeRange=="1"?"Visitatori ultime 24h":
                        timeRange=="7"?"Visitatori ultimi 7 giorni":
                        timeRange=="30"?"Visitatori ultimi 30 giorni":""
                      }
                      </CardTitle>
                    <Eye className="h-4 w-4 text-blue-600" />
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{data.stats.visitors.value}</div>
                  </CardContent>
                </Card>
              </div>

              {/* Grafici e statistiche dettagliate */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Paesi */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      Paesi
                    </CardTitle>
                    <CardDescription>Visitatori per paese</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {data.countries.map((country, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-5 bg-gray-200 rounded-sm flex items-center justify-center text-xs">
                            {country.x.slice(0, 2).toUpperCase()}
                          </div>
                          <span className="text-sm font-medium">{country.x}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-blue-600 h-2 rounded-full"
                              style={{ width: `${country.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground w-12 text-right">{country.y}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Sistemi Operativi */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Monitor className="h-5 w-5 mr-2" />
                      Sistemi Operativi
                    </CardTitle>
                    <CardDescription>Distribuzione per OS</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {data.operatingSystems.map((os, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{os.x}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div className="bg-green-600 h-2 rounded-full" style={{ width: `${os.percentage}%` }}></div>
                          </div>
                          <span className="text-sm text-muted-foreground w-12 text-right">{os.y}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Dispositivi */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Smartphone className="h-5 w-5 mr-2" />
                      Dispositivi
                    </CardTitle>
                    <CardDescription>Tipo di dispositivo utilizzato</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {data.devices.map((device, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{device.x}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-purple-600 h-2 rounded-full"
                              style={{ width: `${device.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground w-12 text-right">{device.y}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Browser */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Globe className="h-5 w-5 mr-2" />
                      Browser
                    </CardTitle>
                    <CardDescription>Browser più utilizzati</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {data.browsers.map((browser, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm font-medium">{browser.x}</span>
                        <div className="flex items-center space-x-2">
                          <div className="w-20 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-orange-600 h-2 rounded-full"
                              style={{ width: `${browser.percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-sm text-muted-foreground w-12 text-right">{browser.y}</span>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>

              {/* Durata delle sessioni */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Durata delle Sessioni
                  </CardTitle>
                  <CardDescription>
                    Tempo medio di permanenza: <strong>{(data.stats.totaltime.value/data.stats.visits.value).toFixed(1)} secondi</strong>
                  </CardDescription>
                </CardHeader>
                
              </Card>
            </TabsContent>

            <TabsContent value="reviews" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Gestione Recensioni
                </CardTitle>
                <CardDescription>
                  Visualizza e gestisci le recensioni del tuo sito. Clicca su una riga per leggere il commento completo.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Autore</TableHead>
                      <TableHead>Commento</TableHead>
                      <TableHead>Azioni</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {reviews.map((review) => (
                      <>
                        <TableRow
                          key={review.id}
                          className="hover:bg-muted/50 transition-colors"
                          onClick={() => toggleReviewExpansion(review.id)}
                        >
                          <TableCell>
                            <div>
                              <div className="font-medium">{review.author}</div>
                              <div className="text-sm text-gray-700">{review.email}</div>
                            </div>
                          </TableCell>
                          <TableCell className="max-w-xs">
                            <p className="truncate">{review.comment}</p>
                            {review.comment.length > 50 && (
                              <span className="text-xs text-green-700 mt-1 block">
                                {expandedReviews.has(review.id) ? "Clicca per comprimere" : "Clicca per leggere tutto"}
                              </span>
                            )}
                          </TableCell>
                          <TableCell onClick={(e) => e.stopPropagation()}>
                            <AlertDialog>
                              <AlertDialogTrigger asChild>
                                <Button variant="outline" size="sm" className="text-red-600 hover:text-red-700 cursor-pointer">
                                  <Trash2 className="h-4 w-4" />
                                </Button>
                              </AlertDialogTrigger>
                              <AlertDialogContent className="bg-white text-black">
                                <AlertDialogHeader>
                                  <AlertDialogTitle>Elimina recensione</AlertDialogTitle>
                                  <AlertDialogDescription>
                                    Sei sicuro di voler eliminare questa recensione di {review.author}? Questa azione
                                    non può essere annullata.
                                  </AlertDialogDescription>
                                </AlertDialogHeader>
                                <AlertDialogFooter>
                                  <AlertDialogCancel>Annulla</AlertDialogCancel>
                                  <AlertDialogAction
                                    onClick={() => handleDeleteReview(review.id)}
                                    className="bg-red-600 hover:bg-red-700 text-white"
                                  >
                                    Elimina
                                  </AlertDialogAction>
                                </AlertDialogFooter>
                              </AlertDialogContent>
                            </AlertDialog>
                          </TableCell>
                        </TableRow>
                        {expandedReviews.has(review.id) && (
                          <TableRow key={`${review.id}-expanded`}>
                            <TableCell colSpan={4} className="bg-muted/30 border-t-0">
                              <div className="py-4 px-2">
                                <div className="flex items-start justify-between mb-3">
                                  <h4 className="font-semibold text-sm text-muted-foreground">Commento completo:</h4>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-border">
                                  <p className="text-sm leading-relaxed whitespace-pre-wrap">{review.comment}</p>
                                </div>
                                <div className="mt-3 flex items-center justify-between">
                                  <div className="flex items-center space-x-2">
                                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                                      <span className="text-xs font-medium text-primary">
                                        {review.author
                                          .split(" ")
                                          .map((n) => n[0])
                                          .join("")
                                          .toUpperCase()}
                                      </span>
                                    </div>
                                    <div>
                                      <p className="text-sm font-medium">{review.author}</p>
                                      <p className="text-xs text-muted-foreground">{review.email}</p>
                                    </div>
                                  </div>
                                  <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={() => toggleReviewExpansion(review.id)}
                                    className="text-xs"
                                  >
                                    Comprimi
                                  </Button>
                                </div>
                              </div>
                            </TableCell>
                          </TableRow>
                        )}
                      </>
                    ))}
                  </TableBody>
                </Table>
                {reviews.length === 0 && (
                  <div className="text-center py-8">
                    <MessageSquare className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-muted-foreground mb-2">Nessuna recensione</h3>
                    <p className="text-sm text-muted-foreground">Non ci sono ancora recensioni da visualizzare.</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        </div>
      </div>
    )
  }

}
