"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import z from "zod";
import { Edit, Trash2 } from "lucide-react";

import { useToast } from "@/components/ui/use-toast";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import Page from "@/components/shared/page";

const teamMembers = [
  {
    id: "1653waq",
    name: "Bob Dylan",
    email: "bob.dylan@gmail.com",
    role: "member",
    lastLogin: "---",
    datedAdded: new Date(),
  },
  {
    id: "1653wew",
    name: "John Doe",
    email: "max158@hotmail.com",
    role: "administrator",
    lastLogin: "---",
    datedAdded: new Date(),
  },
  {
    id: "1653wq",
    name: "Joana Med.",
    email: "joana8@email.com",
    role: "member",
    lastLogin: "---",
    datedAdded: new Date(),
  },
  {
    id: "1653wqa",
    name: "Duana Johnson",
    email: "duaduajon@gmail.com",
    role: "administrator",
    lastLogin: "---",
    datedAdded: new Date(),
  },
];

type CardUserProps = {
  id: string;
  name: string;
  email: string;
};

function CardUser({ id, name, email }: CardUserProps) {
  return (
    <div className=" flex bg-background shadow-xl p-4 rounded-xl flex-col space-y-5 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
      <div className="flex gap-3 max-w-[350px] w-full">
        <div className="flex items-center gap-5 grow">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>

          <div className="w-full max-w-[250px]">
            <p>{name}</p>
            <p className="text-muted-foreground">{email}</p>
          </div>
        </div>

        <div className="flex items-center space-x-2">
          <Switch id="status" />
          <Label htmlFor="status">Active</Label>
        </div>
      </div>

      <div className="flex gap-1">
        <Button className="bg-blue-500 group hover:bg-white hover:text-blue-500">
          <Edit className="mr-2 h-4 w-4 group-hover:text-blue-500" /> Edit
        </Button>

        <Button className="bg-red-500 group hover:bg-white hover:text-red-500">
          <Trash2 className="mr-2 h-4 w-4 group-hover:text-red-500" /> Delete
        </Button>
      </div>
    </div>
  );
}

export default function TeamSettings() {
  const { toast } = useToast();

  const schema = z.object({
    email: z.string().email(),
  });

  const form = useForm<z.infer<typeof schema>>();

  const handleSubmit: SubmitHandler<z.infer<typeof schema>> = (d) => {
    toast({
      title: "Submitting form",
      description: JSON.stringify(d, null, 2),
    });
  };

  return (
    <Page>
      <div className="flex flex-col text-center md:text-start">
        <h1 className="text-2xl mb-3 text-primary font-black">Team Settings</h1>
        <p className="text-muted-foreground">Manage your seats for team.</p>
      </div>
      <div className="mt-5">
        <div className="flex flex-col gap-3">
          {teamMembers.map((member) => (
            <CardUser
              key={member.id}
              id={member.id}
              name={member.name}
              email={member.email}
            />
          ))}
        </div>
      </div>
    </Page>
  );
}
