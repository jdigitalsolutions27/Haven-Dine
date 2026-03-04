import { NextResponse } from "next/server";
import { z } from "zod";

const inquirySchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(7),
  eventType: z.string().min(2),
  message: z.string().min(10)
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = inquirySchema.parse(body);

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received. Our team will be in touch shortly.",
      inquiry: payload
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete the required inquiry details.",
          errors: error.flatten()
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your inquiry right now."
      },
      { status: 500 }
    );
  }
}
