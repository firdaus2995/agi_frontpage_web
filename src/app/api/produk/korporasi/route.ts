import { NextResponse } from 'next/server';
import { getContentPage } from '@/services/content-page.api';

export async function GET() {
  try {
    const data = await getContentPage('produk-korporasi');
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Error on fetch content category' },
      { status: 500 }
    );
  }
}
