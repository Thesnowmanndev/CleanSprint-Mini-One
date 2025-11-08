// Replace with Supabase/NextAuth later
export async function getSession(cookies) {
  // naive example: treat presence of "sid" cookie as signed-in
  const sid = cookies.get?.("sid")?.value;
  return sid ? { user: { id: "demo" } } : null;
}
