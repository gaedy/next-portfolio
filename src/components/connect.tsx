"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MessageSquareShare, Send, SendHorizontal } from "lucide-react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { AnimatePresence, motion } from "motion/react";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters.")
    .max(80, "Name must be under 80 characters.")
    .regex(
      /^[a-zA-Z\s\u0600-\u06FF]+$/,
      "Name can only include letters and spaces."
    )
    .optional()
    .or(z.literal("")),

  email: z.email("Enter a valid email address so we can reach you."),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters.")
    .max(2000, "Message must be under 2000 characters.")
    .refine(
      (msg) => msg.trim().split(" ").length >= 3,
      "Message should include at least 3 words."
    )
    .refine(
      (msg) => !/^(.)\1{9,}/.test(msg),
      "Avoid using the same character too many times."
    ),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Connect() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const onSubmit = async (data: ContactForm) => {
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        toast.success(
          <>
            <p>Message sent</p>
            <p>Your message has been sent successfully.</p>
          </>
        );
        reset();
      } else {
        toast.error(
          <>
            <p>Failed to send message</p>
            <p>Please try again later.</p>
          </>
        );
      }
    } catch (err) {
      console.error("Failed to submit contact form:", err);
      toast.warning(
        <>
          <p>Something went wrong</p>
          <p>Please try again later.</p>
        </>
      );
    }
  };

  return (
    <Dialog>
      <div className="overflow-hidden">
        <DialogTrigger asChild>
          <motion.div
            whileHover="hover"
            transition={{ type: "spring", stiffness: 300, damping: 40 }}
            initial="initial"
            className="w-full"
          >
            <Button
              className="text-sm w-full  group mr-2 transition-colors duration-300 hover:bg-ring rounded-full cursor-pointer flex items-center justify-center"
              variant="secondary"
              size="sm"
            >
              <motion.span
                variants={{
                  initial: { x: 0, width: "auto" },
                  hover: { x: -5, width: "auto" },
                }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                Contact me
              </motion.span>
              <motion.div
                variants={{
                  initial: { opacity: 0, x: 0, width: 0 },
                  hover: { opacity: 1, x: 0, width: "auto" },
                }}
                transition={{
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100,
                  ease: "easeOut",
                }}
                className="overflow-hidden -ml-1 "
              >
                <Mail />
              </motion.div>
            </Button>
          </motion.div>
        </DialogTrigger>
      </div>

      <DialogContent className="rounded-3xl">
        <DialogHeader>
          <DialogTitle>Send Me a Message</DialogTitle>
          <DialogDescription>
            Feel free to reach out! Fill in the form below and I&apos;ll get
            back to you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        <form
          className="flex-col flex gap-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name (optional)</Label>
            <Input
              id="name"
              placeholder="e.g. Mohamed Salah"
              {...register("name")}
              aria-invalid={!!errors.name || undefined}
            />
            {errors.name && (
              <p className="text-sm text-destructive ">{errors.name.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="you@example.com"
              {...register("email")}
              aria-invalid={!!errors.email || undefined}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              placeholder="Type your message..."
              className="min-h-[100px]"
              {...register("message")}
              aria-invalid={!!errors.message || undefined}
            />
            {errors.message && (
              <p className="text-sm text-destructive">
                {errors.message.message}
              </p>
            )}
          </div>

          <DialogFooter className="flex justify-end gap-2">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancel
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting || !isValid}>
              {isSubmitting ? "Sending..." : "Send"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
