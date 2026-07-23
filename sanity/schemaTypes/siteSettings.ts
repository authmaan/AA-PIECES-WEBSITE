import { defineField, defineType } from "sanity";

/** Singleton document — only one instance should ever exist. */
export default defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({ name: "whatsappNumber", title: "WhatsApp Number", type: "string", description: "Include country code, no symbols, e.g. 2348083009276" }),
    defineField({ name: "email", title: "Contact Email", type: "string" }),
    defineField({ name: "instagramHandle", title: "Instagram Handle", type: "string" }),
    defineField({ name: "tiktokHandle", title: "TikTok Handle", type: "string" }),
    defineField({
      name: "announcementBar",
      title: "Announcement Bar Text",
      type: "string",
      description: "Optional — leave empty to hide the announcement bar",
    }),
  ],
  preview: { prepare: () => ({ title: "Site Settings" }) },
});
