import { Button } from '@/components/ui/button'
import { InstagramIcon, TelegramIcon } from '@/components/icons/social'
import { site } from '@/data/site'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-wood-800 text-cream">
      <div className="mx-auto max-w-6xl px-6 py-14">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="font-heading text-xl">{site.name}</p>
            <p className="mt-1 text-sm text-cream/70">{site.hero.subtitle}</p>
          </div>

          <Button asChild size="lg" className="h-11 px-6 text-base">
            <a href={site.telegramUrl} target="_blank" rel="noreferrer">
              {site.footer.ctaLabel}
            </a>
          </Button>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center gap-6 border-t border-cream/15 pt-8 text-sm text-cream/60 md:flex-row md:justify-between">
          <p>
            &copy; {year} {site.name}.{' '}
            <a href={site.footer.privacyHref} className="underline-offset-4 hover:underline">
              {site.footer.privacyLabel}
            </a>
          </p>

          <div className="flex items-center gap-2">
            <a
              href={site.instagramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="rounded-md p-2.5 text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <InstagramIcon className="size-5" />
            </a>
            <a
              href={site.telegramUrl}
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="rounded-md p-2.5 text-cream/70 transition-colors hover:bg-cream/10 hover:text-cream"
            >
              <TelegramIcon className="size-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
