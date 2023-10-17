import { NextResponse } from "next/server";

interface IParams {
  conversationId?: string;
}

export async function DELETE(
  request: Request,
  { params }: { params: IParams }
) {
  try {

  } catch (error: any) {
    console.log(error, 'ERROR_CONVERSATION_DELETE')
    return new NextResponse('Internal Error', { status: 500 })
  }
}