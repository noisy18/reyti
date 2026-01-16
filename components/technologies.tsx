import { Lock, Zap, Shield } from "lucide-react"

export function Technologies() {
  return (
    <section id="technologies" className="py-24 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-5xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Надежная технологическая основа
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              Современный стек, безопасное хранение данных, масштабируемая архитектура. Алгоритмы
              сбора и анализа данных — наш ключевой движок.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            <div className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-500">
              <div className="p-4 w-fit rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 mb-6">
                <Zap className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Быстро</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Мгновенная загрузка и отклик благодаря оптимизированной архитектуре
              </p>
            </div>

            <div className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-500">
              <div className="p-4 w-fit rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 mb-6">
                <Shield className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Надежно</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Масштабируемая архитектура для миллионов пользователей
              </p>
            </div>

            <div className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-lg transition-all duration-500">
              <div className="p-4 w-fit rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 mb-6">
                <Lock className="w-10 h-10" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Безопасно</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Надежная защита ваших данных и конфиденциальности
              </p>
            </div>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 pt-8">
            {["Flutter", "FastAPI", "Python", "PostgreSQL", "AI/ML", "Docker"].map((tech) => (
              <div
                key={tech}
                className="px-8 py-4 rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-md transition-all duration-500"
              >
                <span className="text-lg font-semibold text-foreground">{tech}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
