"use client";

import { mailchimp, newsletter } from "@/resources";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function debounce<T extends (...args: any[]) => void>(func: T, delay: number): T {
  let timeout: ReturnType<typeof setTimeout>;
  return ((...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  }) as T;
}

interface MailchimpProps {
  className?: string;
}

export const Mailchimp: React.FC<MailchimpProps> = ({ className }) => {
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const validateEmail = (email: string): boolean => {
    if (email === "") return true;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
    if (!validateEmail(value)) {
      setError("Please enter a valid email address.");
    } else {
      setError("");
    }
  };

  const debouncedHandleChange = debounce(handleChange, 2000);

  const handleBlur = () => {
    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
    }
  };

  if (newsletter.display === false) return null;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-xl border bg-card p-8 text-center ${className ?? ""}`}
    >
      {/* Dot pattern background */}
      {mailchimp.effects.dots.display && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: mailchimp.effects.dots.opacity / 100,
            backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
            backgroundSize: `${parseInt(mailchimp.effects.dots.size) * 8}px ${parseInt(mailchimp.effects.dots.size) * 8}px`,
          }}
        />
      )}
      {/* Gradient overlay */}
      {mailchimp.effects.gradient.display && (
        <div
          className="pointer-events-none absolute inset-0"
          style={{
            opacity: mailchimp.effects.gradient.opacity / 100,
            background: `radial-gradient(ellipse at ${mailchimp.effects.gradient.x}% ${mailchimp.effects.gradient.y}%, hsl(var(--accent)) 0%, transparent 70%)`,
          }}
        />
      )}
      <div className="relative z-10 mx-auto max-w-sm">
        <h2 className="mb-2 text-2xl font-bold tracking-tight font-[family-name:var(--font-heading)]">
          {newsletter.title}
        </h2>
        <p className="mb-6 text-base text-font-secondary text-balance">
          {newsletter.description}
        </p>
      </div>
      <form
        className="relative z-10 flex w-full justify-center"
        action={mailchimp.action}
        method="post"
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"
      >
        <div className="flex w-full max-w-sm flex-col gap-2 sm:flex-row">
          <div className="flex-1">
            <Input
              id="mce-EMAIL"
              name="EMAIL"
              type="email"
              placeholder="Email"
              required
              className="h-10"
              onChange={(e) => {
                if (error) {
                  handleChange(e);
                } else {
                  debouncedHandleChange(e);
                }
              }}
              onBlur={handleBlur}
            />
            {error && <p className="mt-1 text-xs text-destructive">{error}</p>}
          </div>
          <div style={{ display: "none" }}>
            <input
              type="checkbox"
              readOnly
              name="group[3492][1]"
              id="mce-group[3492]-3492-0"
              value=""
              checked
            />
          </div>
          <div id="mce-responses" className="clearfalse">
            <div className="response" id="mce-error-response" style={{ display: "none" }} />
            <div className="response" id="mce-success-response" style={{ display: "none" }} />
          </div>
          <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
            <input
              type="text"
              readOnly
              name="b_c1a5a210340eb6c7bff33b2ba_0462d244aa"
              tabIndex={-1}
              value=""
            />
          </div>
          <Button id="mc-embedded-subscribe" type="submit" className="h-10">
            Subscribe
          </Button>
        </div>
      </form>
    </div>
  );
};
