import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcryptjs';
import User from "@/models/User";
import connectDB from "@/config/db";

export const authOptions = {
    providers: [
        CredentialsProvider({
            id: 'credentials',
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'text'
                },
                password: {
                    label: 'Password',
                    type: 'password'
                }
            },

            async authorize(credentials) {
                await connectDB();
                try {
                    const user = await User.findOne({ email: credentials.email });
                    if (user) {
                        const isPasswordCorrect = await bcrypt.compare(
                            credentials.password,
                            user.password
                        );
                        if (isPasswordCorrect) {
                            return user;
                        }
                    }
                } catch (error) {
                    throw new Error(error);
                }
            }
        })
    ],

    callbacks: {
        async signIn({ user, account }) {
            if (account?.providers == 'credentials') {
                return true;
            }
        }
    }
}

export const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };