import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/navigation";
import { Link2, Mail, Monitor, FileCode2 } from "lucide-react";

type CardSelectProps = {
  title: string;
  description: string;
  icon: any;
};

function CardSelect({ title, description, icon: Icon }: CardSelectProps) {
  return (
    <Link href="">
      <Card className="hover:outline p-3 hover:outline-primary max-h-36 h-full hover:outline-1 flex items-center justify-center">
        <CardHeader className="flex items-center p-0">
          <CardTitle className="flex flex-col items-center justify-center text-center gap-2 min-w-24">
            <Icon className="stroke-primary group-hover" />
            <span className="text-xl">{title}</span>
          </CardTitle>
          <CardDescription className="text-center">
            {description}
          </CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}

export default function SelectPlatform() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-5">
      <CardSelect
        title="Email"
        description="Send surveys to your customers using email."
        icon={Mail}
      />
      <CardSelect
        title="Web"
        description=" Survey your customers directly on your website."
        icon={Monitor}
      />
      <CardSelect
        title="Link"
        description="Add a link to a survey anywhere you would like."
        icon={Link2}
      />
      <CardSelect
        title="Embed"
        description="Embed your survey in an email you send from your marketing platform."
        icon={FileCode2}
      />
    </div>
  );
}
