import NextAuth from 'next-auth/next'
import GoogleProvider from 'next-auth/providers/google'

import { connectToDB } from '@utils/database'

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  async sessison({ session }) {},
  async signIn({ profile }) {
    try {
      await connectToDB()

      // check user exists

      // if not, create

      return true
    } catch (error) {
      console.log(error)
      return false
    }
  },
})

export { handler as GET, handler as POST }
