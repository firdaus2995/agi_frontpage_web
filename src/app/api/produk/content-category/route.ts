import { NextRequest, NextResponse } from 'next/server';
import { getContentCategory } from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';
import { QueryParams } from '@/utils/httpService';

export async function GET(request: NextRequest) {
  const slug = BASE_SLUG.PRODUK.CONTENT.PRODUK;

  try {
    const productFilter =
      request.nextUrl.searchParams.get('productFilter') || '';
    const category = request.nextUrl.searchParams.get('category') || '';
    const channelFilter =
      request.nextUrl.searchParams.get('channelFilter') || '';
    const searchFilter = request.nextUrl.searchParams.get('searchFilter') || '';

    if (channelFilter && channelFilter !== 'undefined') {
      const queryParams: QueryParams = {
        includeAttributes: 'true',
        productFilter,
        category,
        channelFilter,
        searchFilter
      };
      const data = await getContentCategory(slug, queryParams);
      return NextResponse.json(data, { status: 200 });
    }

    const queryParams: QueryParams = {
      includeAttributes: 'true',
      productFilter,
      category,
      searchFilter
    };
    const data = await getContentCategory(slug, queryParams);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error on fetch content category' },
      { status: 500 }
    );
  }
}
