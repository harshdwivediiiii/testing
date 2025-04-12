"use client"
import cover from "../public/cover.jpg"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import { FC } from "react"

const HeroSection: FC = () => {
  return (
    <section className="w-full bg-background py-16 px-4 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground mb-6">
            Empowering Women's Safety Through Technology & Community
          </h1>
          <p className="text-lg text-muted-foreground mb-8">
            Aarya is an AI-powered platform that detects threats in real-time, connects women with trusted volunteers, and maps unsafe zones—ensuring help is always near.
          </p>
          <div className="flex gap-4 flex-wrap">
            <Link href="/get-started">
              <Button size="lg">Get Started</Button>
            </Link>
            <Link href="/how-it-works">
              <Button size="lg" variant="outline">
                How It Works
              </Button>
            </Link>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9 }}
          className="flex justify-center"
        >
          <Image
            src={cover} 
            alt="Women Safety Illustration"
            width={500}
            height={500}
            className="rounded-xl shadow-md dark:shadow-white/10"
            priority
          />
        </motion.div>
      </div>
    </section>
  )
}

export default HeroSection
