import { Layers, Sparkles, Users, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Layers,
    title: "Всё в одном месте",
    description: "Приложения, игры, сайты, фильмы и сериалы — универсальная платформа для всего цифрового контента.",
    highlight: "Не только кино или только игры",
  },
  {
    icon: Sparkles,
    title: "Умные, а не общие рекомендации",
    description:
      "Персонализация на основе ваших вкусов. Алгоритмы изучают ваши предпочтения, чтобы предлагать именно то, что вам понравится.",
    highlight: "Персонализация на основе ваших вкусов",
  },
  {
    icon: Users,
    title: "Сообщество и эксперты",
    description: "Обсуждения с реальными пользователями и проверенные обзоры от блогеров.",
    highlight: "Проверенные обзоры от блогеров",
  },
  {
    icon: TrendingUp,
    title: "Честные агрегированные рейтинги",
    description: "Алгоритмическая обработка множества источников для объективных оценок.",
    highlight: "Алгоритмическая обработка множества источников",
  },
]

export function Features() {
  return (
    <section id="features" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <div className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-semibold border border-accent/20">
              Конкурентные преимущества
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Универсальность там, где <span className="text-primary">другие ограничены</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Контур объединяет всё, что вам нужно для выбора цифрового контента
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                <div className="relative h-full p-8 rounded-xl bg-background border border-border hover:border-primary/50 transition-all duration-500">
                  <div className="flex items-start gap-6">
                    <div className="p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-500 shrink-0">
                      <feature.icon className="w-8 h-8" />
                    </div>
                    <div className="space-y-3">
                      <h3 className="text-xl font-semibold leading-tight">{feature.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                      <p className="text-sm text-accent font-medium pt-2">{feature.highlight}</p>
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
