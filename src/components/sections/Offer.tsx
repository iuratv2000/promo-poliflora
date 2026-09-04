import { Droplet, Leaf } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Reveal } from '@/components/Reveal'
import { cn } from '@/lib/utils'
import { site } from '@/data/site'
import honeyBucketPhoto from '@/assets/images/podsolnuh-2.webp'

// Only one real product photo exists so far — reused across all sizes as a
// stand-in for now (swap in a per-size photo here once each one is ready).
const planPhotos: Partial<Record<string, string>> = {
  '750 г': honeyBucketPhoto,
  '1.5 кг': honeyBucketPhoto,
  '4.5 кг': honeyBucketPhoto,
}

export function Offer() {
  return (
    <section id="offer" className="border-t border-border/60">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal className="text-center">
          <h2 className="text-3xl text-foreground md:text-4xl">{site.offer.title}</h2>
          <p className="mx-auto mt-3 max-w-md text-muted-foreground">{site.offer.subtitle}</p>
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {site.offer.plans.map((plan, index) => {
            const orderUrl = `${site.telegramUrl}?text=${encodeURIComponent(
              `Здравствуйте! Хочу заказать мёд — ${plan.weight} (${plan.tag}).`
            )}`
            const photo = planPhotos[plan.weight]

            return (
              <Reveal key={plan.weight} delay={index * 80} className="h-full">
                <Card
                  className={cn(
                    'relative h-full text-left transition-transform duration-300 hover:-translate-y-1',
                    plan.featured
                      ? 'ring-2 ring-primary shadow-[var(--shadow-lift)]'
                      : 'shadow-[var(--shadow-soft)]'
                  )}
                >
                  {photo ? (
                    <img
                      src={photo}
                      alt={`Мёд, ${plan.weight}`}
                      className="aspect-square w-full object-cover"
                    />
                  ) : (
                    <div
                      aria-hidden
                      className="flex aspect-square w-full items-center justify-center bg-gradient-to-br from-honey-100 to-wood-100"
                    >
                      <Droplet className="size-10 text-honey-400" strokeWidth={1.5} />
                    </div>
                  )}

                  {/* volume medallion — overlaid on the product photo, like a jar seal */}
                  <div className="absolute top-3 right-3 z-10 flex size-24 flex-col items-center justify-center gap-0.5 rounded-full border border-honey-300 bg-card px-2 text-center shadow-[var(--shadow-soft)]">
                    <Leaf className="size-4 text-honey-500" strokeWidth={1.5} />
                    <p className="font-heading text-xl leading-none font-bold text-foreground">
                      {plan.weight}
                    </p>
                    <p className="text-[10px] leading-tight text-muted-foreground">
                      {plan.volumeLabel}
                    </p>
                  </div>

                  <CardContent className="flex h-full flex-col gap-4 pt-2">
                    <Badge variant={plan.featured ? 'default' : 'secondary'} className="self-start">
                      {plan.tag}
                    </Badge>

                    <div>
                      <p
                        className={cn(
                          'mt-1 text-base text-honey-500 line-through decoration-2',
                          !plan.oldPrice && 'invisible'
                        )}
                      >
                        {plan.oldPrice ?? ' '}
                      </p>
                      <p className="mt-0.5 text-3xl font-semibold text-foreground">{plan.price}</p>
                      {plan.savings && (
                        <Badge
                          variant="outline"
                          className="mt-2 border-honey-300 bg-honey-100 text-honey-700"
                        >
                          {plan.savings}
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground">{plan.note}</p>

                    <Button
                      asChild
                      variant={plan.featured ? 'default' : 'outline'}
                      className="mt-auto h-10"
                    >
                      <a href={orderUrl} target="_blank" rel="noreferrer">
                        {site.offer.ctaLabel}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}
