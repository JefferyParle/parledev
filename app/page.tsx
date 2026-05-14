import {
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Code2,
  ExternalLink,
  Gauge,
  Mail,
  MapPin,
  RadioTower,
  Server,
  ShoppingCart,
  Terminal,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type Project = {
  title: string;
  label: string;
  description: string;
  stack: string[];
  outcomes: string[];
};

type SkillGroup = {
  title: string;
  icon: LucideIcon;
  skills: string[];
};

const metrics = [
  { value: "3+", label: "years shipping frontend work" },
  { value: "183%", label: "category flow lift contribution" },
  { value: "8%", label: "add-to-cart lift contribution" },
  { value: "Global", label: "multi-brand ecommerce rollout" },
];

const projects: Project[] = [
  {
    title: "Price App",
    label: "INTERNAL TOOL_01",
    description:
      "A React-powered pricing workflow that lets business teams create and adjust product price grids across global storefronts without waiting on engineering handoffs.",
    stack: ["React", "Axios", "JSON APIs", "Validation", "Pricing UX"],
    outcomes: [
      "Reduced engineering dependency for pricing updates.",
      "Focused on clear state, reliable API flows, and maintainable business logic.",
    ],
  },
  {
    title: "Partner Cost Tracking App",
    label: "OPS SYSTEM_02",
    description:
      "A TypeScript and Tailwind application for partner-facing cost visibility, structured data entry, and more predictable collaboration workflows.",
    stack: ["React", "TypeScript", "Tailwind CSS", "API workflows"],
    outcomes: [
      "Component-driven frontend architecture.",
      "Built around validation, repeatable states, and business-readable UI.",
    ],
  },
  {
    title: "Global Shopify Migration",
    label: "STOREFRONT GRID_03",
    description:
      "Reusable Shopify themes and frontend patterns for international brands, designed for rollout safety, maintainability, and consistent storefront behavior.",
    stack: ["Shopify", "Liquid", "JavaScript", "Reusable themes"],
    outcomes: [
      "Supported multi-site migration work across active ecommerce brands.",
      "Balanced consistency, performance awareness, and low-disruption releases.",
    ],
  },
];

const experience = [
  {
    role: "Software Developer",
    company: "SelectBlinds",
    period: "Apr 2025 - Present",
    signal: "CURRENT",
    details: [
      "Develops internal React and TypeScript tools for pricing, partner costs, and business workflows.",
      "Builds reusable Shopify themes for a global site migration across multiple international brands.",
      "Debugs production ecommerce issues with analytics, tag management, experimentation, and Core Web Vitals context.",
    ],
  },
  {
    role: "Junior Frontend Developer",
    company: "SelectBlinds",
    period: "Mar 2023 - Apr 2025",
    signal: "CONVERSION",
    details: [
      "Contributed to product page improvements tied to an 8% add-to-cart lift.",
      "Helped redesign category pages that increased progression to the next purchase step by 183%.",
      "Maintained storefront UI across Razor, Liquid, JavaScript, HTML, CSS/SCSS, Bootstrap, and responsive layouts.",
    ],
  },
  {
    role: "Problem Solver",
    company: "Amazon",
    period: "Feb 2022 - Mar 2023",
    signal: "OPERATIONS",
    details: [
      "Handled operational exceptions in high-volume systems by finding root causes and coordinating fixes.",
      "Built production-support habits around urgency, communication, and ownership.",
    ],
  },
];

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend Interface",
    icon: Code2,
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Responsive UI",
      "Component systems",
    ],
  },
  {
    title: "Commerce Systems",
    icon: ShoppingCart,
    skills: [
      "Shopify",
      "Liquid",
      "Reusable themes",
      "Storefront UX",
      "Checkout-aware UI",
      "Global brands",
    ],
  },
  {
    title: "Performance Ops",
    icon: Gauge,
    skills: [
      "Core Web Vitals",
      "Bundle awareness",
      "Browser debugging",
      "Accessibility-aware implementation",
      "Production defects",
    ],
  },
  {
    title: "API + Data Layer",
    icon: Server,
    skills: [
      "REST/JSON",
      "Axios",
      "zod",
      "Node.js",
      "Express",
      "Prisma",
      "SQL",
    ],
  },
];

