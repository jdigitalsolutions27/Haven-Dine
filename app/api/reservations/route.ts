import { NextResponse } from "next/server";
import { z } from "zod";

const reservationSchema = z.object({
  name: z.string().min(2),
  phone: z.string().min(7),
  email: z.string().email(),
  date: z.string().min(1),
  time: z.string().min(1),
  guests: z.string().min(1),
  specialRequests: z.string().optional()
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const payload = reservationSchema.parse(body);

    return NextResponse.json({
      success: true,
      message: "Your table request has been received. Our team will confirm shortly.",
      reservation: payload
    });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required reservation fields.",
          errors: error.flatten()
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        success: false,
        message: "Unable to process your reservation request right now."
      },
      { status: 500 }
    );
  }
}
