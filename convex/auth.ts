import Github from "@auth/core/providers/github";
import Google from "@auth/core/providers/google";
import { convexAuth } from "@convex-dev/auth/server";
import { Password } from "@convex-dev/auth/providers/Password";

export const { auth, signIn, signOut, store } = convexAuth({
  providers: [Password, Github, Google], // convex settings에 AUTH_GITHUB_ID, AUTH_GITHUB_SECRET 있으면 안해도 되고 없을 경우 여기에서 세팅 ({clientId, clientSecret})
});
