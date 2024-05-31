import { NextResponse } from 'next/server';
import { getContentPage } from '@/services/content-page.api';

export async function GET() {
  const data = await getContentPage('produk-korporasi');
  return NextResponse.json(data, { status: 200 });
}
