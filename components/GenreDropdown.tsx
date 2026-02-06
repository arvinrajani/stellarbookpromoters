"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { BookOpen } from "lucide-react";
import { genreBooks } from "@/data/site";

interface GenreDropdownProps {
  genres: string[];
}

export function GenreDropdown({ genres }: GenreDropdownProps) {
  const [activeGenre, setActiveGenre] = useState(() => genres[0] ?? "");

  const books = useMemo(() => {
    if (!activeGenre) {
      return [];
    }
    return genreBooks[activeGenre as keyof typeof genreBooks] ?? [];
  }, [activeGenre]);

  if (genres.length === 0) {
    return null;
  }

  return (
    <div className="space-y-8">
      {/* Genre tabs */}
      <div className="flex items-center gap-2 overflow-x-auto py-2 justify-start md:justify-center">
        {genres.map((genre) => {
          const isActive = genre === activeGenre;
          return (
            <button
              key={genre}
              type="button"
              onClick={() => setActiveGenre(genre)}
              aria-pressed={isActive}
              className={`shrink-0 rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 border ${
                isActive
                  ? "bg-metallicGold text-richBlack border-metallicGold"
                  : "bg-white text-[#1A1A1A] border-gray-200 hover:border-metallicGold hover:text-metallicGold"
              }`}
            >
              {genre}
            </button>
          );
        })}
      </div>

      {/* Count display */}
      <div className="text-center text-sm text-[#6F6A63]">
        Showing <span className="font-semibold text-metallicGold">{books.length}</span> titles in{" "}
        <span className="font-semibold text-richBlack">{activeGenre}</span>.
      </div>

      {/* Book grid */}
      {books.length > 0 ? (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {books.map((book, index) => (
            <div
              key={`${activeGenre}-${index}`}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              {/* Book cover */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <Image
                  src={book.cover}
                  alt={book.title}
                  fill
                  sizes="(max-width: 1024px) 50vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  unoptimized
                />
              </div>
              
              {/* Book info */}
              <div className="p-4">
                <h4 className="font-semibold text-richBlack text-sm leading-tight mb-1">{book.title}</h4>
                <p className="text-xs text-[#6F6A63] mb-1">by {book.author}</p>
                {book.published && <p className="text-xs text-metallicGold font-medium">{book.published}</p>}
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-10 text-[#6F6A63]">
          <BookOpen className="w-12 h-12 mx-auto mb-4 text-metallicGold/60" />
          <p>Books coming soon for this genre.</p>
        </div>
      )}

      {/* CTA */}
      <div className="text-center pt-4">
        <p className="text-[#6F6A63]">
          Want to see your book in one of these genres?{" "}
          <a href="/contact" className="text-metallicGold hover:underline font-medium">
            Get in touch
          </a>
        </p>
      </div>
    </div>
  );
}
