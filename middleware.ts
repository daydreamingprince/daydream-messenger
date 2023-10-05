{}
/** This middleware.ts makes the log out button functional */
import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/"
  }
})

export const config = {
  matcher: [
    "/users/:path*"
  ]
};