import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, Bird, Clock, HeartHandshake } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { StatsStrip } from "@/components/stats-strip";
import { TestimonialSlider } from "@/components/testimonial-slider";
import { ProjectSlider } from "@/components/project-slider";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { Badge } from "@/components/ui/badge";
import { services, testimonials } from "@/lib/services";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "SkyWatch Birding Tours — Expert-Led Bird Watching Tours & Workshops",
  description:
    "Small-group bird watching tours led by master guides: guided walks, dawn chorus, migration trips, photography outings, workshops and multi-day excursions. 380+ species, 4.9/5 rating.",
};

const whyUs = [
  {
    icon: Bird,
    title: "Master guides",
    text: "Every tour is led by a certified guide with 10+ years in the field — they find the birds others walk straight past.",
  },
  {
    icon: Clock,
    title: "Small groups, big views",
    text: "Capped at 10 guests with a spotting scope for everyone. No shoulder-to-shoulder crowds, no missed sightings.",
  },
  {
    icon: HeartHandshake,
    title: "Ethics first",
    text: "We never bait, flush or harass birds. Our disturbance-free approach is why rare species keep showing up for us.",
  },
  {
    icon: CheckCircle2,
    title: "Gear included",
    text: "Premium binoculars, scopes, field guides and rain gear are all provided — just bring your curiosity.",
  },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "SkyWatch Birding Tours",
  description:
    "Expert-led bird watching tours including guided walks, dawn chorus tours, migratory bird tours, photography-focused birding, private tours, workshops and multi-day excursions.",
  url: "https://skywatch-birding-tours.amsitservices.com",
  telephone: "+1-555-012-3456",
  email: "hello@skywatchbirding.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "245 Marshview Lane",
    addressLocality: "Lakeside",
    addressRegion: "OR",
    postalCode: "97400",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 43.6, longitude: -124.0 },
  openingHours: "Mo-Su 05:00-20:00",
  priceRange: "$$",
  foundingDate: "2012",
  areaServed: "Southern Oregon coast, wetlands and forests",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "486",
  },
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero */}
      <section className="relative px-4 pb-10 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Badge className="glass border-accent/30 bg-white/60 px-3 py-1 text-xs font-semibold text-primary">
              Expert-led since 2012 &bull; 380+ species sighted
            </Badge>
            <h1 className="mt-5 font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground text-balance sm:text-5xl lg:text-6xl">
              See the sky <span className="text-primary">the way guides see it</span> — one
              lifer at a time.
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
              SkyWatch Birding Tours leads small-group walks, dawn chorus sessions, migration
              trips and photography outings through the region’s richest habitats — with
              master guides, premium optics and ethics that put birds first.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full text-base")}>
                Book a Tour <ArrowRight className="size-4" />
              </Link>
              <Link
                href="/services"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "glass rounded-full border-primary/20 text-base text-primary"
                )}
              >
                Explore Tours
              </Link>
            </div>
            <dl className="mt-10 flex flex-wrap gap-x-10 gap-y-4">
              {[
                ["1,200+", "tours led"],
                ["380+", "species sighted"],
                ["4.9/5", "guest rating"],
              ].map(([v, l]) => (
                <div key={l}>
                  <dt className="sr-only">{l}</dt>
                  <dd className="font-display text-2xl font-bold text-primary">{v}</dd>
                  <dd className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {l}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.15} className="relative">
            <div className="glass-card relative overflow-hidden rounded-3xl p-2">
              <Image
                src="/images/hero-birding.jpg"
                alt="Misty wetlands at dawn with flocks of birds in flight over golden reeds"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full rounded-2xl object-cover"
                priority
              />
              <div className="glass-strong absolute bottom-6 left-6 right-6 flex items-center gap-3 rounded-2xl px-5 py-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-accent/90 text-accent-foreground">
                  <i className="fa-solid fa-dove text-lg" aria-hidden />
                </span>
                <p className="text-sm font-medium leading-snug text-foreground">
                  “A Yellow Rail on day two — a bird I chased for fifteen years.”
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    — Helen M., guided walk guest
                  </span>
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      {/* Services grid */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we offer"
            title="Seven ways to fall in love with birds"
            subtitle="From a two-hour morning walk to a four-day expedition — every tour is led by a master guide and capped at ten guests."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <StaggerItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group flex h-full flex-col rounded-3xl p-7"
                >
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary transition-colors group-hover:bg-accent/90 group-hover:text-accent-foreground">
                    <ServiceIcon name={s.icon} className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {s.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    Learn more <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* Why us */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <Reveal className="order-2 lg:order-1">
              <div className="glass-card relative overflow-hidden rounded-3xl">
                <Image
                  src="/images/experience.jpg"
                  alt="A birder scanning a misty meadow at first light as birds lift off from the grass"
                  width={1024}
                  height={768}
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="h-auto w-full object-cover"
                />
              </div>
            </Reveal>
            <div className="order-1 lg:order-2">
              <SectionHeading
                align="left"
                eyebrow="Why SkyWatch"
                title="The guides locals call when something rare shows up"
                subtitle="We have spent over a decade learning every perch, call and flyway in the region. That knowledge turns an ordinary morning into the one you talk about for years."
              />
              <Stagger className="mt-8 grid gap-5 sm:grid-cols-2" stagger={0.07}>
                {whyUs.map((w) => (
                  <StaggerItem key={w.title}>
                    <div className="glass-card h-full rounded-2xl p-5">
                      <w.icon className="size-6 text-accent" />
                      <h3 className="mt-3 font-display text-base font-bold text-foreground">{w.title}</h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">{w.text}</p>
                    </div>
                  </StaggerItem>
                ))}
              </Stagger>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Field stories"
            title="Expeditions, counts and conservation"
            subtitle="Restored wetlands, seabird colonies and migration studies — see the work behind the sightings."
          />
          <div className="mt-12">
            <ProjectSlider />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Word of mouth"
            title="What our guests say"
            subtitle={`Rated ${testimonials.length ? "4.9" : ""} out of 5 across 486 reviews — because we find the birds and take care of the people.`}
          />
          <div className="mt-12">
            <TestimonialSlider />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Good to know"
            title="Frequently asked questions"
            subtitle="Straight answers about skill levels, seasons, group size and gear."
          />
          <div className="mt-10">
            <FaqAccordion />
          </div>
          <Reveal className="mt-8 text-center text-sm text-muted-foreground">
            Have a different question?{" "}
            <Link href="/contact" className="font-semibold text-accent hover:underline">
              Ask us directly
            </Link>
            .
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
