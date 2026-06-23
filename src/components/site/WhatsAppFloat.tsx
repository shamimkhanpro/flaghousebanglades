import { WHATSAPP_LINK } from "@/lib/site";

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat on WhatsApp"
      className="group fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-emerald-900/30 transition-transform hover:scale-110"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-40" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.39c-.27-.14-1.62-.8-1.87-.89s-.43-.14-.62.14-.71.89-.87 1.08-.32.21-.59.07a7.49 7.49 0 0 1-2.2-1.36 8.27 8.27 0 0 1-1.52-1.9c-.16-.27 0-.41.12-.55s.27-.32.41-.48a1.8 1.8 0 0 0 .27-.46.5.5 0 0 0 0-.48c-.07-.14-.62-1.49-.85-2s-.45-.46-.62-.47h-.53a1 1 0 0 0-.74.34 3.07 3.07 0 0 0-1 2.29 5.34 5.34 0 0 0 1.12 2.83 12.23 12.23 0 0 0 4.67 4.13 16 16 0 0 0 1.56.57 3.75 3.75 0 0 0 1.72.11 2.82 2.82 0 0 0 1.84-1.29 2.27 2.27 0 0 0 .16-1.29c-.07-.12-.25-.19-.52-.32zM16.05 4.5A11.49 11.49 0 0 0 6.13 22.07L4.5 27.5l5.59-1.47A11.49 11.49 0 1 0 16.05 4.5zm0 21A9.5 9.5 0 0 1 11 24.06l-.36-.22-3.31.87.89-3.23-.24-.37a9.5 9.5 0 1 1 8.07 4.39z" />
      </svg>
    </a>
  );
}
