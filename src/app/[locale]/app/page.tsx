import isAuth from "@/components/isAuth";
import { getServerAuthSession } from "@/lib/auth";
import { redirect } from "@/navigation";

export default async function AppPage() {
  const auth = await getServerAuthSession();
  if (!auth) return redirect("/sign-in");
  return <div />;
}
