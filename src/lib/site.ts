import logoAsset from "@/assets/logo.asset.json";

export const SITE = {
  name: "Flag House Bangladesh",
  tagline: "Bangladesh's Trusted Flag Manufacturer",
  email: "info@flaghousebangladesh.com",
  whatsapp: "8801713095971",
  whatsappDisplay: "+880 1713-095971",
  address: "Dhaka, Bangladesh",
  logoUrl: logoAsset.url,
};

export const WHATSAPP_LINK = `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(
  "Hello Flag House Bangladesh, I'd like to enquire about your flags.",
)}`;
