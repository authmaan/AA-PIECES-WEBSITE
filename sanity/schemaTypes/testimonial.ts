import { defineField, defineType } from "sanity";

export default defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    defineField({ name: "quote", title: "Quote", type: "text", rows: 3, validation: (Rule) => Rule.required() }),
    defineField({ name: "customerName", title: "Customer Name", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "customerRole", title: "Customer Role / Location", type: "string" }),
    defineField({ name: "product", title: "Related Product", type: "reference", to: [{ type: "product" }] }),
    defineField({ name: "customerPhoto", title: "Customer Photo (optional)", type: "image" }),
  ],
  preview: { select: { title: "customerName", subtitle: "quote" } },
});
