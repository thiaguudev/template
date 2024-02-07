import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getServerAuthSession } from "@/lib/auth";
import ButtonSignOut from "@/components/ButtonSignOut";
import ButtonSignIn from "@/components/ButtonSignIn";

export default async function UserNav() {
  const authSession = await getServerAuthSession();

  return (
    <div>
      {authSession?.user ? (
        <div>
          <Avatar>
            <AvatarImage
              src={authSession?.user?.image as string}
              alt="@shadcn"
            />
            <AvatarFallback>
              {authSession?.user?.name?.substring(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
          <ButtonSignOut />
        </div>
      ) : (
        <ButtonSignIn />
      )}
    </div>
  );
}
