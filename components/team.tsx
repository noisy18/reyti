import { Users } from "lucide-react"

export function Team() {
  return (
    <section id="team" className="py-24 bg-muted/50">
      <div className="container px-4 mx-auto">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Команда</h2>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Мы — команда опытных разработчиков, дизайнеров и аналитиков данных, объединенных общей целью: сделать
              выбор цифрового контента простым и приятным.
            </p>
          </div>

          <div className="p-12 rounded-lg border border-border bg-background">
            <Users className="w-16 h-16 text-primary mx-auto mb-4" />
            <p className="text-muted-foreground">Информация о команде будет добавлена в ближайшее время</p>
          </div>
        </div>
      </div>
    </section>
  )
}
