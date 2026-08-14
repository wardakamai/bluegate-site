'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown, X, ShieldCheck } from 'lucide-react';

const POLICY_POINTS = [
  {
    title: 'Product Guarantee',
    body: 'All products stored and handled to their governing specification (ASTM, EN 590, ISO 8217). Independent third-party inspection available on request at any time during tenure.',
  },
  {
    title: 'Liability',
    body: "Blue Gate's liability is limited to the contracted storage value for the affected period. Consequential, indirect, or market-movement losses are excluded in all cases.",
  },
  {
    title: 'Minimum Tenure & Notice',
    body: 'Minimum storage commitment is 30 days. Product withdrawal requires 5 business days notice. Early termination fees apply on fixed-term contracts.',
  },
  {
    title: 'Payment Terms',
    body: 'Invoices are due within 14 calendar days of issue. Storage access is suspended on accounts overdue by more than 7 days without prior written agreement.',
  },
  {
    title: 'Force Majeure',
    body: 'Neither party is liable for delays caused by port closures, regulatory action, extreme weather, or other events beyond reasonable control. Obligations are suspended — not cancelled — for the duration.',
  },
];

export function PolicyDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, [open]);

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="text-muted-foreground hover:text-ink focus-visible:text-ink flex items-center gap-1.5 text-xs transition-colors focus-visible:outline-none"
      >
        <ShieldCheck size={11} className="text-brand shrink-0" aria-hidden="true" />
        <span>Blue Gate – Storage &amp; Service Policy</span>
        <ChevronDown
          size={11}
          aria-hidden="true"
          className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>

      {open && (
        <div
          role="dialog"
          aria-label="Storage and Service Policy"
          className="border-border-soft bg-ink absolute top-full left-1/2 z-[9999] mt-3 w-[min(640px,90vw)] -translate-x-1/2 rounded-xl border shadow-2xl"
        >
          {/* Arrow */}
          <div className="border-border-soft bg-ink absolute -top-1.5 left-1/2 size-3 -translate-x-1/2 rotate-45 border-t border-l" />

          {/* Header */}
          <div className="flex items-center justify-between border-b border-white/[0.08] px-6 pt-5 pb-4">
            <div className="flex items-center gap-2">
              <ShieldCheck size={16} className="text-brand shrink-0" aria-hidden="true" />
              <h2 className="font-serif text-base font-normal text-white">
                Blue Gate – Storage &amp; Service Policy
              </h2>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Close policy panel"
              className="text-white/40 transition-colors hover:text-white focus-visible:outline-none"
            >
              <X size={15} />
            </button>
          </div>

          {/* Policy points */}
          <div className="divide-y divide-white/[0.06] px-6">
            {POLICY_POINTS.map((point) => (
              <div key={point.title} className="py-4">
                <p className="text-brand mb-1 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
                  {point.title}
                </p>
                <p className="font-sans text-xs leading-relaxed text-white/60">{point.body}</p>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between border-t border-white/[0.08] px-6 py-4">
            <p className="font-sans text-[10px] text-white/30">
              Blue Gate Shipping and Trade B.V. · KVK 98572695
            </p>
            <Link
              href="/terms"
              onClick={() => setOpen(false)}
              className="text-brand font-sans text-[11px] transition-colors hover:text-white"
            >
              Full Terms &amp; Conditions →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
