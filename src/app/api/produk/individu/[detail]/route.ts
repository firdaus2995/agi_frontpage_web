import { NextApiRequest } from 'next';
import { NextResponse, NextRequest } from 'next/server';
import { getContentDetail } from '@/services/content-page.api';

type NextApiRequestWithParams = NextApiRequest & {
  params: { detail: string };
};

export async function GET(_: NextRequest, req: NextApiRequestWithParams) {
  const detail = req.params.detail;
  const data = await getContentDetail(detail);
  return NextResponse.json(data, { status: 200 });
}
