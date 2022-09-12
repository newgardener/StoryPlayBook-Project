export const isStringArrayValue = (value: unknown) => {
  return Array.isArray(value) && value.every((v) => typeof v === "string");
};

export const isStringValue = (value: unknown) => {
  return typeof value === "string" || isStringArrayValue(value);
};
