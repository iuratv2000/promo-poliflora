import { Button } from '@/components/ui/button'
import { site } from '@/data/site'

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-heading text-xl text-foreground">
          {site.name}
        </a>
        <nav className="hidden gap-6 text-sm text-muted-foreground md:flex">
          {site.nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-foreground">
              {item.label}
            </a>
          ))}
        </nav>
        <Button asChild>
          <a href={site.telegramUrl} target="_blank" rel="noreferrer">
            Заказать
          </a>
        </Button>
      </div>
    </header>
  )
}
