"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Ban, MessageCircleMore, ShieldX } from "lucide-react";
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

// 1) Zod schema
const contactSchema = z.object({
  name: z.string().min(3, "Please enter at least 3 characters."),
  email: z.string().email("Please enter a valid email address."),
  message: z
    .string()
    .min(10, "Your message should be at least 10 characters long."),
});

type ContactForm = z.infer<typeof contactSchema>;

export default function Connect() {
  // 2) RHF setup with Zod
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onBlur", // validate on blur/touch for nicer UX
    reValidateMode: "onChange",
  });

  // 3) Submit handler (replace with your API call)
  const onSubmit = async (data: ContactForm) => {
    try {
      // Example: await fetch("/api/contact", { method: "POST", body: JSON.stringify(data) });
      console.log("Contact form submitted:", data);
      reset();
    } catch (err) {
      console.error("Failed to submit contact form:", err);
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <MessageCircleMore
          className="hover:scale-105 active:scale-100 transition-transform cursor-pointer"
          size={18}
        />
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Send Me a Message</DialogTitle>
          <DialogDescription>
            Feel free to reach out! Fill in the form below and I’ll get back to
            you as soon as possible.
          </DialogDescription>
        </DialogHeader>

        {/* 4) Hook up handleSubmit */}
        <form
          className="flex-col flex gap-4"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
        >
          <div className="flex flex-col gap-2">
            <Label htmlFor="name">Name</Label>
            <Input
              id="name"
              placeholder="Your full name"
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
