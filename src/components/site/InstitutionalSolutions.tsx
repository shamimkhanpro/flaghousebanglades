import {
  Landmark,
  GraduationCap,
  School,
  University,
  Building2,
  Hotel,
  Globe2,
  Flag,
  Briefcase,
  Presentation,
  Mountain,
  CalendarClock,
} from "lucide-react";

const AUDIENCES = [
  { icon: Landmark, label: "Government Offices" },
  { icon: School, label: "Schools" },
  { icon: GraduationCap, label: "Colleges" },
  { icon: University, label: "Universities" },
  { icon: Building2, label: "Banks" },
  { icon: Hotel, label: "Hotels" },
  { icon: Globe2, label: "Embassies" },
];

const OFFERINGS = [
  {
    icon: Flag,
    title: "Outdoor National Flags",
    text: "Heavy-duty outdoor flags for official institutional display.",
  },
  {
    icon: Briefcase,
    title: "Desk Flag Systems",
    text: "Coordinated desk flag sets for offices and reception areas.",
  },
  {
    icon: Presentation,
    title: "Conference Flags",
    text: "Protocol-grade flags for boardrooms and conferences.",
  },
  {
    icon: Mountain,
    title: "Flag Poles",
    text: "Indoor and outdoor flag poles with premium hardware.",
  },
  {
    icon: CalendarClock,
    title: "Annual Replacement Programs",
    text: "Scheduled replacement contracts for institutional clients.",
  },
];

export function InstitutionalSolutions() {
  return (
    <section id="institutional" className="container-x py-20">
      <div className="mb-12 max-w-2xl">
        <span className="font-display text-xs font-semibold uppercase tracking-[0.25em] text-brand-red">
          Trusted Partner
        </span>
        <h2 className="mt-2 font-display text-4xl font-bold uppercase tracking-tight text-ink md:text-5xl">
          Institutional Solutions
        </h2>
        <p className="mt-3 text-base text-muted-foreground">
          Built for official, educational, hospitality, financial and diplomatic institutions across
          Bangladesh.
        </p>
      </div>

      <div className="mb-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-7">
        {AUDIENCES.map((a) => (
          <div
            key={a.label}
            className="flex flex-col items-center gap-2 rounded-xl border border-border bg-card p-4 text-center shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-green/10 text-brand-green">
              <a.icon className="h-5 w-5" />
            </span>
            <span className="font-display text-xs font-semibold uppercase tracking-wider text-ink">
              {a.label}
            </span>
          </div>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {OFFERINGS.map((o) => (
          <article
            key={o.title}
            className="group relative flex flex-col gap-3 overflow-hidden rounded-xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl"
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-lg bg-brand-red/10 text-brand-red">
              <o.icon className="h-6 w-6" />
            </span>
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-ink">
              {o.title}
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{o.text}</p>
            <span className="pointer-events-none absolute inset-x-6 bottom-0 h-0.5 origin-left scale-x-0 bg-brand-green transition-transform duration-300 group-hover:scale-x-100" />
          </article>
        ))}
      </div>
    </section>
  );
}
