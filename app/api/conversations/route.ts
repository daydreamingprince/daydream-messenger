import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(
  request: Request
) {
  try {

  } catch (error:any) {
    return new NextResponse('Internal Error', { status: 500 });
  }
}