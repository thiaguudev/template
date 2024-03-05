import isAuth from "@/components/isAuth";
import { Toaster } from "@/components/ui/toaster";

function AppPage() {
  return <Toaster />;
}

export default isAuth<any>(AppPage);
