export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || !body.email) {
    return new Response(JSON.stringify({ error: "Email required" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }
  // TODO: Integrate with your email marketing tool (e.g., Mailchimp, ConvertKit)
  console.log("Newsletter subscribe:", body.email)
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
