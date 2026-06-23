import catNational from "@/assets/cat-national.jpg";
import catCorporate from "@/assets/cat-corporate.jpg";
import catTable from "@/assets/cat-table.jpg";
import catCustom from "@/assets/cat-custom.jpg";
import catAccessories from "@/assets/cat-accessories.jpg";

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: string;
};

export const CATEGORIES: Category[] = [
  {
    slug: "national-flags",
    name: "National Flags",
    description:
      "Premium-grade Bangladesh national flags in every standard size — built for outdoor durability and official display.",
    image: catNational,
  },
  {
    slug: "corporate-flags",
    name: "Corporate Flags",
    description:
      "Branded company flags, indoor pole sets and lobby displays manufactured with your logo and colors.",
    image: catCorporate,
  },
  {
    slug: "table-flags",
    name: "Table Flags",
    description:
      "Elegant desk and conference-room table flags on polished stands — perfect for offices, embassies and events.",
    image: catTable,
  },
  {
    slug: "custom-flags",
    name: "Custom Flags",
    description:
      "Fully custom flags — printed or embroidered. Any size, any design, with sample approval before production.",
    image: catCustom,
  },
  {
    slug: "accessories",
    name: "Accessories",
    description:
      "Flag poles, finials, brackets, ropes, tassels and stands — everything you need to mount and finish your flag.",
    image: catAccessories,
  },
];
