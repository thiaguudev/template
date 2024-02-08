"use client";

import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

export default function PlansList() {
  const { toast } = useToast();

  const handleOnPlan = async () => {
    try {
      const response = await fetch("/api/stripe", {
        method: "POST",
        body: JSON.stringify({
          priceId: "price_1OeiErKFxdF5l7Kyp5Fwo80l",
        }),
      });
      const { url } = await response.json();
      window.location.href = url;
    } catch (error: any) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: error.message,
      });
    }
  };

  return (
    <Button variant="outline" onClick={handleOnPlan}>
      Get plan
    </Button>
  );
}
