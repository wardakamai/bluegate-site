'use client';

import { site } from '@/config/site';

export function WhatsAppFab() {
  return (
    <a
      href={site.contact.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Blue Gate on WhatsApp"
      className="fixed right-6 bottom-6 z-50 flex size-14 items-center justify-center rounded-full shadow-lg transition-all duration-200 hover:scale-105 hover:shadow-xl focus-visible:ring-4 focus-visible:ring-[#25D366]/50 focus-visible:outline-none print:hidden"
    >
      {/* Official WhatsApp logo SVG */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 175.216 175.552"
        width="56"
        height="56"
        aria-hidden="true"
      >
        <defs>
          <linearGradient
            id="wa-grad-b"
            x1="85.915"
            x2="86.535"
            y1="32.567"
            y2="137.092"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#57d163" />
            <stop offset="1" stopColor="#23b33a" />
          </linearGradient>
          <linearGradient
            id="wa-grad-a"
            x1="85.984"
            x2="86.605"
            y1="31.648"
            y2="137.265"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0" stopColor="#b3ffb3" />
            <stop offset="1" stopColor="#06cc3f" />
          </linearGradient>
        </defs>
        {/* Shadow circle */}
        <circle cx="87.666" cy="87.776" r="72.639" fill="#b3b3b3" opacity=".15" />
        {/* Green background circle */}
        <circle cx="87.058" cy="87.194" r="72.639" fill="url(#wa-grad-b)" />
        {/* White speech bubble path */}
        <path
          fill="#fff"
          d="M108.893 61.387c-5.995-6.005-13.98-9.312-22.483-9.316-17.525 0-31.79 14.263-31.797 31.794-.003 5.604 1.46 11.073 4.244 15.895L54.29 115.63l15.217-3.992a31.824 31.824 0 0 0 15.224 3.874h.013c17.52 0 31.785-14.265 31.792-31.797.004-8.49-3.297-16.479-9.643-22.328z"
        />
        <path
          fill="url(#wa-grad-a)"
          d="M86.41 110.585h-.01a26.435 26.435 0 0 1-13.469-3.685l-.966-.574-10.012 2.626 2.674-9.765-.63-1.001a26.406 26.406 0 0 1-4.047-14.02c.006-14.596 11.882-26.47 26.483-26.47a26.31 26.31 0 0 1 18.718 7.761 26.32 26.32 0 0 1 7.743 18.726c-.007 14.6-11.882 26.402-26.484 26.402z"
        />
        <path
          fill="#fff"
          fillRule="evenodd"
          d="M79.05 70.885c-.572-1.272-1.174-1.298-1.718-1.32-.445-.019-.955-.018-1.464-.018-.51 0-1.336.191-2.034.955s-2.67 2.608-2.67 6.361 2.734 7.38 3.116 7.89c.382.509 5.276 8.43 13.02 11.478 6.437 2.538 7.746 2.034 9.143 1.907 1.398-.127 4.513-1.844 5.15-3.625.638-1.78.638-3.306.447-3.625-.191-.318-.7-.51-1.463-.892-.764-.382-4.514-2.227-5.213-2.48-.7-.254-1.209-.382-1.72.383-.51.764-1.972 2.48-2.417 2.99-.445.509-.89.572-1.654.19-.763-.381-3.223-1.188-6.142-3.79-2.27-2.024-3.804-4.524-4.249-5.287-.445-.765-.047-1.178.334-1.559.343-.342.764-.893 1.146-1.34.382-.446.51-.765.764-1.274.255-.51.128-1.019-.064-1.4-.19-.384-1.676-4.15-2.353-5.654z"
        />
      </svg>
      {/* Pulse ring */}
      <span
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 motion-safe:animate-ping"
        aria-hidden="true"
      />
    </a>
  );
}
