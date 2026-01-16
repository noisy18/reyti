export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 md:py-32 bg-muted/30">
      <div className="container px-4 mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="p-10 rounded-2xl border-2 border-border bg-background">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-center">Модель монетизации</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">✓</span>
                </div>
                <p className="text-foreground leading-relaxed">Бесплатный базовый функционал для всех</p>
              </div>
              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">✓</span>
                </div>
                <p className="text-foreground leading-relaxed">
                  Premium-подписка с расширенной аналитикой и эксклюзивными рекомендациями
                </p>
              </div>
              <div className="p-6 rounded-xl bg-muted/50 border border-border">
                <div className="w-10 h-10 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-4">
                  <span className="text-xl font-bold">✓</span>
                </div>
                <p className="text-foreground leading-relaxed">Партнерские программы для бизнеса</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
