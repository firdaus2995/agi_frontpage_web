import { QueryParams } from './httpService';
import { ContentData } from '@/types/content.type';

export const camelToKebabCase = (str: string) => {
  return str.toLowerCase().replace(/\s+/g, '-');
};

export const convertToKebabCase = (str: string) => {
  const cleanText = (text: string) =>
    text.toLowerCase().replace(/[^a-zA-Z0-9\s]/g, '');
  return cleanText(str).replace(/\s+/g, '-');
};

export const handleDownload = async (fileUrl: string) => {
  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const newBlob = new Blob([blob], { type: blob.type });
    const url = URL.createObjectURL(newBlob);
    window.open(url, '_blank');
  } catch (error) {
    console.error('Error downloading file:', error);
  }
};

export const htmlParser = (str: string): string => {
  const parser = new DOMParser();

  const doc = parser.parseFromString(str, 'text/html');

  if (doc.body) {
    const textContent = doc.body.textContent?.trim();
    return textContent || '';
  }

  return '';
};

export const filterAttributes = <T extends Record<string, any>>(
  obj: T
): QueryParams => {
  const newObj: QueryParams = {};

  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const strValue = String(value);
      if (strValue.trim()) {
        newObj[key] = strValue;
      }
    }
  }

  return newObj;
};

export const getYouTubeId = (url: string): string | null => {
  try {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);

    const videoId = params.get('v');
    return videoId;
  } catch (error) {
    console.error('Invalid YouTube URL');
    return '';
  }
};

export const mergeAllData = (data: Record<string, ContentData[]>) => {
  let mergedData: ContentData[] = [];

  Object.keys(data)?.map((item: string) => {
    mergedData = mergedData.concat(data[item]);
  });

  return mergedData;
};

export const generateDaftarIsi = (data: any[], section: string) => {
  const listSection: any = [];
  data.map((item) => {
    item?.details.map((detail: Record<string, string>, idx: number) => {
      if (detail.fieldId === section) {
        listSection.push({ key: idx, label: detail.value });
      }
    });
  });

  return listSection;
};

export const breakWords = (text: string, length: number) => {
  const words = text.split(' ');
  const firstPart = words.slice(0, length).join(' ');
  const secondPart = words.slice(length).join(' ');

  return (
    <span className="space-y-2">
      <p className="break-words">{firstPart}</p>
      {secondPart && <p className="line-clamp-1 break-words">{secondPart}</p>}
    </span>
  );
};

export const isContentNotEmpty = (str: string) => {
  return (
    str !== '<p>-</p>' &&
    str !== '["-"]' &&
    str !== '-' &&
    !str?.includes('>-<')
  );
};
