import type { Metadata } from 'next';
import { pageMeta } from '@/lib/meta';

export const metadata: Metadata = pageMeta({
  title: 'Privacy Policy | Blue Gate Shipping and Trade B.V.',
  description:
    'Privacy policy for Blue Gate Shipping and Trade B.V., Rotterdam oil tank farm and storage terminal operator.',
  path: 'privacy',
});

export default function PrivacyPage() {
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
          Privacy <em className="text-brand">Policy.</em>
        </h1>
        {/* TODO: confirm with client — insert final approved privacy policy text */}
        <div className="text-muted-foreground space-y-4 font-sans text-sm leading-relaxed">
          <p>
            This privacy policy applies to Blue Gate Shipping and Trade B.V. (KVK 98572695),
            Prinsenlaan 450, 3066 KD Rotterdam, Netherlands.
          </p>
          <p>
            Full privacy policy text is pending client review and legal sign-off. Please contact{' '}
            <a href="mailto:storage@bluegou.com" className="text-brand hover:underline">
              storage@bluegou.com
            </a>{' '}
            with any data protection enquiries.
          </p>
        </div>
      </div>
    </main>
  );
}
