export const BASE_URL = {
  apiPage: `${process.env.NEXT_PUBLIC_AVRAS_API}/api/page`,
  contentPage: `${process.env.NEXT_PUBLIC_AVRAS_API}/api/content`,
  contentDetail: `${process.env.NEXT_PUBLIC_AVRAS_API}/api/content/detail`,
  contentFilter: `${process.env.NEXT_PUBLIC_AVRAS_API}/api/content/filter`,
  formUrl: `${process.env.NEXT_PUBLIC_AVRAS_API}/api/form`,
  contentCategoryPage: `${process.env.NEXT_PUBLIC_AVRAS_API}/api/content/category`,
  image: `${process.env.NEXT_PUBLIC_IMAGE_API}`,
  provider: `${process.env.NEXT_PUBLIC_PROVIDER_API}`,
  default: `${process.env.NEXT_PUBLIC_AVRAS_API}/api`,
  cms: `${process.env.NEXT_PUBLIC_UPLOAD_FILE_URL}/api-cms`
};

export const EXTERNAL_URL = {
  agiUrl: `${process.env.NEXT_PUBLIC_AGI_URL}`,
  avramUrl: `${process.env.NEXT_PUBLIC_AVRAM_URL}`,
  avrasUrl: `${process.env.NEXT_PUBLIC_AVRAS_URL}`
};
