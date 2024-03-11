import { Button } from "@/components/ui/button";
import LeftSide from "../_components/left-side";
import RightSide from "../_components/right-side";

export default function DangerZoneSettings() {
  return (
    <div className="p-5">
      <h1 className="text-2xl text-primary font-bold">General Settings</h1>
      <div className="flex">
        <LeftSide>
          <p className="font-semibold text-lg">Delete project</p>
          <p>
            This will permanently delete your entire project. All your surveys
            and widgets will be deleted permanently.
          </p>
        </LeftSide>
        <RightSide>
          <Button variant="destructive" className="rounded-xl">
            Delete project
          </Button>
        </RightSide>
      </div>
    </div>
  );
}
