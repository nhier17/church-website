import { NextResponse } from "next/server";
import { Resend } from "resend";
import { config } from "@/lib/config";
import { EmailTemplate } from "@/components/EmailTemplate";
import { render } from "@react-email/components";

const resend = new Resend(config.resend.apiKey);

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        const emailHtml = await render(
            EmailTemplate({ name, email, subject, message })
          );

      const { data, error } = await resend.emails.send({
            from: "NBBC <hello@info.noonkopirbbc.org>",
            to: ["info.noonkopirbbc@gmail.com"],
            replyTo: email,
            subject: `New Contact: ${subject}`,
            html: emailHtml,
        });

        if (error) {
            console.log(error);
            return NextResponse.json({ error }, { status: 500 });
          }
      
          return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error }, { status: 500 });
    }
}
