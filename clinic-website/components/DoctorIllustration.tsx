type Props = { className?: string };

// Stylized placeholder illustration of the doctor, used until a real
// photograph is added. To use a real photo instead, replace the <Image>
// usage in Hero.tsx / AboutDoctor.tsx with:
//   <Image src="/doctor-photo.jpg" alt="Dr. Umesh Chahar" fill className="object-cover" />
// and drop the photo file into /public/doctor-photo.jpg
export default function DoctorIllustration({ className = "" }: Props) {
  return (
    <svg viewBox="0 0 400 480" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="coatGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#FFFFFF" />
          <stop offset="1" stopColor="#EAF4FB" />
        </linearGradient>
        <linearGradient id="skinGrad" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#E7B791" />
          <stop offset="1" stopColor="#D9A276" />
        </linearGradient>
        <linearGradient id="bgGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#176FA8" />
          <stop offset="1" stopColor="#2EA86E" />
        </linearGradient>
      </defs>

      <rect width="400" height="480" rx="32" fill="url(#bgGrad)" opacity="0.08" />

      {/* shoulders / coat */}
      <path d="M70 440 C70 340 130 300 200 300 C270 300 330 340 330 440 V480 H70 Z" fill="url(#coatGrad)" />
      <path d="M70 440 C70 340 130 300 200 300 C270 300 330 340 330 440" stroke="#176FA8" strokeOpacity="0.15" strokeWidth="3" />

      {/* collar */}
      <path d="M170 304 L200 345 L230 304" stroke="#176FA8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />

      {/* stethoscope */}
      <path
        d="M150 320 C150 360 160 380 200 382 C240 380 250 360 250 320"
        stroke="#0F5786"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
      />
      <circle cx="200" cy="384" r="11" fill="#0F5786" />
      <circle cx="150" cy="320" r="6" fill="#0F5786" />
      <circle cx="250" cy="320" r="6" fill="#0F5786" />

      {/* neck */}
      <rect x="180" y="255" width="40" height="50" rx="14" fill="url(#skinGrad)" />

      {/* head */}
      <ellipse cx="200" cy="200" rx="68" ry="76" fill="url(#skinGrad)" />

      {/* hair */}
      <path
        d="M134 190 C130 140 165 112 200 112 C235 112 270 140 266 190 C260 165 235 150 200 150 C165 150 140 165 134 190 Z"
        fill="#2B2320"
      />

      {/* simple face details */}
      <ellipse cx="176" cy="200" rx="6" ry="7" fill="#2B2320" />
      <ellipse cx="224" cy="200" rx="6" ry="7" fill="#2B2320" />
      <path d="M186 232 C194 240 206 240 214 232" stroke="#7A4A30" strokeWidth="4" strokeLinecap="round" fill="none" />

      {/* badge */}
      <rect x="148" y="356" width="34" height="22" rx="4" fill="#2EA86E" opacity="0.9" />
      <rect x="153" y="362" width="24" height="3" rx="1.5" fill="white" />
      <rect x="153" y="368" width="16" height="3" rx="1.5" fill="white" />
    </svg>
  );
}
