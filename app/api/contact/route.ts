import Mailgun from "mailgun.js";

export async function POST(request: Request) {
    const formData = await request.formData();
    const mailgun = new Mailgun(FormData);
    const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY ?? ''});
    try {
        const response = await mg.messages.create('mail.waypoint3.com', {
            from: "noreply@mail.waypoint3.com",
            to: ["help@waypoint3.com"],
            subject: "Waypoint3 contact form",
            text: `New contact form on waypoint3.com\n\n---------------------------\n`
            + `Name: ${formData.get('name')}\n`
            + `Email: ${formData.get('emailAddress')}\n`
            + `Comments: \n${formData.get('comments')}\n---------------------------\n\n`
            + `Do not reply to this email.`
            ,
        });
        return Response.json({message: "Contact form sent"}, {
            status: 201
        });
    } catch (error) {
        return Response.json({message: "Unable to send contact form"}, {
            status: 500
        });
    }
}