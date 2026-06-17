import { HeartPulse, Facebook, Instagram, Twitter, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { clinicInfo } from "@/lib/data";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Why Choose Us", href: "#why-us" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "FAQ", href: "#faq" },
  { label: "Book Appointment", href: "#appointment" },
];

export default function Footer() {
  return (
    <footer className="bg-brand-900 text-white">
      <div className="section-pad py-16">
        <div className="mx-auto max-w-7xl grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-leaf-600 text-white">
                <HeartPulse className="h-5 w-5" />
              </span>
              <span className="font-display font-semibold">{clinicInfo.clinicName}</span>
            </div>
            <p className="mt-4 text-sm text-white/60 leading-relaxed">
              Trusted general physician care focused on clear communication
              and consistent, long-term patient relationships.
            </p>
            <div className="mt-5 flex gap-3">
              {[
                { Icon: Facebook, href: clinicInfo.social.facebook },
                { Icon: Instagram, href: clinicInfo.social.instagram },
                { Icon: Twitter, href: clinicInfo.social.twitter },
                { Icon: Linkedin, href: clinicInfo.social.linkedin },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 hover:bg-leaf-600 transition-colors"
                  aria-label="Social media link"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wide uppercase text-white/90">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm text-white/60 hover:text-leaf-300 transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wide uppercase text-white/90">
              Services
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/60">
              <li>General Consultation</li>
              <li>Health Checkups</li>
              <li>Diabetes Management</li>
              <li>Blood Pressure Management</li>
              <li>Preventive Healthcare</li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm tracking-wide uppercase text-white/90">
              Contact
            </h4>
            <ul className="mt-5 space-y-4 text-sm text-white/60">
              <li className="flex gap-2.5">
                <MapPin className="h-4 w-4 mt-0.5 text-leaf-300 shrink-0" />
                {clinicInfo.address}
              </li>
              <li className="flex gap-2.5">
                <Phone className="h-4 w-4 text-leaf-300 shrink-0" />
                {clinicInfo.phone}
              </li>
              <li className="flex gap-2.5">
                <Mail className="h-4 w-4 text-leaf-300 shrink-0" />
                {clinicInfo.email}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-7 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-white/45">
            &copy; {new Date().getFullYear()} {clinicInfo.clinicName}. All rights reserved.
          </p>
          <p className="text-xs text-white/45">
            Designed for trusted, modern patient care.
          </p>
        </div>
      </div>
    </footer>
  );
}
