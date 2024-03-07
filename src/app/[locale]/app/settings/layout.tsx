"use client";
import { ReactNode } from "react";

import { Link, usePathname } from "@/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Profile2User, Security } from "iconsax-react";

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  const pathname = usePathname();
  return (
    <div className="p-5">
      <h1 className="text-2xl mb-3 text-primary font-[900]">Settings</h1>
      <div className="grid grid-cols-3 gap-4">
        <Link href="/app/settings/general">
          <Card className="group hover:bg-primary hover:text-white">
            <CardHeader>
              <CardTitle>
                <Profile2User className="fill-primary group-hover:fill-black" />
              </CardTitle>
              <CardDescription className="group-hover:text-white">
                Personal Info
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p>Provide personal details and how we can reach you</p>
            </CardContent>
          </Card>
        </Link>
        <Card className="group hover:bg-primary hover:text-white">
          <CardHeader>
            <CardTitle>
              <Security className="fill-primary group-hover:fill-black" />
            </CardTitle>
            <CardDescription className="group-hover:text-white">
              Login & security
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Update your password and secure your account</p>
          </CardContent>
        </Card>
        <Card className="group hover:bg-primary hover:text-white">
          <CardHeader>
            <CardTitle>
              <Profile2User className="fill-primary group-hover:fill-black" />
            </CardTitle>
            <CardDescription className="group-hover:text-white">
              Personal Info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Provide personal details and how we can reach you</p>
          </CardContent>
        </Card>
        <Card className="group hover:bg-primary hover:text-white">
          <CardHeader>
            <CardTitle>
              <Profile2User className="fill-primary group-hover:fill-black" />
            </CardTitle>
            <CardDescription className="group-hover:text-white">
              Personal Info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Provide personal details and how we can reach you</p>
          </CardContent>
        </Card>
        <Card className="group hover:bg-primary hover:text-white">
          <CardHeader>
            <CardTitle>
              <Profile2User className="fill-primary group-hover:fill-black" />
            </CardTitle>
            <CardDescription className="group-hover:text-white">
              Personal Info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Provide personal details and how we can reach you</p>
          </CardContent>
        </Card>
        <Card className="group hover:bg-primary hover:text-white">
          <CardHeader>
            <CardTitle>
              <Profile2User className="fill-primary group-hover:fill-black" />
            </CardTitle>
            <CardDescription className="group-hover:text-white">
              Personal Info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Provide personal details and how we can reach you</p>
          </CardContent>
        </Card>
        <Card className="group hover:bg-primary hover:text-white">
          <CardHeader>
            <CardTitle>
              <Profile2User className="fill-primary group-hover:fill-black" />
            </CardTitle>
            <CardDescription className="group-hover:text-white">
              Personal Info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Provide personal details and how we can reach you</p>
          </CardContent>
        </Card>
        <Card className="group hover:bg-primary hover:text-white">
          <CardHeader>
            <CardTitle>
              <Profile2User className="fill-primary group-hover:fill-black" />
            </CardTitle>
            <CardDescription className="group-hover:text-white">
              Personal Info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Provide personal details and how we can reach you</p>
          </CardContent>
        </Card>
        <Card className="group hover:bg-primary hover:text-white">
          <CardHeader>
            <CardTitle>
              <Profile2User className="fill-primary group-hover:fill-black" />
            </CardTitle>
            <CardDescription className="group-hover:text-white">
              Personal Info
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p>Provide personal details and how we can reach you</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
