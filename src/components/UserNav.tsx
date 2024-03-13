import { ArrowRight2 } from "iconsax-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function UserNav() {
  return (
    <div className="flex justify-between items-center  w-full">
      <div className="flex gap-3">
        <Avatar>
          <AvatarImage
            src="https://github.com/shadcn.png"
            alt="@shadcn"
            width={36}
            height={36}
          />
          <AvatarFallback>VC</AvatarFallback>
        </Avatar>

        <div className="">
          <p className="text-sm font-semibold text-foregound">
            Vitória Carolina
          </p>
          <p className="text-xs font-medium text-muted-foreground">
            vitoria@carolina.com
          </p>
        </div>
      </div>
      <button className="text-gray-500">
        <ArrowRight2 size={16} />
      </button>
    </div>
  );
}
