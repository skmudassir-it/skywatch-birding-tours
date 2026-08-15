import type { Metadata } from "next";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Reveal } from "@/components/motion";
import { SectionHeading } from "@/components/section-heading";
import { QuoteForm } from "@/components/quote-form";
import { ContactForm } from "@/components/contact-form";
import { CtaBand } from "@/components/cta-band";

export const metadata: Metadata = {
  title: "Contact & Booking",
  description:
    "Book a tour with SkyWatch Birding Tours — guided walks, dawn chorus, migration trips, photography outings, workshops and multi-day excursions on the southern Oregon coast.",
};

export default function ContactPage() {
  return (
    <>
      <section className="px-4 pb-8 pt-36 sm:pt-40">
        <div className="mx-auto max-w-6xl">
          <SectionHeading
            eyebrow="Contact & booking"
            title="Tell us when you want to go birding"
            subtitle="Request a booking or just ask a question. Real guides answer — usually within the hour during business time."
          />
        </div>
      </section>

      <section className="px-4 py-10 sm:py-14">
        <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-5">
          <Reveal className="lg:col-span-3">
            <div className="glass-card rounded-3xl p-7 sm:p-9">
              <h2 className="font-display text-2xl font-bold text-foreground">Request a booking</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Tell us which tour you are interested in and your preferred dates.
              </p>
              <div className="mt-7">
                <QuoteForm />
              </div>
            </div>
          </Reveal>

          <div className="space-y-6 lg:col-span-2">
            <Reveal delay={0.05}>
              <div className="glass-card rounded-3xl p-7">
                <h2 className="font-display text-xl font-bold text-foreground">Reach us directly</h2>
                <ul className="mt-5 space-y-4 text-sm text-foreground/80">
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Phone className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Booking line</p>
                      <a href="tel:+15550123456" className="hover:text-accent">(555) 012-3456</a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Mail className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Email</p>
                      <a href="mailto:hello@skywatchbirding.com" className="hover:text-accent">
                        hello@skywatchbirding.com
                      </a>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <MapPin className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Base & meeting point</p>
                      <p>245 Marshview Lane, Lakeside, OR 97400</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                      <Clock className="size-4" />
                    </span>
                    <div>
                      <p className="font-semibold text-foreground">Hours</p>
                      <p>Daily 5am–8pm &bull; Tours run dawn to dusk</p>
                    </div>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass-card relative overflow-hidden rounded-3xl p-2">
                <Image
                  src="/images/cta-contact.jpg"
                  alt="A birder silhouette on a lake shore at sunrise watching birds in flight"
                  width={1024}
                  height={640}
                  sizes="(min-width: 1024px) 40vw, 100vw"
                  className="h-44 w-full rounded-2xl object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="glass-card rounded-3xl p-7">
                <h3 className="font-display text-lg font-bold text-foreground">Prefer email?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Use the quick form below and we will reply within one business day.
                </p>
                <div className="mt-5">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Migration season is the busiest — book early"
        subtitle="Our peak weekends sell out weeks ahead. Send your dates today and we will hold your spots."
        image="/images/service-migration.jpg"
      />
    </>
  );
}
