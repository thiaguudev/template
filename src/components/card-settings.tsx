"use client";

import { FC } from "react";

import { Link } from "@/navigation";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
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
      <Card className="hover:outline p-3 hover:outline-primary max-h-32 h-full hover:outline-1">
        <CardHeader className="flex flex-row items-center gap-3">
          <CardTitle className="flex flex-col items-center justify-center text-center gap-2 min-w-24">
            <Icon className="stroke-primary group-hover" />
            <span>{title}</span>
          </CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}
