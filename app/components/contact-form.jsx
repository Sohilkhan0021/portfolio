"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { submitContactForm } from "../actions"

export default function ContactForm() {
  const [pending, setPending] = useState(false)
  const [message, setMessage] = useState("")

  async function handleSubmit(event) {
    event.preventDefault()
    setPending(true)
    setMessage("")

    const formData = new FormData(event.target)
    try {
      const response = await submitContactForm(formData)
      setMessage(response.message)
      event.target.reset()
    } catch (error) {
      setMessage("Something went wrong. Please try again.")
    } finally {
      setPending(false)
    }
  }

  return (
    <Card className="p-6 border border-border/40 shadow-sm">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2">
            Name
          </label>
          <Input
            id="name"
            name="name"
            required
            className="border-border/40 focus:border-primary"
            placeholder="Your name"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2">
            Email
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="border-border/40 focus:border-primary"
            placeholder="your.email@example.com"
          />
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-medium mb-2">
            Contact No.
          </label>
          <Input
            id="contact"
            name="contact"
            type="tel"
            required
            className="border-border/40 focus:border-primary"
            placeholder="+91 12345 67890"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2">
            Message
          </label>
          <Textarea
            id="message"
            name="message"
            required
            className="min-h-[120px] border-border/40 focus:border-primary"
            placeholder="Your message here..."
          />
        </div>
        <Button type="submit" className="w-full transition-all" disabled={pending}>
          {pending ? "Sending..." : "Send Message"}
        </Button>
        {message && (
          <div
            className={`text-sm text-center mt-4 p-3 rounded-md ${message.includes("Thanks") ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"}`}
          >
            {message}
          </div>
        )}
      </form>
    </Card>
  )
}

