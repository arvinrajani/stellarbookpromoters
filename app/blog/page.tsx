"use client";

import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Clock, Calendar, ArrowRight } from "lucide-react";
import { Section } from "@/components/Section";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="bg-[#FAF9F7]">
      {/* Hero Section with Featured Image */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0B0B0B] to-[#2E2E2E]">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="inline-block px-4 py-1.5 bg-[#C9A24D] text-[#0B0B0B] text-sm font-semibold uppercase tracking-wider rounded-full">
                Blog & Insights
              </span>
              <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-white leading-tight">
                Publishing Wisdom for Authors Who Mean Business
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Practical guidance on editorial polish, marketing momentum, and author branding from industry veterans with decades of experience.
              </p>
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/blog-rocket-launch.jpg"
                alt="Publishing insights"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <Section className="py-16">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {blogPosts.map((post, idx) => (
              <article
                key={post.slug}
                className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-[#C9A24D]/10 hover:border-[#C9A24D]/30 flex flex-col h-full"
              >
                <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
                  {/* Image container */}
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
                  
                  {/* Content */}
                  <div className="p-6 space-y-4 flex-1 flex flex-col">
                    <h2 className="text-xl font-bold text-[#0B0B0B] group-hover:text-[#C9A24D] transition-colors line-clamp-2">
                      {post.title}
                    </h2>
                    <p className="text-[#4A4A4A] text-sm leading-relaxed line-clamp-3 flex-1">
                      {post.excerpt}
                    </p>
                    
                    {/* Meta info */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#EFE3CF]">
                      <div className="flex items-center gap-4 text-xs text-[#6F6A63]">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <ArrowRight className="h-4 w-4 text-[#C9A24D] group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
