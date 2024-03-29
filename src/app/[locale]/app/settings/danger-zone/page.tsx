"use client";

import Page from "@/components/shared/page";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

function AlertDialogDemo({ onConfirm }: any) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button variant="destructive">Delete Project</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction onClick={onConfirm}>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default function DangerZoneSettings() {
  const { toast } = useToast();

  const handleDelete = () => {
    toast({
      title: "Successfully on exclude the project",
    });
  };

  return (
    <Page title="Danger Zone" subtitle="Manage dangerous settings.">
      <div className="mt-5">
        <AlertDialogDemo onConfirm={handleDelete} />
        <span className="ml-3 text-muted-foreground">
          This will permanently delete your entire project. All your surveys and
          widgets will be deleted permanently.
        </span>
      </div>
    </Page>
  );
}
