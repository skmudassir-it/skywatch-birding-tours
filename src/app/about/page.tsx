import type { Metadata } from "next";
import Image from "next/image";
import { Award, Users, Leaf, Eye } from "lucide-react";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { StatsStrip } from "@/components/stats-strip";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "SkyWatch Birding Tours is a team of certified master guides on the southern Oregon coast, leading bird watching tours, workshops and expeditions since 2012.",
};

const values = [
  {
    icon: Eye,
    title: "Fieldcraft",
    text: "Reading habitat, light and behaviour is what turns a walk into a sighting. Our guides carry over a decade of local knowledge on every trail.",
  },
  {
    icon: Users,
    title: "Guests first",
    text: "Small groups, patient teaching and a scope view for everyone. Whether you are counting your first bird or your 700th, you matter equally.",
  },
  {
    icon: Leaf,
    title: "Conservation",
    text: "A portion of every tour funds wetland restoration and community science. We bird ethically, and we give back to the birds we love.",
  },
  {
    icon: Award,
    title: "Excellence",
    text: "Certified guides, 486 five-star reviews and a 4.9/5 rating — earned one careful, joyful morning at a time since 2012.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-accent">Our story</p>
            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground text-balance sm:text-5xl">
              A decade of dawns, told in birdsong.
            </h1>
            <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-muted-foreground">
              <p>
                SkyWatch Birding Tours started in 2012 with one guide, a spotting scope and a
                simple promise: share the region’s birds the way locals see them — slowly,
                ethically and with joy. Twelve years later, that promise has led more than
                1,200 tours and 380+ species across the coast, wetlands and forests.
              </p>
              <p>
                We are still a small team of certified master guides, still cap every group at
                ten, and still answer our own phones. When you tour with SkyWatch, you spend
                the day with the people who know exactly where the birds will be.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/about-guides.jpg"
                alt="SkyWatch guides on a misty forest trail at dawn holding binoculars"
                width={1024}
                height={768}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
                priority
              />
            </div>
          </Reveal>
        </div>
      </section>

      <StatsStrip />

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="What we stand for"
            title="The values behind every sighting"
            subtitle="Four principles that have carried us through a decade of fog, frost and perfect golden mornings."
          />
          <Stagger className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4" stagger={0.08}>
            {values.map((v) => (
              <StaggerItem key={v.title} className="h-full">
                <div className="glass-card h-full rounded-3xl p-7">
                  <span className="flex size-12 items-center justify-center rounded-2xl bg-accent/15 text-accent-foreground">
                    <v.icon className="size-6" />
                  </span>
                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">{v.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{v.text}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="px-4 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-2">
          <Reveal className="order-2 lg:order-1">
            <div className="glass-card overflow-hidden rounded-3xl">
              <Image
                src="/images/project-wetlands.jpg"
                alt="Restored wetlands at sunrise teeming with waterbirds"
                width={1024}
                height={640}
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="h-auto w-full object-cover"
              />
            </div>
          </Reveal>
          <div className="order-1 lg:order-2">
            <SectionHeading
              align="left"
              eyebrow="The team"
              title="Meet the guides behind the scope"
              subtitle="Every SkyWatch guide is a certified birding professional with 10+ years in the field — and they genuinely cannot wait for your tour."
            />
            <Stagger className="mt-8 space-y-4" stagger={0.08}>
              {[
                ["Mara Ellison", "Founder & Master Guide — 12 years, 1,000+ tours, Oregon state list #2"],
                ["Jonas Whitfield", "Head of Photography Tours — former field biologist, published in BirdWatching"],
                ["Amara Chen", "Workshops Lead — ornithology instructor and eBird reviewer"],
                ["Leo Sandoval", "Expedition Lead — 4 continents, 2,100+ world species"],
              ].map(([name, role]) => (
                <StaggerItem key={name}>
                  <div className="glass-card flex items-center gap-4 rounded-2xl p-5">
                    <span className="flex size-12 shrink-0 items-center justify-center rounded-full bg-primary/10 font-display text-lg font-bold text-primary">
                      {name.split(" ").map((n) => n[0]).join("")}
                    </span>
                    <div>
                      <p className="font-display text-base font-bold text-foreground">{name}</p>
                      <p className="text-sm text-muted-foreground">{role}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <CtaBand
        title="Spend a morning with people who live for it"
        subtitle="Join 4,000+ happy birders. Book a walk, a workshop or a full expedition — we will take care of everything."
      />
    </>
  );
}
