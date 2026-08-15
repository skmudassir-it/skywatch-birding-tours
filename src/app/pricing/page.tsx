import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { FaqAccordion } from "@/components/faq-accordion";
import { CtaBand } from "@/components/cta-band";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Transparent pricing for SkyWatch Birding Tours: guided walks from $45, dawn chorus tours, migration trips, photography outings, private tours, workshops and multi-day excursions.",
};

const plans = [
  {
    name: "Half-Day Tour",
    price: "$45",
    unit: "from, per person",
    features: [
      "Guided birding walks (2 hrs)",
      "Dawn chorus sessions (3 hrs)",
      "Binoculars, scopes and guides included",
      "Max 10 guests per guide",
      "Digital species list included",
      "Kids 12 and under go free",
    ],
    cta: "Book a tour",
    featured: false,
  },
  {
    name: "Full-Day Experience",
    price: "$140",
    unit: "from, per person",
    features: [
      "Migration tours and field days",
      "Photography-focused outings",
      "Purpose-built hides and blinds",
      "Long-range scopes on tripods",
      "Packed field lunch included",
      "Forecast-driven hotspot routing",
    ],
    cta: "Book a day out",
    featured: true,
  },
  {
    name: "Private & Multi-Day",
    price: "$250",
    unit: "from, per group / expedition",
    features: [
      "Private tours, your own guide",
      "Fully customisable itineraries",
      "Birding workshops & classes",
      "4-day expeditions, all inclusive",
      "Lodging, meals and transport",
      "Group discounts for 4+",
    ],
    cta: "Plan your trip",
    featured: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Pricing"
            title="Honest rates, every bird included"
            subtitle="No hidden fees, no surprise add-ons. Every price covers guiding, optics and gear — the only extras are the souvenirs you choose to buy."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto max-w-6xl">
          <Stagger className="grid gap-6 lg:grid-cols-3" stagger={0.09}>
            {plans.map((p) => (
              <StaggerItem key={p.name} className="h-full">
                <div
                  className={cn(
                    "glass-card relative flex h-full flex-col rounded-3xl p-8",
                    p.featured && "border-accent/60 shadow-xl shadow-primary/10"
                  )}
                >
                  {p.featured ? (
                    <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-accent px-4 py-1.5 text-xs font-bold text-accent-foreground shadow-md">
                      <Sparkles className="size-3.5" /> Most popular
                    </span>
                  ) : null}
                  <h2 className="font-display text-xl font-bold text-foreground">{p.name}</h2>
                  <p className="mt-4">
                    <span className="font-display text-4xl font-bold text-primary">{p.price}</span>
                    <span className="ml-2 text-sm text-muted-foreground">{p.unit}</span>
                  </p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                        <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact"
                    className={cn(
                      buttonVariants({ size: "lg" }),
                      "mt-8 w-full rounded-full",
                      p.featured ? "btn-gradient" : "glass border-primary/20 text-primary"
                    )}
                  >
                    {p.cta} <ArrowRight className="size-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal className="mt-12">
            <div className="glass-card rounded-3xl p-8 text-center">
              <h3 className="font-display text-2xl font-bold text-foreground">
                Every tour gives back to the birds
              </h3>
              <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
                A portion of every booking funds wetland restoration and community science in
                our region — the same habitats we take you to see. Birding that leaves the
                birds better off.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-3xl">
          <SectionHeading
            eyebrow="Pricing questions"
            title="What affects your final price"
          />
          <Reveal className="mt-10">
            <FaqAccordion />
          </Reveal>
        </div>
      </section>

      <CtaBand
        title="Want a firm price for your dates?"
        subtitle="Tell us when you would like to go and how many are in your party — we will confirm availability and price within one business day."
      />
    </>
  );
}
