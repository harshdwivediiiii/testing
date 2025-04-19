"use client"
import { useState } from "react"
import { MapPin, CheckCircle, PlusCircle } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function SafeZonePage() {
  const safeZones = [
    {
      name: "Cafe Aashray",
      address: "Sector 18, Noida",
      type: "Café",
      verified: true,
    },
    {
      name: "HDFC Bank",
      address: "Connaught Place, Delhi",
      type: "Bank",
      verified: true,
    },
    {
      name: "Mom's General Store",
      address: "Lajpat Nagar, Delhi",
      type: "Store",
      verified: false,
    },
  ]

  const [suggestName, setSuggestName] = useState("")
  const [suggestLocation, setSuggestLocation] = useState("")

  const handleSuggest = (e: React.FormEvent) => {
    e.preventDefault()
    setSuggestName("")
    setSuggestLocation("")
    alert("Thank you! We’ll review your suggestion.")
  }

  return (
    <div className="min-h-screen bg-background text-foreground px-4 md:px-12 py-16 space-y-16">
     
      <section className="text-center space-y-4 max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-primary">Safe Zones Near You</h1>
        <p className="text-muted-foreground text-lg">
          These verified locations are part of Aaraya’s Safe Network. You can walk in and request help anytime.
        </p>
      </section>

      
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {safeZones.map((zone, i) => (
          <Card key={i} className="p-5 rounded-xl bg-card shadow-sm hover:shadow-md transition">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold">{zone.name}</h3>
              <p className="text-sm flex items-center gap-2 text-muted-foreground">
                <MapPin size={14} /> {zone.address}
              </p>
              <p className="text-sm font-medium">
                Type: <span className="text-primary">{zone.type}</span>
              </p>
              {zone.verified ? (
                <p className="text-green-600 flex items-center gap-1 text-sm">
                  <CheckCircle size={14} /> Verified Safe Zone
                </p>
              ) : (
                <p className="text-yellow-500 text-sm">Pending Verification</p>
              )}
            </div>
          </Card>
        ))}
      </section>

      <section className="max-w-xl mx-auto bg-muted p-6 rounded-xl shadow space-y-4">
        <h2 className="text-2xl font-semibold text-center flex items-center justify-center gap-2">
          <PlusCircle size={20} /> Suggest a New Safe Zone
        </h2>
        <form onSubmit={handleSuggest} className="space-y-4">
          <Input
            placeholder="Place Name"
            value={suggestName}
            onChange={(e) => setSuggestName(e.target.value)}
          />
          <Input
            placeholder="Location / Area"
            value={suggestLocation}
            onChange={(e) => setSuggestLocation(e.target.value)}
          />
          <Button type="submit" className="w-full">
            Submit Suggestion
          </Button>
        </form>
      </section>
    </div>
  )
}
