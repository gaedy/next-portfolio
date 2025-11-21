import { Check, CheckCircle, CheckCircle2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ServiceItem } from "./servicesData";
import { Button } from "../ui/button";

export function ServiceCard({ service }: { service: ServiceItem }) {
  return (
    <div className="group flex flex-col justify-between gap-3 overflow-hidden hover:bg-popover rounded-3xl p-3 bg-card border border-border transition-all duration-300">
      {/* Image Container */}
      <div className="relative h-40 w-full rounded-2xl border border-border overflow-hidden ">
        <Image
          src={"/cover3.webp"}
          alt={service.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b  to-neutral-900/80" />
      </div>

      {/* Content Container */}

      <div className=" flex flex-col gap-2 mb-auto  px-1">
        {/* Title */}
        <h3 className="">{service.title}</h3>

        {/* Description */}
        <p className="text-sm leading-relaxed text-muted-foreground">
          {service.description}
        </p>
      </div>

      <div className="flex items-center justify-between ">
        <span className="">{service.price}</span>

        <Link href={service.buttonHref}>
          <Button
            variant="secondary"
            size="sm"
            className="z-10  transition-all duration-300 bg-input
                        hover:bg-ring text-sm rounded-full flex justify-between items-center cursor-pointer"
          >
            <p>{service.buttonText}</p>
          </Button>
        </Link>
      </div>
    </div>
  );
}
