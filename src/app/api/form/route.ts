import { NextRequest, NextResponse } from 'next/server';
import { getFormBy } from '@/services/form.api';

export async function GET(request: NextRequest) {
  const formId = request.nextUrl.searchParams.get('id') || '';
  if (!formId) {
    return NextResponse.json({ error: 'Form Id required' }, { status: 500 });
  }

  const data = await getFormBy(formId);
  return NextResponse.json(data, { status: 200 });
}
