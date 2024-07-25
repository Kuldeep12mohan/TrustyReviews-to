import { NextRequest, NextResponse } from "next/server";
import client from "@/db";
import { use } from "react";

export const GET = async (request: NextRequest) => {
  try {
    const url = new URL(request.url);
    const spaceId = url.searchParams.get("id"); // Access query parameter 'param'

    if (!spaceId) {
      return NextResponse.json(
        { error: "Missing query parameter" },
        { status: 400 }
      );
    }

    const space = await client.space.findUnique({
      where: {
        id: spaceId,
      },
    });

    return NextResponse.json({ space }, { status: 200 });
  } catch (error) {
    console.error(error); // Log the error for debugging
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
};
