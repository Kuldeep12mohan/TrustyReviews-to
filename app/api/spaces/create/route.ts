import { NextRequest, NextResponse } from "next/server";
import client from "@/db";
export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { name, header, logo, customMessage, userId } = reqBody;
    const space = await client.space.create({
      data: {
        name: name,
        logo: logo,
        header: header,
        customMessage: customMessage,
        userId: userId,
      },
    });
    return NextResponse.json(
      { space, message: "space created" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.error();
  }
};
