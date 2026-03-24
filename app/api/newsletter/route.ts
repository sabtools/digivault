import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email } = body as { email?: string };

    // Validate email presence
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required." },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // ---------------------------------------------------------------
    // TODO: Integrate with your email service provider here.
    //
    // Beehiiv example:
    //   const res = await fetch("https://api.beehiiv.com/v2/publications/<PUB_ID>/subscriptions", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${process.env.BEEHIIV_API_KEY}`,
    //     },
    //     body: JSON.stringify({ email, reactivate_existing: true }),
    //   });
    //
    // Mailchimp example:
    //   const res = await fetch(
    //     `https://<dc>.api.mailchimp.com/3.0/lists/<LIST_ID>/members`,
    //     {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //         Authorization: `apikey ${process.env.MAILCHIMP_API_KEY}`,
    //       },
    //       body: JSON.stringify({ email_address: email, status: "subscribed" }),
    //     }
    //   );
    // ---------------------------------------------------------------

    return NextResponse.json(
      { success: true, message: "Successfully subscribed!" },
      { status: 200 }
    );
  } catch {
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
