import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const authConfig = {
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID,
			clientSecret: process.env.AUTH_GOOGLE_SECRET,
		}),
	],
	callbacks: {
		authorized({ auth, request }) {
			return !!auth?.user; //!! turns the value to boolean
		},
	},
	pages: {
		signIn: "/login",
	},
};

//auth function to retrieve current session
export const {
	auth,
	signIn,
	signOut,
	handlers: { GET, POST },
} = NextAuth(authConfig);
