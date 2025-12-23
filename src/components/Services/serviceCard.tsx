"use client";

import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { type ServiceItem } from "./servicesData";
import { Button } from "../ui/button";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { ConnectDialog } from "@/components/connectDialog";
import { Drawer, DrawerTrigger } from "@/components/ui/drawer";
import { motion } from "motion/react";

export function ServiceCard({ service }: { service: ServiceItem }) {
  const [isOpen, setIsOpen] = useState(false);

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
        className=" flex flex-col h-full justify-between transition-colors duration-300 bg-popover group-hover:bg-input shadow-xl rounded-2xl border p-3 gap-2 "
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
        <h3 className="font-medium">{service.title}</h3>

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

      <div className="flex items-center justify-between">
        {service.isPending !== true ? (
          <span className="font-medium ml-1"> {service.price}</span>
        ) : (
          <span />
        )}

        {service.isPending !== true ? (
          <>
            <div className="hidden sm:block">
              <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogTrigger asChild>
                  <Button
                    variant="violet"
                    size="sm"
                    className="z-10 text-sm bg cursor-pointer bg-input"
                  >
                    <p>{service.buttonText}</p>
                  </Button>
                </DialogTrigger>
                <ConnectDialog
                  serviceTitle={service.title}
                  onSuccess={() => setIsOpen(false)}
                />
              </Dialog>
            </div>

            <div className="sm:hidden flex">
              <Drawer open={isOpen} onOpenChange={setIsOpen}>
                <DrawerTrigger asChild>
                  <Button
                    variant="violet"
                    size="sm"
                    className="z-10 bg-input text-sm cursor-pointer"
                  >
                    <p>{service.buttonText}</p>
                  </Button>
                </DrawerTrigger>
                <ConnectDialog
                  serviceTitle={service.title}
                  onSuccess={() => setIsOpen(false)}
                />
              </Drawer>
            </div>
          </>
        ) : (
          <Button
            variant="violet"
            size="sm"
            className="z-10 bg-input text-sm cursor-pointer"
            disabled
          >
            <p>Coming Soon</p>
          </Button>
        )}
      </div>
    </div>
  );
}
