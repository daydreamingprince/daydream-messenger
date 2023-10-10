import { NextResponse } from "next/server";

export async function POST(
  request: Request
) {
  try {

  } catch (error: any) {
    console.log(error, 'ERROR_MESSAGES');
    return new NextResponse('InternalError', { status: 500 })
  }
}