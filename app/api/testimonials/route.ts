import { NextRequest, NextResponse } from "next/server";
import client from "@/db";
export const POST = async (request: NextRequest) => {
  try {
    const reqBody = await request.json();
    const { name, email, text,spaceId } = reqBody;
    const testimonial = await client.testimonial.create({
      data: {
        username: name,
        email: email,
        spaceId: spaceId,
        textContent: text,
      },
    });
    return NextResponse.json(
      { testimonial, message: "space created" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.error();
  }
};
