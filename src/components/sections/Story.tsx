import { Reveal } from '@/components/Reveal'
import { site } from '@/data/site'

export function Story() {
  return (
    <section id="story" className="border-t border-border/60 bg-cream-muted/60">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <Reveal>
          <h2 className="text-3xl text-foreground md:text-4xl">{site.story.title}</h2>
          <p className="mx-auto mt-6 text-lg leading-relaxed text-muted-foreground">
            {site.story.bodyBefore}
            <em className="font-medium text-foreground italic">{site.story.bodyEmphasis}</em>
            {site.story.bodyAfter}
          </p>
        </Reveal>
      </div>
    </section>
  )
}
