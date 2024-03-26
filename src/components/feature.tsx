import { LucideIcon } from "lucide-react";

type FeatureProps = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export default function Feature({
  title,
  description,
  icon: Icon,
}: FeatureProps) {
  return (
    <div
      className="relative flex flex-col items-center"
      data-aos="fade-up"
      data-aos-delay="100"
      data-aos-anchor="[data-aos-id-blocks]"
    >
      <div className="group h-14 w-14 bg-primary rounded-full flex justify-center items-center mb-1">
        <Icon size={24} className="text-white group-hover:scale-110" />
      </div>
      <h4 className="h4 mb-1 font-mono">{title}</h4>
      <p className="text-lg text-gray-400 text-center">{description}</p>
    </div>
  );
}
