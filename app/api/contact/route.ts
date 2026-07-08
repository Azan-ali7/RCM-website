export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || !body.email || !body.name || !body.message) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }
  // TODO: Integrate with an email service (e.g., Resend) using server-side env vars
  console.log("Contact message:", body)
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
