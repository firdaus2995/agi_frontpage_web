import { NextResponse } from 'next/server';
import { getContentPage } from '@/services/content-page.api';
import { BASE_SLUG } from '@/utils/baseSlug';

export async function GET() {
  const data = await getContentPage(BASE_SLUG.PRODUK.PAGE.PRODUK);
  return NextResponse.json(data, { status: 200 });
}
