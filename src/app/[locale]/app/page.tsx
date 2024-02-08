import isAuth from "@/components/isAuth";
import { Toaster } from "@/components/ui/toaster";

function AppPage() {
  return (
    <div>
      AppPage
      <Toaster />
    </div>
  );
}

export default isAuth<any>(AppPage);
