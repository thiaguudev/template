"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "@/navigation";

export default function ButtonOpenApp() {
  const router = useRouter();
  const handleOnClick = () => router.push("/app");

  return (
    <Button
      variant="outline"
      className="bg-primary text-secondary"
      onClick={handleOnClick}
    >
      Open app
    </Button>
  );
}
