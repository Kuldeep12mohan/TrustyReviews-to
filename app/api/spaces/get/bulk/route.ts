import { NextRequest, NextResponse } from "next/server";
import client from "@/db";
import { use } from "react";

export const GET = async (request: NextRequest) => {
  try {
    const url = new URL(request.url);
    const userId = url.searchParams.get('userId'); // Access query parameter 'param'
  
    if (!userId) {
      return NextResponse.json({ error: 'Missing query parameter' }, { status: 400 });
    }

    const spaces = await client.space.findMany({
      where: {
        userId: userId
      }
    });

    return NextResponse.json({ spaces }, { status: 200 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
};
