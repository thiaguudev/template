import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/navigation";
import { Link2, Mail, Monitor } from "lucide-react";

export default function SelectPlatform() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      <Link href="">
        <Card className="hover:outline p-3 hover:outline-primary max-h-36 h-full hover:outline-1 flex items-center justify-center">
          <CardHeader className="flex items-center p-0">
            <CardTitle className="flex flex-col items-center justify-center text-center gap-2 min-w-24">
              <Mail className="stroke-primary group-hover" />
              <span>Email</span>
            </CardTitle>
            <CardDescription className="text-center">
              Send surveys to your customers using email
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href="">
        <Card className="hover:outline p-3 hover:outline-primary max-h-36 h-full hover:outline-1 flex items-center justify-center">
          <CardHeader className="flex items-center gap-3">
            <CardTitle className="flex flex-col items-center justify-center text-center gap-2 min-w-24">
              <Monitor className="stroke-primary group-hover" />
              <span>Web</span>
            </CardTitle>
            <CardDescription className="text-center">
              Survey your customers directly on your website.
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href="">
        <Card className="hover:outline p-3 hover:outline-primary max-h-36 h-full hover:outline-1 flex items-center justify-center">
          <CardHeader className="flex items-center gap-3">
            <CardTitle className="flex flex-col items-center justify-center text-center gap-2 min-w-24">
              <Link2 className="stroke-primary group-hover" />
              <span>Link</span>
            </CardTitle>
            <CardDescription className="text-center">
              Add a link to a survey anywhere you would like.
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
      <Link href="">
        <Card className="hover:outline p-3 hover:outline-primary max-h-36 h-full hover:outline-1 flex items-center justify-center">
          <CardHeader className="flex items-center gap-3">
            <CardTitle className="flex flex-col items-center justify-center text-center gap-2 min-w-24">
              <Monitor className="stroke-primary group-hover" />
              <span>Web</span>
            </CardTitle>
            <CardDescription className="text-center">
              Survey your customers directly on your website.
            </CardDescription>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
