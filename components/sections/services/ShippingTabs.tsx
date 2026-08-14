'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Package,
  Anchor,
  Shield,
  Navigation,
  Activity,
  Globe,
  Waves,
  FileCheck,
} from 'lucide-react';
import { ServiceFeatureGrid, type FeatureItem } from './ServiceFeatureGrid';

interface TabData {
  value: string;
  label: string;
  headlinePlain: string;
  headlineItalic: string;
  positioning: string;
  features: FeatureItem[];
  compliance: string[];
}

const TABS: TabData[] = [
  {
    value: 'trucking',
    label: 'Trucking',
    headlinePlain: 'Road Tanker Coordination.',
    headlineItalic: 'ADR-Compliant Partners.',
    positioning:
      'Blue Gate Tank Farm coordinates road delivery across Benelux, Germany, Austria and Switzerland through ADR-compliant carrier partners.',
    features: [
      {
        icon: Shield,
        title: 'ADR Compliance',
        body: 'We work only with carriers holding current ADR Class 3 and Class 8 certification, with inspected and placarded vehicles.',
      },
      {
        icon: Navigation,
        title: 'Benelux / DACH Reach',
        body: 'Coordination across the Netherlands, Belgium, Germany, Austria and Switzerland, with additional coverage arranged on request.',
      },
      {
        icon: Activity,
        title: 'Delivery Documentation',
        body: 'Electronic delivery documentation and proof-of-delivery confirmation coordinated for every movement.',
      },
    ],
    compliance: ['ADR', 'REACH', 'COSHH'],
  },
  {
    value: 'rail',
    label: 'Rail',
    headlinePlain: 'Rail Coordination.',
    headlineItalic: 'Across the European Network.',
    positioning:
      'Blue Gate Tank Farm coordinates bulk liquid movement by rail in ISO tank containers across the pan-European freight network, with RID hazmat documentation support.',
    features: [
      {
        icon: Package,
        title: 'ISO Tank Containers',
        body: 'Coordination of ISO tank container capacity suitable for Jet A1, diesel, fuel oils and crude, sourced through qualified rail logistics partners.',
      },
      {
        icon: Globe,
        title: 'European Rail Network',
        body: 'Cross-border rail movement coordinated with established rail freight operators across the European network.',
      },
      {
        icon: FileCheck,
        title: 'Hazmat Documentation',
        body: 'Support with RID compliance documentation, dangerous goods declarations, and customs clearance coordination.',
      },
    ],
    compliance: ['RID', 'OTIF', 'ADR (terminal transfer)'],
  },
  {
    value: 'cargo',
    label: 'Cargo',
    headlinePlain: 'Containerised Liquid Cargo.',
    headlineItalic: 'Port to Port Coordination.',
    positioning:
      'Blue Gate Tank Farm coordinates deep-sea and short-sea cargo movements in ISO tank containers and IBC units, with IMDG documentation support.',
    features: [
      {
        icon: Package,
        title: 'ISO Tank & IBC Handling',
        body: 'Coordination of 20 ft and 40 ft ISO tank container capacity, plus IBC units for smaller volumes, through port and terminal partners.',
      },
      {
        icon: Globe,
        title: 'Deep-Sea & Feeder Routes',
        body: 'Coordination across established shipping lines serving major deep-sea and short-sea routes.',
      },
      {
        icon: Shield,
        title: 'IMDG Documentation',
        body: 'Support with IMDG Class 3 shipper declarations, multi-modal transport documents, and MSDS packs.',
      },
    ],
    compliance: ['IMDG', 'SOLAS', 'ISPS', 'CTU Code'],
  },
  {
    value: 'tanker',
    label: 'Tanker (Marine)',
    headlinePlain: 'Marine Tanker Coordination.',
    headlineItalic: 'Working With Shipowners.',
    positioning:
      'Blue Gate Tank Farm coordinates marine tanker logistics by working with shipowners, operators and chartering partners — from VLCC-scale movements through to coastal tanker distribution.',
    features: [
      {
        icon: Anchor,
        title: 'Port & Berth Coordination',
        body: 'Coordination with port agents and terminal operators for pre-arrival notification, berth booking and mooring arrangements.',
      },
      {
        icon: Waves,
        title: 'Ship-to-Ship Transfer',
        body: 'Where required, we coordinate lightering and STS operations through qualified marine service providers.',
      },
      {
        icon: FileCheck,
        title: 'Charter & Fixture Support',
        body: 'Support with voyage and time-charter fixture coordination, laytime calculation, NOR tendering and demurrage discussions, working directly with shipowners and operators.',
      },
    ],
    compliance: ['MARPOL', 'SOLAS', 'ISM Code', 'OCIMF SIRE'],
  },
];

export function ShippingTabs() {
  return (
    <Tabs defaultValue="trucking" className="w-full">
      {/* Scroll wrapper keeps rounded corners off the clipping boundary */}
      <div className="mb-10 [scrollbar-width:none] overflow-x-auto [&::-webkit-scrollbar]:hidden">
        <TabsList className="bg-bg border-brand/[0.14] inline-flex h-auto w-max gap-1 rounded-xl border p-1">
          {TABS.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="data-[state=active]:bg-brand flex-none rounded-lg px-5 py-2 font-sans text-sm whitespace-nowrap data-[state=active]:text-white"
            >
              {tab.label}
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {TABS.map((tab) => (
        <TabsContent key={tab.value} value={tab.value} className="mt-0 space-y-10">
          <div>
            <h3
              className="text-ink mb-3 font-serif leading-tight font-normal"
              style={{ fontSize: 'clamp(26px, 3.5vw, 44px)' }}
            >
              {tab.headlinePlain} <em className="text-brand">{tab.headlineItalic}</em>
            </h3>
            <p className="text-muted-foreground max-w-2xl font-sans text-base leading-relaxed">
              {tab.positioning}
            </p>
          </div>

          <ServiceFeatureGrid items={tab.features} />

          <div>
            <p className="text-brand/70 mb-3 font-sans text-[11px] font-medium tracking-[0.08em] uppercase">
              Regulatory Framework
            </p>
            <div className="flex flex-wrap gap-2">
              {tab.compliance.map((c) => (
                <span
                  key={c}
                  className="text-ink border-brand/20 bg-brand/[0.06] rounded-md border px-3 py-1.5 font-mono text-xs font-medium"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
