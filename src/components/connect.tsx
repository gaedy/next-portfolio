"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { MessageCircleMore } from "lucide-react";
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
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
    reset,
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    mode: "onChange", // validate on blur/touch for nicer UX
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
          <div>
            <p className="font-medium">Message sent!</p>
            <p>Your message has been sent successfully.</p>
          </div>
        );
        reset();
      } else {
        toast.error(
          <div>
            <p className="font-medium">Failed to send message</p>
            <p>Please try again later.</p>
          </div>
        );
      }
    } catch (err) {
      console.error("Failed to submit contact form:", err);
      toast.error(
        <div>
          <p className="font-medium">Something went wrong</p>
          <p>Please try again later.</p>
        </div>
      );
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
