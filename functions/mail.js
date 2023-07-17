let destinationEmail = ''
let fromEmail = ''
let dkimDomain = ''
let dkimPrivateKey = ''
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'POST',
    'Access-Control-Allow-Headers': 'Content-Type',
}

export async function onRequestPost({ request, env }) {
    destinationEmail = env.DESTINATION_EMAIL
    fromEmail = env.FROM_EMAIL
    dkimPrivateKey = env.DKIM_PRIVATE_KEY
    dkimDomain = env.DKIM_DOMAIN
    return await handleRequest(request)
}

async function handleRequest(request) {
    const requestBody = await readRequestBody(request)
    if (requestBody === null) {
        return new Response('Bad request', { headers, status: 400 })
    }
    const result = await sendEmail(requestBody)
    return result
}

async function readRequestBody(request) {
    const { headers: requestHeaders } = request
    const contentType = requestHeaders.get('content-type') || ''

    if (contentType.includes('text/plain')) {
        const data = await request.text()
        return JSON.parse(data)
    }
    return null
}

async function sendEmail({ email, message, name, phone }) {
    if (!email || !name) {
        return new Response('Required info missing', { headers, status: 422 })
    }
    const content = [
        {
            type: 'text/plain',
            value: `
Hey there, message submitted on your website!

    Name: ${name}, 
    Email: ${email}, 
    Phone: ${phone}, 
    ---
    Message: ${message}
    ---
`,
        },
    ]
    const mailServerResponse = await fetch(
        new Request('https://api.mailchannels.net/tx/v1/send', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({
                personalizations: [
                    {
                        to: [{ email: destinationEmail, name: 'Phil' }],
                        reply_to: { email },
                        dkim_domain: dkimDomain,
                        dkim_selector: 'mailchannels',
                        dkim_private_key: dkimPrivateKey,
                    },
                ],
                from: {
                    email: fromEmail,
                    name,
                },
                subject: 'Contact form submission!',
                content,
            }),
        })
    )
    const result = `From Mailserver: ${mailServerResponse.status} ${mailServerResponse.statusText}`
    return new Response(result, { headers, status: mailServerResponse.status })
}
