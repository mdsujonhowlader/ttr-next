"use client";

import { cn } from "@/lib/utils";
import { Button } from "@headlessui/react";
import {
  FacebookIcon,
  Instagram,
  Linkedin,
  TwitterIcon,
  Youtube,
  Send,
  CheckCircle,
  Loader2,
  AlertCircle,
  MapPin,
  Phone,
  Clock,
  Mail,
} from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useState, useRef } from "react";
import { submitContact } from "@/actions/contactAction";

export default function ContactPage() {
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData) {
    setLoading(true);
    setErrors({});
    setSuccess(false);

    const res = await submitContact(formData);

    setLoading(false);

    if (res.success) {
      setSuccess(true);
      formRef.current?.reset();
      setTimeout(() => setSuccess(false), 5000);
    } else if (res.errors) {
      setErrors(res.errors);
    }
  }

  return (
    <section className="max-w-6xl relative py-28 mx-auto px-4">
      <motion.div
        initial={{ opacity: 0, translateY: 40 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="rounded-2xl border border-border grid grid-cols-1 md:grid-cols-2 gap-8 px-8 py-12 bg-card relative mb-12"
      >
        <div className="space-y-5">
          <h1 className="text-4xl md:text-5xl font-bold font-display tracking-tight leading-tight">
            Let&apos;s <span className="text-primary">Talk</span>
            <br />
            About Your Project
          </h1>
          <p className="leading-relaxed text-muted-foreground text-base">
            Have a question, a project idea, or just want to say hello? Fill out
            the form and we&apos;ll get back to you within 24 hours.
          </p>
        </div>
        <div className="flex items-end justify-end">
          <Image
            src="/ContactUs.svg"
            alt="Contact Us"
            width={400}
            height={320}
            className="object-contain max-w-xs"
          />
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
        <div className="lg:col-span-3">
          <div className="bg-card border border-border rounded-2xl p-8">
            {errors._form && (
              <div className="mb-6 flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl text-sm text-red-700 dark:text-red-300">
                <AlertCircle className="w-5 h-5 flex-shrink-0" />
                {errors._form}
              </div>
            )}

            {success && (
              <div className="mb-6 flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl text-sm text-green-700 dark:text-green-300">
                <CheckCircle className="w-5 h-5 flex-shrink-0" />
                Message sent successfully! We&apos;ll get back to you soon.
              </div>
            )}

            <form
              ref={formRef}
              action={handleSubmit}
              className="space-y-5"
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Your Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  className={cn(
                    "w-full rounded-xl border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50",
                    errors.name
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                      : "border-border focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  )}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Your Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  className={cn(
                    "w-full rounded-xl border bg-background px-4 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground/50",
                    errors.email
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                      : "border-border focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  )}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-foreground mb-1.5"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  placeholder="Tell us about your project or question..."
                  className={cn(
                    "w-full rounded-xl border bg-background px-4 py-3 text-foreground outline-none transition-colors resize-none placeholder:text-muted-foreground/50",
                    errors.message
                      ? "border-red-500 focus:ring-2 focus:ring-red-500/30"
                      : "border-border focus:ring-2 focus:ring-primary/30 focus:border-primary"
                  )}
                />
                {errors.message && (
                  <p className="mt-1.5 text-xs text-red-500 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-6 py-3 bg-foreground text-background rounded-xl font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div>
            <h3 className="text-2xl font-bold font-display text-foreground mb-2">
              Contact Info
            </h3>
            <p className="text-muted-foreground text-sm">
              Here&apos;s how to reach us directly.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Office</h4>
                <p className="text-xs text-muted-foreground">
                  Banasree Block-D, Dhaka
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Phone</h4>
                <p className="text-xs text-muted-foreground">
                  +880 1797-125469
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">
                  Work Hours
                </h4>
                <p className="text-xs text-muted-foreground">
                  Everyday 09 am - 07 pm
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 p-4 bg-card border border-border rounded-xl">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h4 className="text-sm font-semibold text-foreground">Email</h4>
                <p className="text-xs text-muted-foreground">
                  thetechresolver@support.com
                </p>
              </div>
            </div>
          </div>

          <div className="pt-4">
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Follow Us
            </h4>
            <div className="flex gap-3">
              <Link
                href="https://facebook.com/thetechresolver"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
              >
                <FacebookIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://twitter.com"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
              >
                <TwitterIcon className="w-4 h-4" />
              </Link>
              <Link
                href="https://instagram.com"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
              >
                <Instagram className="w-4 h-4" />
              </Link>
              <Link
                href="https://linkedin.com"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
              >
                <Linkedin className="w-4 h-4" />
              </Link>
              <Link
                href="https://youtube.com"
                target="_blank"
                className="w-9 h-9 rounded-lg bg-card border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-muted-foreground"
              >
                <Youtube className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 rounded-xl overflow-hidden border border-border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d116818.17319103966!2d90.42195359999997!3d23.798396199999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1751821993479!5m2!1sen!2sbd"
          width="600"
          height="350"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full"
        />
      </div>
    </section>
  );
}
