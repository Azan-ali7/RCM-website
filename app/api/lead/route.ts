export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  if (!body || !body.email || !body.name) {
    return new Response(JSON.stringify({ error: "Missing required fields" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    })
  }
  // TODO: Integrate with your CRM or email service (e.g., Vercel Blob, Supabase, or Resend)
  console.log("Lead captured:", body)
  return new Response(JSON.stringify({ ok: true }), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  })
}
