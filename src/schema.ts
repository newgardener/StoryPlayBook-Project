import { type ZodType, z } from "zod";

export const typographySchema = z.object({
  tag: z.union([
    z.literal("p"),
    z.literal("h1"),
    z.literal("h2"),
    z.literal("h3"),
    z.literal("h4"),
    z.literal("h5"),
    z.literal("div"),
    z.literal("span"),
    z.literal("strong"),
    z.literal("b"),
  ]),
  color: z.string().startsWith("#"),
  weight: z.union([z.literal("bold"), z.literal("regular")]),
  fontSize: z.number(),
  lineHeight: z.number(),
  children: z.string().min(1),
});

export const badgeSchema = z.object({
  type: z.union([z.literal("count"), z.literal("label")]),
  count: z.number(),
  label: z.union([z.string(), z.array(z.string())]),
  labelColor: z.union([z.literal("red"), z.literal("blue"), z.literal("gray")]),
});

export const componentSchemaMap: Record<string, ZodType<any, any, any>> = {
  Typography: typographySchema,
  Badge: badgeSchema,
};
