import { neon } from "@neondatabase/serverless";
if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL environment variable is not defined.");
}
const sql = neon(process.env.DATABASE_URL);
export interface User {
  id: number;
  name: string;
  email: string;
  passwordHash: string;
}
export async function getUserByEmail(
  email: string
): Promise<User | null> {
  const rows = await sql`
    SELECT
      id,
      name,
      email,
      password_hash AS "passwordHash"
    FROM users
    WHERE email = ${email}
    LIMIT 1
  `;
  if (rows.length === 0) {
    return null;
  }
  return rows[0] as User;
}