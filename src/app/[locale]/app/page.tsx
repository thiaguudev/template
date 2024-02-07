import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import isAuth from "@/components/isAuth";

function AppPage() {
  return (
    <div>
      <ThemeSwitcher />
      AppPage
    </div>
  );
}

export default isAuth(AppPage);
