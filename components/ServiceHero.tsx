"use client";

import Image from "next/image";
import { Button } from "@/components/Buttons";
import { useModal } from "@/components/ModalProvider";

export function ServiceHero({
  title,
  subtext,
  category
}: {
  title: string;
  subtext: string;
  category: string;
}) {
  const { openQuote, openChat } = useModal();

  return (
    <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
      <div className="space-y-5">
        <p className="text-sm uppercase tracking-[0.3em] text-gold">{category}</p>
        <h1 className="text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="text-muted md:text-lg">{subtext}</p>
        <div className="flex flex-wrap gap-3">
          <Button onClick={openQuote}>Get Started</Button>
          <Button variant="secondary" onClick={openChat}>
            Let's Chat
          </Button>
        </div>
      </div>
      <div className="card overflow-hidden">
        <Image
          src="/images/service-hero.svg"
          alt={title}
          width={520}
          height={420}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
