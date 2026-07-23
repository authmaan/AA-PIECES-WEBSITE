import { defineField, defineType } from "sanity";

/**
 * Shared schema for both Time Talks (editorial/educational) and
 * Watch Stories (customer/heritage storytelling) — differentiated
 * by the `type` field rather than two separate schemas, since the
 * shape of both content types is identical.
 */
export default defineType({
  name: "article",
  title: "Article",
  type: "document",
  fields: [
    defineField({
      name: "type",
      title: "Article Type",
      type: "string",
      options: {
        list: [
          { title: "Time Talks", value: "time-talks" },
          { title: "Watch Stories", value: "watch-stories" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({ name: "title", title: "Title", type: "string", validation: (Rule) => Rule.required() }),
    defineField({ name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (Rule) => Rule.required() }),
    defineField({ name: "excerpt", title: "Excerpt", type: "text", rows: 2, validation: (Rule) => Rule.max(180) }),
    defineField({ name: "body", title: "Body", type: "array", of: [{ type: "block" }, { type: "image" }] }),
    defineField({
      name: "coverImage",
      title: "Cover Image",
      type: "image",
      options: { hotspot: true },
      fields: [{ name: "alt", title: "Alt text", type: "string" }],
    }),
    defineField({ name: "readingMinutes", title: "Reading Time (minutes)", type: "number" }),
    defineField({ name: "publishedAt", title: "Published At", type: "datetime" }),
    defineField({ name: "author", title: "Author", type: "string", initialValue: "AA PIECES Editorial" }),
  ],
  preview: { select: { title: "title", subtitle: "type", media: "coverImage" } },
});
