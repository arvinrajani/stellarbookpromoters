"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Award, Check, Clock, Globe, Mail, Phone, Sparkles, TrendingUp } from "lucide-react";
import { Hero } from "@/components/Hero";
import { TrustBadges } from "@/components/TrustBadges";
import { Section } from "@/components/Section";
import { ServicesTabs } from "@/components/ServicesTabs";
import { MarketingTabs } from "@/components/MarketingTabs";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/Reveal";
import { ButtonLink } from "@/components/Buttons";
import { FAQAccordion } from "@/components/FAQAccordion";
import { LeadCaptureSection } from "@/components/LeadCaptureSection";
import { GenreDropdown } from "@/components/GenreDropdown";
import { homeCopy } from "@/data/site";
import { blogPosts } from "@/data/blog";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";

const blogPreview = blogPosts.slice(0, 3);
const contactIcons = [Phone, Mail, Clock, Globe];

export function HomePage() {
  const dreamPillars = [
    { label: "Authority", icon: Award },
    { label: "Visibility", icon: TrendingUp },
    { label: "Legacy", icon: Sparkles }
  ];
  const dreamHeadline = homeCopy.dreamSection.headline;
  const dreamHighlight = "authors";
  const dreamParts = dreamHeadline.split(dreamHighlight);

  return (
    <>
      <Hero />

      <Section className="relative overflow-hidden bg-gradient-to-b from-[#FAF9F7] to-[#EFE3CF]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 left-10 h-56 w-56 rounded-full bg-[#C9A24D]/10 blur-3xl orb" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#EFE3CF] blur-3xl orb orb-slow" />
        </div>
        <div className="container relative">
          <Reveal className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
            <div className="space-y-7">
              <p className="text-xs uppercase tracking-[0.35em] text-[#C9A24D] font-semibold">
                {homeCopy.dreamSection.eyebrow}
              </p>
              <h2 className="text-4xl font-semibold md:text-5xl lg:text-6xl text-[#0B0B0B] leading-[1.05]">
                {dreamParts.length === 2 ? (
                  <>
                    {dreamParts[0]}
                    <motion.span
                      className="inline-block text-transparent bg-clip-text bg-[linear-gradient(120deg,#0B0B0B_0%,#0B0B0B_35%,#C9A24D_50%,#0B0B0B_65%,#0B0B0B_100%)]"
                      style={{ backgroundSize: "200% 100%" }}
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
                      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    >
                      {dreamHighlight}
                    </motion.span>
                    {dreamParts[1]}
                  </>
                ) : (
                  dreamHeadline
                )}
              </h2>
              <p className="text-lg md:text-xl text-[#4A4A4A] leading-relaxed">
                {homeCopy.dreamSection.subtext}
              </p>
              <div className="space-y-3 text-[#5B564F] text-base md:text-lg leading-relaxed">
                <p>{homeCopy.dreamSection.body}</p>
                <p>{homeCopy.dreamSection.support}</p>
              </div>
              <div className="flex flex-wrap gap-3">
                {dreamPillars.map((pillar) => {
                  const Icon = pillar.icon;
                  return (
                    <div
                      key={pillar.label}
                      className="inline-flex items-center gap-2 rounded-full border border-[#C9A24D]/30 bg-white/80 px-4 py-2 text-xs font-semibold text-[#0B0B0B] shadow-sm"
                    >
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0B0B0B] text-[#C9A24D]">
                        <Icon className="h-3.5 w-3.5" />
                      </span>
                      {pillar.label}
                    </div>
                  );
                })}
              </div>
              <div className="rounded-2xl border border-[#C9A24D]/25 bg-[#0B0B0B] p-5 text-white shadow-[0_18px_40px_rgba(11,11,11,0.25)]">
                <p className="text-xs uppercase tracking-[0.3em] text-[#C9A24D] font-semibold">
                  {homeCopy.dreamSection.highlightTitle}
                </p>
                <p className="mt-2 text-sm text-white/80">
                  {homeCopy.dreamSection.highlightBody}
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute -top-10 -right-10 h-44 w-44 rounded-full bg-[#C9A24D]/15 blur-3xl orb" />
              <div className="pointer-events-none absolute -bottom-12 -left-10 h-48 w-48 rounded-full bg-[#EFE3CF] blur-3xl orb orb-slow" />
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                className="relative overflow-hidden rounded-[30px] border border-[#C9A24D]/35 bg-white p-5 shadow-[0_30px_70px_rgba(11,11,11,0.25)]"
              >
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top,rgba(201,162,77,0.2),transparent_60%)]" />
                <Image
                  src="/images/books/dream-section.png"
                  alt="Dream-driven publishing"
                  width={1200}
                  height={675}
                  className="relative w-full h-auto object-cover rounded-2xl"
                />
              </motion.div>
            </div>
          </Reveal>
        </div>
      </Section>

      <section className="relative overflow-hidden py-16 md:py-24 bg-[#FAF9F7]" id="services">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 left-10 h-56 w-56 rounded-full bg-[#C9A24D]/10 blur-3xl orb" />
          <div className="absolute -bottom-24 right-0 h-64 w-64 rounded-full bg-[#EFE3CF] blur-3xl orb orb-slow" />
          <div className="absolute inset-0 ambient-grid" />
        </div>
        <div className="container relative">
          <Reveal className="text-center space-y-3 mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C9A24D] font-medium">Our Expertise</p>
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-[#0B0B0B]">
              Complete Book <span className="text-[#C9A24D]">Promotion</span> Solutions
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              From publishing to marketing, we handle every aspect of your book's success
            </p>
          </Reveal>
          <div className="relative z-10">
            <ServicesTabs />
            <div className="mt-16">
              <MarketingTabs />
            </div>
          </div>
        </div>
      </section>

      <Section className="bg-beige relative overflow-hidden" id="genres">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-20 top-12 h-56 w-56 rounded-full bg-[#C9A24D]/10 blur-3xl orb" />
        </div>
        <Reveal className="relative z-10 space-y-6">
          <div className="text-center space-y-4">
            <p className="text-sm uppercase tracking-[0.3em] text-metallicGold">Portfolio</p>
            <h2 className="text-3xl font-semibold md:text-4xl text-richBlack">{homeCopy.genreSpecialties.title}</h2>
            <p className="text-[#6F6A63] max-w-2xl mx-auto">{homeCopy.genreSpecialties.body}</p>
          </div>
          <GenreDropdown genres={homeCopy.genreSpecialties.items} />
        </Reveal>
      </Section>

      <Section>
        <Reveal className="space-y-10">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C9A24D] font-medium">Why Choose Us</p>
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-[#0B0B0B]">
              {homeCopy.publishConfidence.title}
            </h2>
            <p className="text-lg text-[#4A4A4A] leading-relaxed">{homeCopy.publishConfidence.body}</p>
          </div>

          <TrustBadges />

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 mt-12">
            {homeCopy.whyChoose.bullets.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true, amount: 0.2 }}
                whileHover={{ y: -6 }}
                className="group relative rounded-2xl border border-[#C9A24D]/20 bg-white/90 p-6 shadow-[0_12px_30px_rgba(11,11,11,0.08)] transition-all duration-300 hover:border-[#C9A24D]/45 hover:shadow-[0_20px_40px_rgba(11,11,11,0.14)]"
              >
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,162,77,0.18),transparent_60%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex h-full flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-richBlack text-metallicGold text-xs font-semibold tabular-nums">
                      {index + 1}
                    </div>
                    <div className="h-px flex-1 bg-gradient-to-r from-[#C9A24D]/60 to-transparent" />
                  </div>
                  <p className="text-[#2E2E2E] font-medium leading-relaxed">{item}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Reveal>
      </Section>

      {/* Testimonials Section - Single, professional testimonials section */}
      <section className="relative overflow-hidden py-16 md:py-24 bg-[#FAF9F7]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-0 h-64 w-64 rounded-full bg-[#C9A24D]/10 blur-3xl orb" />
          <div className="absolute -bottom-32 left-10 h-72 w-72 rounded-full bg-[#EFE3CF] blur-3xl orb orb-slow" />
        </div>
        <div className="container relative">
          <Reveal className="text-center space-y-4 mb-4">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C9A24D] font-medium">Success Stories</p>
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-[#0B0B0B]">
              Proven Results That Speak Volumes
            </h2>
            <p className="text-lg text-[#4A4A4A] max-w-2xl mx-auto">
              Real achievements from authors who trusted us with their publishing journey
            </p>
          </Reveal>
          <TestimonialsCarousel />
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24 bg-gradient-to-b from-[#EFE3CF] to-[#FAF9F7]">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-16 left-0 h-56 w-56 rounded-full bg-[#C9A24D]/10 blur-3xl orb" />
          <div className="absolute -bottom-24 right-0 h-72 w-72 rounded-full bg-[#EFE3CF] blur-3xl orb orb-slow" />
        </div>
        <div className="container relative">
          <Reveal className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
            <div className="space-y-4 max-w-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-[#C9A24D] font-medium">Latest Blog</p>
              <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-[#0B0B0B]">
                {homeCopy.blogSection.title}
              </h2>
              <p className="text-lg text-[#4A4A4A]">{homeCopy.blogSection.body}</p>
            </div>
            <ButtonLink href="/blog" variant="secondary" className="self-start md:self-auto">
              View All Articles
              <ArrowUpRight className="h-4 w-4" />
            </ButtonLink>
          </Reveal>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogPreview.map((post, idx) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#C9A24D]/10 hover:border-[#C9A24D]/30"
              >
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="relative h-52 overflow-hidden">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#C9A24D] text-[#0B0B0B] text-xs font-semibold uppercase tracking-wider rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 space-y-4">
                    <h3 className="text-xl font-bold text-[#0B0B0B] group-hover:text-[#C9A24D] transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-[#EFE3CF]">
                      <span className="text-sm text-[#6F6A63]">{post.date}</span>
                      <span className="text-sm font-medium text-[#C9A24D]">{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-16 md:py-24 bg-[#0B0B0B]" id="contact">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 right-10 h-56 w-56 rounded-full bg-[#C9A24D]/15 blur-3xl orb" />
          <div className="absolute -bottom-24 left-0 h-64 w-64 rounded-full bg-[#C9A24D]/10 blur-3xl orb orb-slow" />
        </div>
        <div className="container relative">
          <Reveal className="grid gap-12 lg:grid-cols-2 items-start">
            <div className="space-y-8">
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-[0.3em] text-[#C9A24D] font-medium">Get In Touch</p>
                <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-white">
                  {homeCopy.contactSection.title}
                </h2>
                <p className="text-lg text-gray-300 leading-relaxed">{homeCopy.contactSection.body}</p>
              </div>

              <div className="space-y-4">
                {homeCopy.contactSection.details.map((detail, idx) => {
                  const Icon = contactIcons[idx] ?? Mail;
                  const [label, ...rest] = detail.split(":");
                  const value = rest.join(":").trim();
                  const lowerLabel = label.toLowerCase();
                  const isPhone = lowerLabel === "phone";
                  const isEmail = lowerLabel === "email";
                  const phoneHref = value ? `tel:${value.replace(/[^+\\d]/g, "")}` : "tel:+12898097930";
                  const emailHref = value ? `mailto:${value}` : "mailto:info@stellarbookpromoter.com";
                  return (
                    <div key={detail} className="flex items-center gap-4 text-gray-300">
                      <div className="w-10 h-10 rounded-full bg-[#C9A24D]/20 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-5 w-5 text-[#C9A24D]" />
                      </div>
                      {isPhone ? (
                        <a
                          href={phoneHref}
                          className="hover:text-white transition-colors"
                          aria-label={`Call ${value || "+1 289 809 7930"}`}
                        >
                          {detail}
                        </a>
                      ) : isEmail ? (
                        <a href={emailHref} className="hover:text-white transition-colors">
                          {detail}
                        </a>
                      ) : (
                        <span>{detail}</span>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="p-6 rounded-xl bg-[#1A1A1A] border border-[#C9A24D]/20">
                <div className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                  <Check className="mt-0.5 h-4 w-4 text-[#C9A24D]" />
                  <span>{homeCopy.contactSection.subtext}</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <LeadCaptureSection minimal />
            </div>
          </Reveal>
        </div>
      </section>

      <Section className="bg-[#FAF9F7] relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#C9A24D]/10 blur-3xl" />
          <div className="absolute -bottom-24 left-0 h-72 w-72 rounded-full bg-[#EFE3CF] blur-3xl" />
          <div className="absolute inset-x-16 top-10 h-px soft-divider" />
        </div>
        <Reveal className="relative max-w-4xl mx-auto">
          <div className="text-center space-y-4 mb-12">
            <p className="text-sm uppercase tracking-[0.3em] text-[#C9A24D] font-medium">FAQ</p>
            <h2 className="text-3xl font-semibold md:text-4xl lg:text-5xl text-[#0B0B0B]">
              {homeCopy.generalFaqs.title}
            </h2>
            <p className="text-[#4A4A4A] text-lg max-w-2xl mx-auto">{homeCopy.generalFaqs.body}</p>
          </div>
          <div className="relative">
            <FAQAccordion items={homeCopy.generalFaqs.items} />
          </div>
        </Reveal>
      </Section>

      <CTASection
        title="Ready to build a standout book launch?"
        description="Share your goals and timeline. We will craft a premium plan tailored to your genre and audience."
      />
    </>
  );
}
