import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { CtaBand } from "@/components/cta-band";
import { services, serviceBySlug } from "@/lib/services";
import { cn } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return { title: "Tour not found" };
  return {
    title: service.name,
    description: service.description,
    openGraph: {
      title: `${service.name} | SkyWatch Birding Tours`,
      description: service.description,
      images: [{ url: service.image, width: 1200, height: 630, alt: service.name }],
    },
  };
}

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== slug).slice(0, 3);

  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
            >
              <ArrowLeft className="size-4" /> All tours
            </Link>
            <div className="mt-5 flex items-center gap-3">
              <span className="flex size-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <ServiceIcon name={service.icon} className="size-6" />
              </span>
              <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-bold text-accent-foreground">
                From {service.priceFrom}
              </span>
            </div>
            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
              {service.name}
            </h1>
            <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted-foreground">
              {service.tagline}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className={cn(buttonVariants({ size: "lg" }), "btn-gradient rounded-full")}>
                Book This Tour <ArrowRight className="size-4" />
              </Link>
              <Link
                href="tel:+15550123456"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "glass rounded-full border-primary/20 text-primary"
                )}
              >
                Call (555) 012-3456
              </Link>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src={service.image}
                alt={service.name}
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="px-4 py-14 sm:py-16">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1fr_20rem]">
          <Reveal className="glass-card rounded-3xl p-8 sm:p-10">
            <h2 className="font-display text-2xl font-bold text-foreground">About this tour</h2>
            <div className="mt-5 space-y-5 text-[15px] leading-relaxed text-foreground/80">
              {service.longDescription.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <h2 className="mt-10 font-display text-2xl font-bold text-foreground">
              What is included
            </h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {service.features.map((f) => (
                <li key={f} className="flex items-start gap-2.5 text-sm text-foreground/80">
                  <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="space-y-6">
            <Reveal delay={0.05}>
              <div className="glass-card rounded-3xl p-7">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-accent">
                  Price from
                </p>
                <p className="mt-2 font-display text-4xl font-bold text-primary">{service.priceFrom}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Per person, all gear included. Group discounts apply for parties of four or
                  more, and private tours are priced per group.
                </p>
                <Link
                  href="/contact"
                  className={cn(buttonVariants({ size: "lg" }), "btn-gradient mt-6 w-full rounded-full")}
                >
                  Book my spot
                </Link>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="font-display text-base font-bold text-foreground">Where we bird</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Coastal headlands, restored wetlands, old-growth forest and mountain meadows —
                  all within a two-hour drive of our base on the southern Oregon coast. Exact
                  meeting points are shared when you book.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="px-4 py-14">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Related tours"
            title="You might also love"
            align="left"
          />
          <Stagger className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3" stagger={0.07}>
            {related.map((s) => (
              <StaggerItem key={s.slug} className="h-full">
                <Link
                  href={`/services/${s.slug}`}
                  className="glass-card group flex h-full flex-col rounded-3xl p-6"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <ServiceIcon name={s.icon} className="size-5" />
                  </span>
                  <h3 className="mt-4 font-display text-base font-bold text-foreground">{s.name}</h3>
                  <p className="mt-2 flex-1 text-sm text-muted-foreground">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent">
                    View tour <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CtaBand
        title={`Ready for ${service.name.toLowerCase()}?`}
        subtitle="Tell us when you would like to go and we will confirm availability within one business day — usually much faster."
      />
    </>
  );
}
