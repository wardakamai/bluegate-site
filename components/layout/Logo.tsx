import Image from 'next/image'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type LogoProps = {
  variant?: 'default' | 'white'
  className?: string
}

export function Logo({ variant = 'default', className }: LogoProps) {
  const src = variant === 'white' ? '/logo-white.svg' : '/logo.svg'

  return (
    <Link href="/" aria-label="Blue Gate Shipping and Trade B.V. — Home">
      <Image
        src={src}
        alt="Blue Gate Shipping and Trade B.V."
        width={160}
        height={60}
        priority
        className={cn('h-10 w-auto', className)}
      />
    </Link>
  )
}
