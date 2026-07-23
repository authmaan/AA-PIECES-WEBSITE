import { defineField, defineType } from "sanity";

/**
 * Product schema — mirrors src/types/product.ts exactly.
 * Deploy this once `sanity.config.ts` is connected to a real project ID.
 */
export default defineType({
  name: "product",
  title: "Product",
  type: "document",
  groups: [
    { name: "details", title: "Details" },
    { name: "specs", title: "Specifications" },
    { name: "media", title: "Media" },
    { name: "merchandising", title: "Merchandising" },
  ],
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      group: "details",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      group: "details",
      options: { source: "name", maxLength: 96 },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "reference",
      title: "Reference Code",
      type: "string",
      group: "details",
      description: "Internal reference, e.g. AAP-MC-102",
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      group: "details",
      options: {
        list: [
          { title: "Men's", value: "mens" },
          { title: "Women's", value: "womens" },
          { title: "Unisex", value: "unisex" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "collection",
      title: "Collection",
      type: "reference",
      to: [{ type: "collection" }],
      group: "details",
    }),
    defineField({
      name: "price",
      title: "Price",
      type: "number",
      group: "details",
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: "currency",
      title: "Currency",
      type: "string",
      group: "details",
      options: { list: ["NGN", "USD"] },
      initialValue: "NGN",
    }),
    defineField({
      name: "availability",
      title: "Availability",
      type: "string",
      group: "details",
      options: {
        list: [
          { title: "In Stock", value: "in-stock" },
          { title: "Made to Order", value: "made-to-order" },
          { title: "Sold Out", value: "sold-out" },
        ],
      },
      initialValue: "in-stock",
    }),
    defineField({
      name: "tagline",
      title: "Tagline",
      type: "string",
      group: "details",
      description: "One-line editorial hook shown on product cards",
      validation: (Rule) => Rule.max(90),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      group: "details",
      rows: 5,
    }),
    defineField({
      name: "movement",
      title: "Movement",
      type: "string",
      group: "specs",
      options: {
        list: ["automatic", "quartz", "manual-wind"],
      },
    }),
    defineField({ name: "caseMaterial", title: "Case Material", type: "string", group: "specs" }),
    defineField({ name: "strapMaterial", title: "Strap Material", type: "string", group: "specs" }),
    defineField({ name: "caseDiameterMm", title: "Case Diameter (mm)", type: "number", group: "specs" }),
    defineField({ name: "waterResistance", title: "Water Resistance", type: "string", group: "specs" }),
    defineField({
      name: "specs",
      title: "Additional Specs",
      type: "array",
      group: "specs",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", type: "string" },
            { name: "value", type: "string" },
          ],
        },
      ],
    }),
    defineField({
      name: "images",
      title: "Images",
      type: "array",
      group: "media",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [{ name: "alt", title: "Alt text", type: "string" }],
        },
      ],
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "isFeatured",
      title: "Featured on Homepage",
      type: "boolean",
      group: "merchandising",
      initialValue: false,
    }),
    defineField({
      name: "isNewArrival",
      title: "New Arrival",
      type: "boolean",
      group: "merchandising",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "name", subtitle: "reference", media: "images.0" },
  },
});
