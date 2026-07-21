/**
 * Future integration boundary for auth providers (Google/Apple/Microsoft/OTP/Passkeys).
 */
export type AuthProvider = "google" | "apple" | "microsoft" | "email" | "otp" | "magic_link";

export async function requestMagicLink(email: string): Promise<{ ok: true }> {
  if (!email.includes("@")) {
    throw new Error("Invalid email");
  }
  return { ok: true };
}