const certifications = [
  "Build AI-Powered Apps - Code With Mosh",
  "Mastering Next.js 13 with TypeScript - Code With Mosh",
  "The Ultimate TypeScript Course - Code With Mosh",
  "React 18 for Beginners - Code With Mosh",
  "The Frontend Developer Career Path - Scrimba",
  "The Web Developer Bootcamp 2023 - Udemy",
];

const contactLinks = {
  email: "mailto:jefferyparledev@gmail.com",
  linkedin: "https://www.linkedin.com/in/jefferyparle/",
  github: "https://github.com/JefferyParle",
} as const;

function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy: string;
}) {
  return (
    <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center text-center">
      <p className="font-mono text-xs font-semibold uppercase tracking-[0.32em] text-cyber-cyan">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-balance text-3xl font-black uppercase text-cyber-paper sm:text-4xl">
        {title}
      </h2>
      <p className="mt-4 text-pretty text-base leading-7 text-cyber-muted">
        {copy}
      </p>
    </div>
  );
}

function LinkButton({
  href,
  children,
  icon: Icon,
  variant = "primary",
}: {
  href: string;
  children: React.ReactNode;
  icon: LucideIcon;
  variant?: "primary" | "secondary";
}) {
  return (
    <a
      className={`hud-button group ${
        variant === "primary" ? "hud-button-primary" : "hud-button-secondary"
      }`}
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
    >
      <Icon aria-hidden="true" className="size-4 shrink-0" />
      <span>{children}</span>
      <ArrowUpRight
        aria-hidden="true"
        className="size-4 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
      />
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-cyber-black text-cyber-paper">
      <header className="sticky top-0 z-50 border-b border-cyber-yellow/20 bg-cyber-black/88 backdrop-blur-xl">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-10">
          <a
            className="font-mono text-sm font-black uppercase tracking-[0.28em] text-cyber-yellow"
            href="#top"
          >
            Parledev
          </a>
          <div className="hidden items-center gap-6 font-mono text-[11px] font-semibold uppercase tracking-[0.22em] text-cyber-muted md:flex">
            <a className="nav-link" href="#work">
              Work
            </a>
            <a className="nav-link" href="#experience">
              Experience
            </a>
            <a className="nav-link" href="#skills">
              Skills
            </a>
            <a className="nav-link" href="#contact">
              Contact
            </a>
          </div>
          <a
            className="inline-flex h-10 items-center gap-2 border border-cyber-cyan/50 px-3 font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-cyber-cyan transition hover:border-cyber-yellow hover:text-cyber-yellow"
            href={contactLinks.email}
          >
            <Mail aria-hidden="true" className="size-4" />
            Ping
          </a>
        </nav>
      </header>

      <section
        id="top"
        className="relative isolate border-b border-cyber-yellow/20 px-5 pb-12 pt-10 sm:px-8 sm:pt-14 lg:px-10"
      >
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_20%,rgba(0,240,255,0.18),transparent_28%),radial-gradient(circle_at_82%_14%,rgba(255,0,60,0.16),transparent_24%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-10 lg:min-h-[72svh] lg:grid-cols-[minmax(0,1fr)_440px]">
          <div>
            <div className="mb-6 inline-flex items-center gap-3 border border-cyber-red/60 bg-cyber-red/10 px-3 py-2 font-mono text-xs font-bold uppercase tracking-[0.18em] text-cyber-red">
              <RadioTower aria-hidden="true" className="size-4" />
              Frontend signal online
            </div>
            <h1 className="max-w-5xl text-balance text-5xl font-black uppercase leading-[0.92] text-cyber-paper sm:text-6xl lg:text-7xl">
              Jeffery Parle
              <span className="block text-cyber-yellow">Software Engineer</span>
            </h1>
            <p className="mt-6 max-w-3xl text-pretty text-lg leading-8 text-cyber-muted sm:text-xl">
              Frontend-leaning engineer building React, TypeScript, Shopify,
              and API-driven ecommerce tools for teams that need reliable UI,
              measurable conversion gains, and production-aware delivery.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <LinkButton href={contactLinks.email} icon={Mail}>
                Contact Jeffery
              </LinkButton>
              <LinkButton
                href={contactLinks.linkedin}
                icon={ExternalLink}
                variant="secondary"
              >
                LinkedIn
              </LinkButton>
              <LinkButton href="#work" icon={Terminal} variant="secondary">
                View Work
              </LinkButton>
            </div>
          </div>

          <div
            aria-label="Abstract neon interface background for the Parledev portfolio"
            className="cyber-panel cyber-visual relative min-h-[420px] overflow-hidden border border-cyber-cyan/50 bg-[url('/neon-grid.png')] bg-cover bg-center p-5 shadow-[0_0_60px_rgba(0,240,255,0.18)]"
            role="img"
          >
            <div className="relative z-10 flex h-full min-h-[380px] flex-col justify-between">
              <div className="flex items-center justify-between font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-cyber-cyan">
                <span>Profile Deck</span>
                <span>Phoenix AZ</span>
              </div>
              <div className="grid gap-3">
                <div className="border-l-4 border-cyber-yellow bg-cyber-black/82 p-4 backdrop-blur">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-cyber-yellow">
                    Primary stack
                  </p>
                  <p className="mt-2 text-2xl font-black uppercase">
                    React / TypeScript / Next.js
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-cyber-black/82 p-4 backdrop-blur">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyber-muted">
                      Commerce
                    </p>
                    <p className="mt-2 text-xl font-black text-cyber-cyan">
                      Shopify
                    </p>
                  </div>
                  <div className="bg-cyber-black/82 p-4 backdrop-blur">
                    <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-cyber-muted">
                      Ops mode
                    </p>
                    <p className="mt-2 text-xl font-black text-cyber-red">
                      Production
                    </p>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-2 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-cyber-muted">
                <span className="border border-cyber-yellow/40 bg-cyber-black/70 px-2 py-2 text-center">
                  API
                </span>
                <span className="border border-cyber-cyan/40 bg-cyber-black/70 px-2 py-2 text-center">
                  UI
                </span>
                <span className="border border-cyber-red/40 bg-cyber-black/70 px-2 py-2 text-center">
                  CWV
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-cyber-yellow/20 bg-cyber-yellow text-cyber-black">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-y divide-cyber-black/20 px-5 sm:px-8 md:grid-cols-4 md:divide-y-0 lg:px-10">
          {metrics.map((metric) => (
            <div key={metric.label} className="py-6 md:px-6">
              <p className="font-mono text-3xl font-black uppercase">
                {metric.value}
              </p>
              <p className="mt-2 max-w-[14rem] text-xs font-bold uppercase tracking-[0.16em]">
                {metric.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section id="work" className="px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Selected builds"
          title="Business tools with storefront instincts"
          copy="The strongest portfolio story is not just the stack. It is the work behind pricing autonomy, partner visibility, international storefront migration, and measurable funnel improvements."
        />
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article className="cyber-card group" key={project.title}>
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] font-bold uppercase tracking-[0.24em] text-cyber-red">
                    {project.label}
                  </p>
                  <h3 className="mt-3 text-2xl font-black uppercase text-cyber-paper">
                    {project.title}
                  </h3>
                </div>
                <BriefcaseBusiness
                  aria-hidden="true"
                  className="size-5 shrink-0 text-cyber-yellow transition group-hover:text-cyber-cyan"
                />
              </div>
              <p className="mt-5 text-sm leading-7 text-cyber-muted">
                {project.description}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.map((item) => (
                  <span className="cyber-chip" key={item}>
                    {item}
                  </span>
                ))}
              </div>
              <ul className="mt-6 grid gap-3 text-sm leading-6 text-cyber-paper/90">
                {project.outcomes.map((item) => (
                  <li className="flex gap-3" key={item}>
                    <BadgeCheck
                      aria-hidden="true"
                      className="mt-0.5 size-4 shrink-0 text-cyber-cyan"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section
        id="experience"
        className="border-y border-cyber-cyan/20 bg-cyber-surface px-5 py-20 sm:px-8 lg:px-10"
      >
        <SectionHeader
          eyebrow="Career log"
          title="Frontend delivery under production pressure"
          copy="Jeffery's background pairs ecommerce UI delivery with operational problem solving: the same instincts that help a team ship visible work without breaking active buying paths."
        />
        <div className="mx-auto max-w-5xl">
          {experience.map((item, index) => (
            <article
              className="relative border-l border-cyber-yellow/40 pb-10 pl-7 last:pb-0"
              key={`${item.company}-${item.role}`}
            >
              <span className="absolute -left-[7px] top-1 size-3 bg-cyber-yellow shadow-[0_0_24px_rgba(252,238,10,0.7)]" />
              <div className="cyber-timeline-item">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-start">
                  <div>
                    <p className="font-mono text-[11px] font-bold uppercase tracking-[0.22em] text-cyber-cyan">
                      {item.signal}_{String(index + 1).padStart(2, "0")}
                    </p>
                    <h3 className="mt-2 text-2xl font-black uppercase text-cyber-paper">
                      {item.role}
                    </h3>
                    <p className="mt-1 text-sm font-bold uppercase tracking-[0.16em] text-cyber-yellow">
                      {item.company}
                    </p>
                  </div>
                  <p className="font-mono text-xs font-bold uppercase tracking-[0.16em] text-cyber-muted">
                    {item.period}
                  </p>
                </div>
                <ul className="mt-5 grid gap-3 text-sm leading-7 text-cyber-muted">
                  {item.details.map((detail) => (
                    <li className="flex gap-3" key={detail}>
                      <span className="mt-3 h-px w-5 shrink-0 bg-cyber-red" />
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section id="skills" className="px-5 py-20 sm:px-8 lg:px-10">
        <SectionHeader
          eyebrow="Skill matrix"
          title="Readable systems, sharp interfaces"
          copy="The site foregrounds the skills most relevant to frontend roles: declarative UI, ecommerce integrations, performance, production debugging, and API-backed workflows."
        />
        <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-4">
          {skillGroups.map((group) => {
            const Icon = group.icon;

            return (
              <article className="cyber-card" key={group.title}>
                <Icon aria-hidden="true" className="size-7 text-cyber-cyan" />
                <h3 className="mt-5 text-xl font-black uppercase text-cyber-paper">
                  {group.title}
                </h3>
                <div className="mt-5 flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span className="cyber-chip" key={skill}>
                      {skill}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mx-auto mt-16 grid max-w-7xl gap-5 lg:grid-cols-[0.8fr_1.2fr]">
          <div className="cyber-panel border border-cyber-red/50 bg-cyber-red/10 p-6">
            <MapPin aria-hidden="true" className="size-7 text-cyber-red" />
            <h3 className="mt-5 text-2xl font-black uppercase text-cyber-paper">
              Phoenix-based frontend engineer
            </h3>
            <p className="mt-4 text-sm leading-7 text-cyber-muted">
              Available for frontend, ecommerce, platform UI, and developer-tool
              work where React, TypeScript, and clear delivery judgment matter.
            </p>
          </div>
          <div className="cyber-panel border border-cyber-cyan/40 bg-cyber-black/60 p-6">
            <p className="font-mono text-xs font-bold uppercase tracking-[0.24em] text-cyber-cyan">
              Certification trace
            </p>
            <div className="mt-5 grid gap-3 md:grid-cols-2">
              {certifications.map((cert) => (
                <div
                  className="border border-cyber-yellow/20 bg-cyber-yellow/[0.04] px-4 py-3 text-sm font-semibold text-cyber-paper/90"
                  key={cert}
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-cyber-yellow/20 bg-cyber-yellow px-5 py-14 text-cyber-black sm:px-8 lg:px-10"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-mono text-xs font-black uppercase tracking-[0.26em]">
              Ready signal
            </p>
            <h2 className="mt-4 max-w-3xl text-balance text-4xl font-black uppercase leading-none sm:text-5xl">
              Build the next Sitewide System with Jeffery.
            </h2>
          </div>
          <div className="flex flex-wrap gap-3">
            <a className="footer-button" href={contactLinks.email}>
              <Mail aria-hidden="true" className="size-4" />
              Email
            </a>
            <a
              className="footer-button"
              href={contactLinks.linkedin}
              rel="noreferrer"
              target="_blank"
            >
              <ExternalLink aria-hidden="true" className="size-4" />
              LinkedIn
            </a>
            <a
              className="footer-button"
              href={contactLinks.github}
              rel="noreferrer"
              target="_blank"
            >
              <ExternalLink aria-hidden="true" className="size-4" />
              GitHub
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
