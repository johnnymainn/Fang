import { Resend } from 'resend';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, subject, message } = body;

    // Validate input
    if (!email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Resend inside the function so API key is only required at runtime
    console.log('Attempting to send email with API key:', process.env.RESEND_API_KEY ? 'Key is set' : 'Key is missing!');
    const resend = new Resend(process.env.RESEND_API_KEY);

    const data = await resend.emails.send({
      from: 'Fang Dynamics <onboarding@resend.dev>', // You'll change this to your domain later
      to: ['johnnybenweeks@gmail.com'], // Changed to your verified email (testing mode restriction)
      replyTo: email,
      subject: `New Inquiry: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    });

    console.log('Resend API response:', JSON.stringify(data, null, 2));

    // Check if Resend returned an error
    if (data.error) {
      console.error('Resend error:', data.error);
      return NextResponse.json(
        { error: data.error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email' },
      { status: 500 }
    );
  }
}
