"use client";
import { FC } from "react";

import { Link } from "@/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

type CardSettingsProps = {
  href: string;
  icon: FC<any>;
  description: string;
  title: string;
};

export default function CardSettings({
  href,
  description,
  title,
  icon: Icon,
}: CardSettingsProps) {
  return (
    <Link href={href}>
      <Card className="group hover:bg-primary hover:text-white h-[180px]">
        <CardHeader>
          <CardTitle>
            <Icon className="stroke-primary group-hover" />
          </CardTitle>
          <CardDescription className="group-hover:text-white">
            {title}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p>{description}</p>
        </CardContent>
      </Card>
    </Link>
  );
}
