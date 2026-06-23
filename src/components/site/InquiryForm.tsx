import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { SITE } from "@/lib/site";

const schema = z.object({
  company: z.string().trim().min(2, "Company name is required").max(120),
  name: z.string().trim().min(2, "Your name is required").max(100),
  email: z.string().trim().email("Enter a valid email").max(160),
  phone: z.string().trim().min(6, "Enter a valid phone number").max(40),
  message: z.string().trim().min(10, "Tell us a little more").max(2000),
});

type FormData = z.infer<typeof schema>;
type Errors = Partial<Record<keyof FormData, string>>;

const initial: FormData = { company: "", name: "", email: "", phone: "", message: "" };

export function InquiryForm() {
  const [data, setData] = useState<FormData>(initial);
  const [errors, setErrors] = useState<Errors>({});

  function update<K extends keyof FormData>(k: K, v: string) {
    setData((d) => ({ ...d, [k]: v }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const errs: Errors = {};
      for (const issue of parsed.error.issues) {
        const k = issue.path[0] as keyof FormData;
        if (!errs[k]) errs[k] = issue.message;
      }
      setErrors(errs);
      return;
    }
    setErrors({});
    const { company, name, email, phone, message } = parsed.data;
    const subject = `Corporate Inquiry — ${company}`;
    const body =
      `Company: ${company}\nContact Person: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const url = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = url;
    toast.success("Opening your email app to send the inquiry.");
  }

  const field =
    "mt-1 w-full rounded-md border border-input bg-background px-4 py-3 text-base text-ink shadow-sm transition-colors placeholder:text-muted-foreground/60 focus:border-brand-green focus:outline-none focus:ring-2 focus:ring-brand-green/30";

  return (
    <form onSubmit={handleSubmit} noValidate className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Company Name" error={errors.company}>
          <input
            className={field}
            value={data.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="Acme Corporation Ltd."
            maxLength={120}
          />
        </Field>
        <Field label="Contact Person" error={errors.name}>
          <input
            className={field}
            value={data.name}
            onChange={(e) => update("name", e.target.value)}
            placeholder="Full name"
            maxLength={100}
          />
        </Field>
        <Field label="Email" error={errors.email}>
          <input
            type="email"
            className={field}
            value={data.email}
            onChange={(e) => update("email", e.target.value)}
            placeholder="you@company.com"
            maxLength={160}
          />
        </Field>
        <Field label="Phone" error={errors.phone}>
          <input
            type="tel"
            className={field}
            value={data.phone}
            onChange={(e) => update("phone", e.target.value)}
            placeholder="+880 1XXX-XXXXXX"
            maxLength={40}
          />
        </Field>
      </div>
      <Field label="Message" error={errors.message}>
        <textarea
          className={`${field} min-h-[160px] resize-y`}
          value={data.message}
          onChange={(e) => update("message", e.target.value)}
          placeholder="Tell us about your requirement — flag type, sizes, quantities and timeline."
          maxLength={2000}
        />
      </Field>

      <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-muted-foreground">
          Submitting opens your email app with the inquiry pre-filled.
        </p>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-brand-red px-7 py-3.5 font-display text-sm font-semibold uppercase tracking-widest text-white shadow-md transition-all hover:bg-brand-red/90 hover:shadow-lg"
        >
          Send Inquiry
        </button>
      </div>
    </form>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="font-display text-xs font-semibold uppercase tracking-widest text-ink/80">
        {label}
      </span>
      {children}
      {error && <span className="mt-1 block text-xs text-brand-red">{error}</span>}
    </label>
  );
}
