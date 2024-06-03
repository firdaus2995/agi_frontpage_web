import { NextRequest, NextResponse } from 'next/server';
import { getContent } from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import { QueryParams } from '@/utils/httpService';

export async function GET(request: NextRequest) {
  const slug = BASE_SLUG.PRODUK.CONTENT.PRODUK;
  const productFilter = request.nextUrl.searchParams.get('productFilter') || '';
  const channelFilter = request.nextUrl.searchParams.get('channelFilter') || '';

  if (channelFilter && channelFilter !== 'undefined') {
    const queryParams: QueryParams = {
      includeAttributes: 'true',
      productFilter,
      channelFilter
    };
    const data = await getContent(slug, queryParams);
    return NextResponse.json(data, { status: 200 });
  }

  const queryParams: QueryParams = {
    includeAttributes: 'true',
    productFilter
  };
  const data = await getContent(slug, queryParams);
  return NextResponse.json(data, { status: 200 });
}
