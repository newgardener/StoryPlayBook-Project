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

export const buttonSchema = z.object({
  size: z.union([z.literal("small"), z.literal("medium"), z.literal("large")]),
  backgroundColor: z.string().startsWith("#"),
  textColor: z.union([z.literal("white"), z.literal("black")]),
  textBolded: z.boolean(),
  isLoading: z.boolean(),
  children: z.string(),
});

export const buttonGroupSchema = z.object({
  buttonGroupType: z.union([z.literal("1:1"), z.literal("stacked")]),
  buttonSize: z.union([z.literal("small"), z.literal("medium"), z.literal("large")]),
});

export const chipSchema = z.object({
  active: z.boolean(),
  label: z.string().min(1),
});

export const togglerSchema = z.object({
  checked: z.boolean(),
});

export const jsonInputBoxSchema = z.object({
  propsName: z.string().min(1),
  defaultData: z.array(
    z.object({
      name: z.string(),
      description: z.string(),
    }),
  ),
});

export const dotLoadingSchema = z.object({
  animation: z.union([
    z.literal("dotElastic"),
    z.literal("dotFlashing"),
    z.literal("dotTyping"),
  ]),
});

export const foldingMotionSchema = z.object({
  title: z.string().min(1),
  content: z.string().min(1),
});

export const accordionCardSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string(),
  contents: z.array(
    z.object({
      name: z.string().min(1),
      description: z.string(),
    }),
  ),
});

export const productListSchema = z.object({
  title: z.string().min(1),
  subtitle: z.string(),
  products: z.array(
    z.object({
      productId: z.number(),
      priority: z.number(),
      name: z.string(),
      description: z.string(),
      backgroundColor: z.string(),
    }),
  ),
});

export const componentSchemaMap: Record<string, ZodType<any, any, any>> = {
  Typography: typographySchema,
  Badge: badgeSchema,
  Button: buttonSchema,
  ButtonGroup: buttonGroupSchema,
  Chip: chipSchema,
  Toggler: togglerSchema,
  JSONInputBox: jsonInputBoxSchema,
  DotLoading: dotLoadingSchema,
  FoldingMotion: foldingMotionSchema,
  AccordionCard: accordionCardSchema,
  ProductList: productListSchema,
};
