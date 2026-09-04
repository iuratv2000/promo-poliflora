import { Reveal } from '@/components/Reveal'
import { site } from '@/data/site'

/**
 * Spec calls for a warm photo of the apiary as the section background.
 * No real photo is available yet, so this uses a warm honey/wood gradient
 * as a stand-in — swap the `bg-gradient-to-br ...` div below for a real
 * `<img>` (with a matching dark overlay for text contrast) once a photo
 * from the apiary is provided.
 */
export function Trust() {
  return (
    <section id="trust" className="relative isolate overflow-hidden border-t border-border/60">
      <div
        aria-hidden
        className="absolute inset-0 -z-10 bg-gradient-to-br from-wood-700 via-wood-600 to-honey-700"
      />
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <Reveal>
          <p className="font-heading text-2xl text-cream md:text-3xl">{site.trust.fact}</p>
        </Reveal>
      </div>
    </section>
  )
}
