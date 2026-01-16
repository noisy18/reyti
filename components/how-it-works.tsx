import { Database, BarChart3, Brain, Target } from "lucide-react"

const steps = [
  {
    icon: Database,
    number: "01",
    title: "Сбор",
    description: "Наши алгоритмы автоматически собирают и анализируют отзывы с форумов, соцсетей и магазинов.",
  },
  {
    icon: BarChart3,
    number: "02",
    title: "Агрегация",
    description: "Все оценки сводятся в единые рейтинги по приложениям, играм, сайтам, фильмам.",
  },
  {
    icon: Brain,
    number: "03",
    title: "Анализ",
    description: "Система изучает ваши предпочтения и поведение.",
  },
  {
    icon: Target,
    number: "04",
    title: "Рекомендация",
    description: "Вы получаете персональную подборку того, что вам точно понравится.",
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 bg-muted/30 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-transparent" />

      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Как это работает
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Простой процесс от сбора данных до персональных рекомендаций
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative group">
                <div className="relative p-8 rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-xl transition-all duration-500">
                  {/* Номер теперь внутри плашки в правом верхнем углу */}
                  <div className="absolute top-6 right-6 w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center text-lg font-bold shadow-lg group-hover:scale-110 transition-transform duration-500">
                    {step.number}
                  </div>
                  <div className="space-y-6">
                    <step.icon className="w-12 h-12 text-primary" />
                    <div className="space-y-3">
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
