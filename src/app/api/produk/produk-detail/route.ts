import { NextResponse } from 'next/server';
import { getContentPage } from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';

export async function GET() {
  try {
    const data = await getContentPage(BASE_SLUG.PRODUK.PAGE.PRODUK_DETAIL);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error on fetch content category' },
      { status: 500 }
    );
  }
}
