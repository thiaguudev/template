import { Link } from "@/navigation";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type CardSurveyProps = {
  href: string;
  name: string;
  status: number;
  description?: string;
};

export default function CardSurvey({
  href,
  name,
  description,
  status,
}: CardSurveyProps) {
  function getStatus(status: number) {
    switch (status) {
      case 1:
        return "Analyze the results";
      case 2:
        return "Continue editing";
    }
  }

  return (
    <Link href={`/app/surveys/${href}`}>
      <Card className="group hover:bg-primary hover:text-white px-3 py-2 h-[136px]">
        <CardHeader className="p-1">
          <CardTitle>{name}</CardTitle>
          <CardDescription className="group-hover:text-white">
            {description ?? "No description"}
          </CardDescription>
        </CardHeader>
        <CardContent></CardContent>
        <CardFooter className="p-1 flex justify-center items-center">
          <Button className="rounded-xl group-hover:bg-white group-hover:text-black">
            {getStatus(status)}
          </Button>
        </CardFooter>
      </Card>
    </Link>
  );
}
