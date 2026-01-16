"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Sparkles, ArrowRight } from "lucide-react"
import { useState } from "react"

export function CallToAction() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Email submitted:", email)
    setSubmitted(true)
  }

  return (
    <section
      id="cta"
      className="py-24 md:py-32 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/10 relative overflow-hidden"
    >
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      </div>

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 md:p-16 rounded-3xl border-2 border-border bg-background/95 backdrop-blur-sm shadow-2xl space-y-10">
            <div className="text-center space-y-6">
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">
                <Sparkles className="w-5 h-5" />
                Ранний доступ к платформе
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
                Цифровой мир станет{" "}
                <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  понятнее
                </span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl mx-auto">
                Первыми узнайте о запуске и получите ранний доступ к бета-версии Контур.
              </p>
            </div>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-primary/10 border-2 border-primary/20">
                <p className="text-xl font-semibold text-primary text-center">✓ Спасибо! Мы сообщим вам о запуске.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Input
                    type="email"
                    placeholder="Введите ваш email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="flex-1 h-14 text-base px-6 rounded-xl"
                  />
                  <Button
                    type="submit"
                    size="lg"
                    className="h-14 px-8 text-base gap-2 rounded-xl shadow-lg shadow-primary/25"
                  >
                    Сообщить мне о запуске
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground text-center">
                  Без спама. Только важные новости о запуске проекта.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
