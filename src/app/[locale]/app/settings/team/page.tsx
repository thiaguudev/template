"use client";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Progress } from "@/components/ui/progress";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import LeftSide from "../_components/left-side";
import RightSide from "../_components/right-side";

export default function TeamSettings() {
  const form = useForm();

  function handleOnSubmit(d: any) {
    console.log(d);
  }

  return (
    <div className="p-5">
      <h1 className="text-2xl text-primary font-bold">Team Settings</h1>
      <div className="flex flex-col">
        <div className="flex">
          <LeftSide>
            <p className="font-semibold text-lg">Invite teammates</p>
            <p>
              Invite new members to your collaborate with you in your Senja
              project.
            </p>
          </LeftSide>
          <RightSide>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(handleOnSubmit)}
                className="flex gap-3 items-center"
              >
                <Input
                  placeholder="Email address"
                  className="rounded-xl w-full"
                />
                <Select defaultValue="teammember">
                  <SelectTrigger className="w-[180px] rounded-xl">
                    <SelectValue placeholder="Theme" />
                  </SelectTrigger>
                  <SelectContent className="rounded-xl">
                    <SelectItem value="admin">Admin</SelectItem>
                    <SelectItem value="teammember">Team member</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="rounded-xl">Send invite</Button>
              </form>
            </Form>
          </RightSide>
        </div>
        <div className="flex">
          <LeftSide>
            <p className="font-semibold text-lg">Manage Teammates</p>
            <p>Manage existing teammates.</p>
            <div className="w-[80%]">
              <div className="flex justify-between items-center mb-1">
                <span>Seats</span>
                <span>1 / 1</span>
              </div>
              <Progress value={100} className="w-full" />
            </div>
          </LeftSide>
          <RightSide>
            <Card>
              <CardHeader>
                <CardTitle>Thiago</CardTitle>
              </CardHeader>
            </Card>
          </RightSide>
        </div>
      </div>
    </div>
  );
}
