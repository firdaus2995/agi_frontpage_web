export const camelToKebabCase = (str: string) => {
  return str.toLowerCase().replace(/\s+/g, '-');
};

export const convertToKebabCase = (str: string) => {
  const cleanText = (text: string) => text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
  return cleanText(str).replace(/\s+/g, '-');
};
