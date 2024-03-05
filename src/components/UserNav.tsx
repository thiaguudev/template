import { getServerAuthSession } from "@/lib/auth";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default async function UserNav() {
  const authSession = await getServerAuthSession();

  return (
    <div>
      <div>
        <Avatar>
          <AvatarImage src={authSession?.user?.image as string} alt="@shadcn" />
          <AvatarFallback>
            {authSession?.user?.name?.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
}
