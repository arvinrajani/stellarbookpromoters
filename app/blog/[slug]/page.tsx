import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import { Section } from "@/components/Section";
import { blogPosts, getPostBySlug } from "@/data/blog";
import { createMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = getPostBySlug(params.slug);
  if (!post) {
    return createMetadata({
      title: "Blog",
      description: "Publishing insights from Stellar Book Promoters.",
      path: `/blog/${params.slug}`
    });
  }
  return createMetadata({
    title: post.title,
    description: post.excerpt,
    path: `/blog/${post.slug}`
  });
}

function renderContent(text: string) {
  // Handle markdown-style formatting
  if (text.startsWith('# ')) {
    return <h1 className="text-4xl font-bold text-[#0B0B0B] mt-8 mb-4">{text.replace(/^# /, '')}</h1>;
  }
  if (text.startsWith('## ')) {
    return <h2 className="text-3xl font-bold text-[#0B0B0B] mt-8 mb-4">{text.replace(/^## /, '')}</h2>;
  }
  if (text.startsWith('### ')) {
    return <h3 className="text-2xl font-bold text-[#2E2E2E] mt-6 mb-3">{text.replace(/^### /, '')}</h3>;
  }
  if (text.startsWith('**') && text.endsWith('**')) {
    return <p className="font-bold text-[#0B0B0B] text-lg mt-4 mb-2">{text.replace(/\*\*/g, '')}</p>;
  }
  
  // Regular paragraphs with bold inline text
  const parts = text.split(/(\*\*.*?\*\*)/g);
  return (
    <p className="text-[#4A4A4A] leading-relaxed text-lg mb-4">
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i} className="font-semibold text-[#0B0B0B]">{part.replace(/\*\*/g, '')}</strong>;
        }
        return part;
      })}
    </p>
  );
}

export default function BlogDetailPage({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);
  if (!post) {
    notFound();
  }

  return (
    <div className="bg-[#FAF9F7]">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-[#0B0B0B] to-[#2E2E2E]">
        <div className="container max-w-4xl">
          <Link 
            href="/blog"
            className="inline-flex items-center gap-2 text-[#C9A24D] hover:text-[#E8D5A3] transition-colors mb-8 group"
          >
            <ArrowLeft className="h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>
          
          <div className="space-y-6">
            <span className="inline-block px-4 py-1.5 bg-[#C9A24D] text-[#0B0B0B] text-sm font-semibold uppercase tracking-wider rounded-full">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold md:text-5xl lg:text-6xl text-white leading-tight">
              {post.title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              {post.excerpt}
            </p>
            <div className="flex flex-wrap gap-6 text-gray-400">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{post.readTime}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <Section className="py-16">
        <div className="container max-w-4xl">
          <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12 lg:p-16">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => (
                <div key={index}>
                  {renderContent(paragraph)}
                </div>
              ))}
            </div>

            {/* Author CTA */}
            <div className="mt-16 p-8 bg-gradient-to-br from-[#EFE3CF] to-[#FAF9F7] rounded-xl border-2 border-[#C9A24D]/20">
              <h3 className="text-2xl font-bold text-[#0B0B0B] mb-3">Ready to Launch Your Book?</h3>
              <p className="text-[#4A4A4A] mb-6 leading-relaxed">
                Our team of publishing experts is ready to help you turn your manuscript into a bestseller. Get a free consultation and custom publishing plan tailored to your goals.
              </p>
              <Link
                href="/contact"
                className="inline-block px-8 py-4 bg-[#C9A24D] text-[#0B0B0B] font-bold rounded-lg hover:bg-[#8B6914] hover:text-white transition-all shadow-md hover:shadow-xl"
              >
                Get Your Free Quote →
              </Link>
            </div>
          </article>

          {/* Related Posts */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-[#0B0B0B] mb-8">More Insights</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {blogPosts
                .filter(p => p.slug !== post.slug)
                .slice(0, 2)
                .map(relatedPost => (
                  <Link
                    key={relatedPost.slug}
                    href={`/blog/${relatedPost.slug}`}
                    className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-[#C9A24D]/10 hover:border-[#C9A24D]/30"
                  >
                    <div className="p-6">
                      <span className="text-xs uppercase tracking-wider text-[#C9A24D] font-semibold">
                        {relatedPost.category}
                      </span>
                      <h3 className="text-xl font-bold text-[#0B0B0B] mt-2 mb-3 group-hover:text-[#C9A24D] transition-colors">
                        {relatedPost.title}
                      </h3>
                      <p className="text-[#6F6A63] text-sm line-clamp-2">
                        {relatedPost.excerpt}
                      </p>
                      <div className="flex items-center gap-2 mt-4 text-sm text-[#C9A24D]">
                        <span>{relatedPost.readTime}</span>
                        <span>→</span>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
