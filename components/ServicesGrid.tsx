"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Service } from "@/data/services";

export function ServicesGrid({
  services,
  title,
  description
}: {
  services: Service[];
  title?: string;
  description?: string;
}) {
  return (
    <div className="space-y-8">
      {title && (
        <div className="max-w-2xl space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-gold">Services</p>
          <h2 className="text-3xl font-semibold md:text-4xl">{title}</h2>
          {description ? <p className="text-muted">{description}</p> : null}
        </div>
      )}
      <motion.div 
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
      >
        {services.map((service, index) => (
          <motion.div
            key={service.id}
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 }
            }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <motion.div
              whileHover={{
                y: -8,
                scale: 1.02,
                boxShadow: "0 20px 40px rgba(0,0,0,0.45)"
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group card flex h-full flex-col gap-5 p-6 transition-all duration-300 hover:shadow-xl"
              >
                <motion.div
                  className="flex items-center justify-between"
                  whileHover={{ x: 2 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.span
                    className="text-xs uppercase tracking-[0.25em] text-gold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {service.category}
                  </motion.span>
                  <motion.div
                    whileHover={{ x: 4, y: -4, rotate: 12 }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="h-4 w-4 text-muted transition-colors group-hover:text-gold" />
                  </motion.div>
                </motion.div>
                <motion.h3
                  className="text-2xl font-semibold group-hover:text-gold transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.title}
                </motion.h3>
                <motion.p
                  className="text-sm text-muted"
                  whileHover={{ y: -1 }}
                  transition={{ duration: 0.2 }}
                >
                  {service.summary}
                </motion.p>
                <motion.div
                  className="relative mt-auto overflow-hidden rounded-xl border border-borderGold/30 group-hover:border-gold/50 transition-colors"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Image
                      src="/images/service-excellence.svg"
                      alt={service.title}
                      width={480}
                      height={260}
                      className="h-40 w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </motion.div>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-t from-ink/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
