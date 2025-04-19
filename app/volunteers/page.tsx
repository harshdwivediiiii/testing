"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"
import { CheckCircle, Clock, MapPin, UserPlus } from "lucide-react"

export default function VolunteersPage() {
  const [name, setName] = useState("")
  const [location, setLocation] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const volunteers = [
    { name: "Sanya Verma", location: "Delhi", verified: true },
    { name: "Ankit Rawat", location: "Noida", verified: false },
    { name: "Ritika Sharma", location: "Mumbai", verified: true },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && location) {
      setSubmitted(true)
      setName("")
      setLocation("")
    }
  }

  return (
    <div className="min-h-screen bg-background text-foreground py-16 px-4 md:px-12 space-y-24">
      
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold text-primary">
          Join the Aaraya Volunteer Network
        </h1>
        <p className="text-muted-foreground text-lg">
          Empower your community by standing up for safety. Verified volunteers respond to real-time alerts and offer on-ground support when it matters most.
        </p>
      </section>

      
      <section className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            icon: <UserPlus size={32} className="text-primary mb-2" />,
            title: "Sign Up Securely",
            desc: "Your information is safe and encrypted. Register in under a minute.",
          },
          {
            icon: <Clock size={32} className="text-primary mb-2" />,
            title: "Verification Process",
            desc: "Our team will review and approve your profile to ensure community trust.",
          },
          {
            icon: <CheckCircle size={32} className="text-primary mb-2" />,
            title: "Receive & Respond to Alerts",
            desc: "Get SOS notifications based on your location and respond if nearby.",
          },
        ].map((item, i) => (
          <div
            key={i}
            className="bg-muted p-6 rounded-2xl shadow-sm text-center hover:shadow-md transition"
          >
            {item.icon}
            <h3 className="font-semibold text-lg mb-1">{item.title}</h3>
            <p className="text-sm text-muted-foreground">{item.desc}</p>
          </div>
        ))}
      </section>

    
      <section className="max-w-xl mx-auto bg-muted p-8 rounded-2xl shadow space-y-6">
        <h2 className="text-2xl font-semibold text-center">Become a Volunteer</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Input
            placeholder="City or Area"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
          <Button type="submit" className="w-full">
            Submit & Request Verification
          </Button>
        </form>
        {submitted && (
          <p className="text-green-600 text-sm text-center pt-2">
            ✅ Thank you! Your registration is received. We’ll verify you shortly.
          </p>
        )}
      </section>

      
      <section className="max-w-6xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold text-center">Verified Volunteers</h2>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {volunteers.map((v, i) => (
            <Card
              key={i}
              className="p-5 rounded-2xl border bg-card shadow-sm hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold mb-1">{v.name}</h3>
              <p className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                <MapPin size={14} /> {v.location}
              </p>
              <div
                className={`flex items-center gap-2 text-sm font-medium ${
                  v.verified ? "text-green-600" : "text-yellow-500"
                }`}
              >
                {v.verified ? <CheckCircle size={16} /> : <Clock size={16} />}
                {v.verified ? "Verified Volunteer" : "Pending Verification"}
              </div>
            </Card>
          ))}
        </div>
      </section>

      
      <section className="text-center max-w-2xl mx-auto space-y-3">
        <h2 className="text-2xl font-semibold">
          Every alert needs a hero. Will you be there?
        </h2>
        <p className="text-muted-foreground">
          Aaraya isn’t just an app — it’s a community. Help someone feel safe today by becoming part of the change.
        </p>
      </section>
    </div>
  )
}
