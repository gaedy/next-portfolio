"use client";

import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
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
import { contactSchema } from "./connect";

type ContactForm = z.infer<typeof contactSchema>;

interface ConnectDialogProps {
  serviceTitle?: string;
  onSuccess?: () => void;
}

export function ConnectDialog({ serviceTitle, onSuccess }: ConnectDialogProps) {
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
        body: JSON.stringify({
          ...data,
          message: serviceTitle
            ? `${data.message}\n\nService: ${serviceTitle}`
            : data.message,
        }),
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
        onSuccess?.();
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
    <DialogContent className="rounded-3xl">
      <DialogHeader>
        <DialogTitle>
          {serviceTitle
            ? `Get in Touch - ${serviceTitle}`
            : "Send Me a Message"}
        </DialogTitle>
        <DialogDescription>
          {serviceTitle
            ? `Interested in ${serviceTitle}? Fill in the form below and I'll get back to you as soon as possible.`
            : "Feel free to reach out! Fill in the form below and I'll get back to you as soon as possible."}
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
            <p className="text-sm text-destructive">{errors.message.message}</p>
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
  );
}
