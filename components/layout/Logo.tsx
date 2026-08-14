import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

type LogoProps = {
  variant?: 'default' | 'white';
  className?: string;
};

export function Logo({ variant = 'default', className }: LogoProps) {
  const src = variant === 'white' ? '/logo-white.svg' : '/logo.svg';

  return (
    <Link href="/" aria-label="Blue Gate Shipping and Trade B.V. — Home">
      <Image
        src={src}
        alt="Blue Gate Shipping and Trade B.V."
        width={512}
        height={512}
        priority
        className={cn('h-12 w-auto', className)}
      />
    </Link>
  );
}
