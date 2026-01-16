"use client"

import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import Image from "next/image"
import heroImage from "@/public/modern-mobile-app-interface-showing-apps-games-mov.jpg"

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-20"
      aria-label="Главный экран"
    >
      <div
        className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/5 to-accent/5"
        aria-hidden="true"
      />

      <div className="absolute inset-0 opacity-30" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
          <div className="space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
              <Sparkles className="w-4 h-4" aria-hidden="true" />
              Скоро запуск платформы
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance leading-tight">
              Запутались в отзывах?{" "}
              <span className="bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Мы сводим всё воедино
              </span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-2xl">
              Контур — это единая платформа с рейтингами, отзывами и умными рекомендациями по всему цифровому контенту.
              Экономьте время, находите лучшее.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-4">
              <Button
                size="lg"
                variant="outline"
                className="text-base bg-transparent"
                onClick={() => scrollToSection("problem")}
                aria-label="Узнать больше о платформе"
              >
                Узнать больше
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Эффект градиентной подсветки вокруг */}
            <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/30 rounded-3xl blur-xl opacity-70" />

            {/* Контейнер с эффектом стекла */}
            <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-gradient-to-br from-gray-900/80 to-gray-950/80 backdrop-blur-sm shadow-2xl">
              {/* Градиентная рамка сверху */}
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-primary via-secondary to-accent" />

              {/* Сама картинка с улучшенными эффектами */}
              <div className="relative overflow-hidden group">
                <Image
                  src={heroImage || "/placeholder.svg"}
                  alt="Интерфейс приложения Рейти с рейтингами приложений, игр и фильмов на мобильном устройстве"
                  width={800}
                  height={600}
                  priority
                  className="w-full h-auto transform group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Наложение градиента поверх картинки */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />

                {/* Блестящий эффект при наведении */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
