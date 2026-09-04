import type { SVGProps } from 'react'

/**
 * Brand marks for social links. lucide-react ships no brand icons, so these
 * are hand-drawn minimal outlines sized to match lucide's 24x24/1.5px-stroke
 * conventions used elsewhere on the page.
 */

export function InstagramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function TelegramIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M21 4.5 3.5 11.4c-.9.35-.9 1.63.02 1.96l4.2 1.5 1.6 5.06c.28.9 1.42 1.14 2.03.42l2.36-2.77 4.4 3.25c.83.61 2.02.16 2.24-.86L23 5.7c.22-1.03-.8-1.9-1.75-1.53Z" />
      <path d="m7.7 14.86 9.9-8.6-8 7.44" />
    </svg>
  )
}
