import { Database, Brain, BarChart3, Target } from "lucide-react"

const steps = [
  {
    icon: Database,
    title: "Сбор",
    description: "Наши алгоритмы автоматически собирают и анализируют отзывы с форумов, соцсетей и магазинов.",
  },
  {
    icon: BarChart3,
    title: "Агрегация",
    description: "Все оценки сводятся в единые рейтинги по приложениям, играм, сайтам, фильмам.",
  },
  {
    icon: Brain,
    title: "Анализ",
    description: "Система изучает ваши предпочтения и поведение.",
  },
  {
    icon: Target,
    title: "Рекомендация",
    description: "Вы получаете персональную подборку того, что вам точно понравится.",
  },
]

export function Solution() {
  return (
    <section id="solution" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Всё просто. <span className="text-primary">Мы делаем всю работу за вас</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Простой и понятный процесс от сбора данных до персональных рекомендаций
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="h-full p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-500">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                        <step.icon className="w-8 h-8" />
                      </div>
                      <span className="text-5xl font-bold text-muted-foreground/10 group-hover:text-primary/20 transition-colors duration-500">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-border to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
