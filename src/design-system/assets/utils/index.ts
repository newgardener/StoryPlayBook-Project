export const isStringArrayValue = (value: unknown) => {
  return Array.isArray(value) && value.every((v) => typeof v === "string");
};

export const isStringValue = (value: unknown) => {
  return typeof value === "string" || isStringArrayValue(value);
};

export const isBoolean = (value: unknown) => {
  return value === true || value === false;
};

export const convertArrayToObject = (data: object | object[]) => {
  if (!Array.isArray(data)) return { 0: data };
  const convertedObject = {} as { [key: number]: object };
  data.forEach((d, i) => (convertedObject[i] = d));
  return convertedObject;
};
