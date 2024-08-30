import { auth, currentUser } from "@clerk/nextjs/server";

export async function checkRoles(): Promise<string | null> {
  const userData = auth();
  
  let user;
  if (userData) {
    user = await currentUser();
  }

  if (!user) {
    return null
  }

  const userEmail = user?.emailAddresses[0].emailAddress

  const adminEmail = process.env.ADMIN_EMAIL;

  if (userEmail === adminEmail) {
    return 'admin'
  } else {
    return "custmer"
  }
}
