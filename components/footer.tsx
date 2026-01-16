"use client"

import { Mail } from "lucide-react"
import Image from "next/image"
import logoReyti from "@/public/logo_reyti.png"
import fondLogo from "@/public/fond_logo.png"

export function Footer() {
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
    <footer id="footer" className="py-12 border-t border-border bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Image src={logoReyti || "/placeholder.svg"} alt="Рейти логотип" width={36} height={36} />
              <span className="text-2xl font-bold text-primary">Рейти</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Универсальный помощник для выбора цифрового контента. Агрегируем отзывы и рейтинги, даём
              персонализированные рекомендации.
            </p>
            {/* Requisites moved here */}
            <div className="text-sm text-muted-foreground space-y-1 pt-4">
              <p className="font-medium text-foreground">ООО «РЭЙВ ВЗГЛЯД»</p>
              <p>ОГРН: 1252300056249</p>
              <p>Дата присвоения ОГРН: 12.11.2025</p>
              <p>ИНН: 2308303019</p>
              <p>КПП: 230801001</p>
              <p className="pt-2">Адрес:</p>
              <p>350020, Краснодарский край,</p>
              <p>г.о. город Краснодар,</p>
              <p>г. Краснодар, ул. Красная,</p>
              <p>д. 155, помещ. 1153</p>
            </div>
          </div>

          {/* Navigation */}
          <div className="space-y-4">
            <h3 className="font-semibold">Навигация</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection("hero")} className="hover:text-foreground transition-colors">
                  О проекте
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="hover:text-foreground transition-colors">
                  Преимущества
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("solution")} className="hover:text-foreground transition-colors">
                  Как работает
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Контакты</h3>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="w-4 h-4" />
              <a href="mailto:raveviews@mail.ru" className="text-primary hover:underline">
                raveviews@mail.ru
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <Image
              src={fondLogo || "/placeholder.svg"}
              alt="Фонд содействия инновациям"
              width={200}
              height={80}
              className="object-contain"
            />
            <p className="text-sm text-muted-foreground leading-relaxed">
              Проект реализован при поддержке Фонда содействия инновациям в рамках программы «Студенческий стартап»
              мероприятия «Платформа университетского технологического предпринимательства» федерального проекта
              «Технологии»
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} Рейти. Все права защищены.
        </div>
      </div>
    </footer>
  )
}
