import { Clock, MessageSquareText, ThumbsDown, Search } from "lucide-react"

const problems = [
  {
    icon: Search,
    text: "Отзывы разбросаны по десяткам сайтов",
  },
  {
    icon: ThumbsDown,
    text: "Непонятно, кому можно доверять",
  },
  {
    icon: MessageSquareText,
    text: "Рекомендации в магазинах приложений необъективны",
  },
  {
    icon: Clock,
    text: "Хочется найти что-то по своему вкусу, а не по общему рейтингу",
  },
]

export function Problem() {
  return (
    <section id="problem" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight">
              Сколько времени вы тратите на выбор?
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground text-pretty max-w-2xl mx-auto">
              Информационный переизбыток мешает делать осознанный выбор и тратит ваше время.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 pt-8">
            {problems.map((problem, index) => (
              <div
                key={index}
                className="group flex gap-4 p-8 rounded-xl bg-background border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-500"
              >
                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500 shrink-0 h-fit">
                  <problem.icon className="w-6 h-6" />
                </div>
                <p className="text-left leading-relaxed pt-2">{problem.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
