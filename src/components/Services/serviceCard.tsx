import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { type ServiceItem } from "./servicesData";
import { Button } from "../ui/button";

import { motion } from "motion/react";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div
      className={`group flex flex-col justify-between gap-2 overflow-hidden hover:scale-101
    hover:bg-popover rounded-3xl p-3 bg-card border border-border transition-all duration-300 ${
      service.isPending === true && "opacity-50 pointer-events-none select-none"
    }`}
    >
      {/* Image Container */}
      {/* <div className="relative h-40 w-full rounded-2xl border border-border overflow-hidden ">
        <Image
          src={"/cover3.webp"}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b to-neutral-900/80" />
      </div> */}

      {/* Content Container */}

      <motion.div
        className=" flex flex-col h-full justify-between transition-colors duration-300 bg-popover group-hover:bg-input group-hover:shadow-xl rounded-2xl border p-3 gap-2 "
        initial={{ opacity: 0, y: 4 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{
          type: "spring",
          stiffness: 120,
          damping: 14,
          duration: 0.6,
        }}
      >
        {/* Title */}
        <h3 className="font-medium">{service.title}</h3>

        {/* Description */}
        <p className="text-sm mb-auto leading-relaxed text-muted-foreground">
          {service.description}
        </p>
        <div className="flex text-sm gap-2 items-center   py-1">
          {service.icons.map((Icon, index) => (
            <Icon key={index} size={18} />
          ))}
        </div>
      </motion.div>

      <div className="flex flex-col">
        {service.features.map((feature, index) => (
          <div key={index} className="text-sm p-1 flex items-center gap-2">
            <CheckCircle2 size={16} /> {feature}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between ">
        {service.isPending !== true ? (
          <span className="font-medium ml-1"> {service.price}</span>
        ) : (
          <span />
        )}

        <Link href={service.buttonHref}>
          <Button
            variant="secondary"
            size="sm"
            className="z-10 transition-all duration-300 bg-input
                        hover:bg-ring text-sm   rounded-full flex justify-between items-center cursor-pointer"
          >
            {service.isPending === true ? (
              <p>Coming Soon</p>
            ) : (
              <>
                <p>{service.buttonText}</p>
              </>
            )}
          </Button>
        </Link>
      </div>
    </div>
  );
}
