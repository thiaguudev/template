import { redirect } from "@/navigation";
import { getServerAuthSession } from "@/lib/auth";

export default function isAuth<P extends Record<string, unknown>>(
  Component: React.ComponentType<P>
) {
  const displayName = Component.displayName || Component.name || "Component";

  async function IsAuth(props: P) {
    const auth = await getServerAuthSession();
    if (!auth) return redirect("/sign-in");
    return <Component {...props} />;
  }

  IsAuth.displayName = `isAuth(${displayName})`;

  return IsAuth;
}
