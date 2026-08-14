import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta({
  title: 'Terms & Conditions | Blue Gate Shipping and Trade B.V.',
  description:
    'Terms and conditions for Blue Gate Shipping and Trade B.V., Rotterdam oil tank farm and storage terminal operator.',
  path: 'terms',
});

export default function TermsPage() {
  return (
    <main className="bg-page min-h-screen">
      <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
        <p className="text-brand/70 mb-4 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
          Legal
        </p>
        <h1
          className="text-ink mb-8 font-serif leading-tight font-normal"
          style={{ fontSize: 'clamp(32px, 4vw, 56px)' }}
        >
          Terms &amp; <em className="text-brand">Conditions.</em>
        </h1>
        {/* TODO: confirm with client — insert final approved terms and conditions text */}
        <div className="text-muted-foreground space-y-4 font-sans text-sm leading-relaxed">
          <p>
            These terms and conditions apply to Blue Gate Shipping and Trade B.V. (KVK 98572695),
            Prinsenlaan 450, 3066 KD Rotterdam, Netherlands.
          </p>
          <p>
            Full terms and conditions are pending client review and legal sign-off. Please contact{' '}
            <a href="mailto:storage@bluegou.com" className="text-brand hover:underline">
              storage@bluegou.com
            </a>{' '}
            with any enquiries.
          </p>
        </div>
      </div>
    </main>
  );
}
