import { Gamepad2, Tv, Smartphone, Briefcase } from "lucide-react"

const personas = [
  {
    icon: Gamepad2,
    title: "Активный геймер",
    quote: "Хочу знать, во что играть дальше, а не полагаться на рекламу.",
    color: "primary",
  },
  {
    icon: Tv,
    title: "Любитель сериалов",
    quote: "Устал пролистывать стриминги в поисках стоящего.",
    color: "secondary",
  },
  {
    icon: Smartphone,
    title: "Практичный пользователь",
    quote: "Скачиваю только лучшие приложения и пользуюсь проверенными сайтами.",
    color: "accent",
  },
  {
    icon: Briefcase,
    title: "Разработчик / Бизнес",
    quote: "Нужна честная обратная связь о моем продукте.",
    color: "primary",
  },
]

export function Audience() {
  return (
    <section id="audience" className="py-24 md:py-32 bg-background">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto space-y-16">
          <div className="text-center space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Контур создан для вас, если вы...
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Найдите себя среди наших целевых пользователей
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {personas.map((persona, index) => (
              <div
                key={index}
                className="group p-8 rounded-xl border border-border bg-card hover:border-primary/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                  <div className="p-5 rounded-2xl bg-primary/10 text-primary group-hover:scale-110 transition-transform duration-300 shrink-0">
                    <persona.icon className="w-10 h-10" />
                  </div>
                  <div className="space-y-3 text-left">
                    <h3 className="text-xl font-semibold">{persona.title}</h3>
                    <p className="text-muted-foreground italic leading-relaxed">"{persona.quote}"</p>
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
