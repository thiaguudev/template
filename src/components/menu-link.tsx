import { FC } from "react";

import { Link } from "@/navigation";

type MenuLinkProps = {
  href: string;
  active: boolean;
  icon: FC<any>;
  title: string;
};

export default function MenuLink({
  href,
  active,
  icon: Icon,
  title,
}: MenuLinkProps) {
  return (
    <Link
      href={href}
      className={`flex ${
        active ? "text-primary" : ""
      } hover:px-8 duration-200 rounded-md w-full py-2 px-6 items-center gap-2`}
    >
      {<Icon variant="Outline" size={16} />}
      {title}
    </Link>
  );
}
