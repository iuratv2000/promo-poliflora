import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { site } from '@/data/site'
import heroJar from '@/assets/images/hero-jar.webp'

export function Hero() {
  const [subtitleBefore, subtitleAfter] = site.hero.subtitle.split(site.hero.subtitleHighlight)

  return (
    <section id="top" className="relative overflow-hidden">
      {/* the one memorable motion moment on the page — a soft honey glow behind the jar */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-24 right-0 -z-10 flex justify-center md:right-[6%]"
      >
        <div className="size-[30rem] rounded-full bg-honey-300/40 blur-3xl" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-6 px-6 py-8 md:grid-cols-2 md:gap-12 md:py-28">
        <div className="text-center md:text-left">
          <Badge className="mb-4 h-auto animate-in fade-in slide-in-from-bottom-2 px-2.5 py-1 text-sm font-semibold tracking-wide uppercase duration-500 md:mb-6">
            {site.hero.eyebrow}
          </Badge>
          <h1 className="text-4xl text-foreground animate-in fade-in slide-in-from-bottom-3 duration-500 md:text-5xl lg:text-6xl">
            {site.hero.title}
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground animate-in fade-in slide-in-from-bottom-3 duration-700 md:mx-0 md:mt-5">
            {subtitleBefore}
            <span className="font-bold text-honey-700">{site.hero.subtitleHighlight}</span>
            {subtitleAfter}
          </p>
          <div className="mt-6 animate-in fade-in slide-in-from-bottom-3 duration-700 md:mt-10">
            <Button size="lg" asChild className="h-11 px-6 text-base">
              <a href={site.hero.ctaHref}>{site.hero.ctaLabel}</a>
            </Button>
          </div>
        </div>

        <div className="flex justify-center animate-in fade-in zoom-in-95 duration-700 md:justify-end">
          <div className="hero-jar-visual">
            <img
              src={heroJar}
              alt="Баночка цветочного мёда с полевыми цветами"
              className="hero-jar h-auto w-56 drop-shadow-xl md:w-96"
              width={375}
              height={495}
            />
          </div>
        </div>
      </div>
    </section>
  )
}
