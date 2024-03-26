import Image from "next/image";

import { cn } from "@/lib/utils";
import { Check } from "lucide-react";
import { landingConfig } from "@/config/landing";

type ZigFeatureProps = {
  reverse?: boolean;
  description: string;
  title: string;
  subtitle: string;
  imageSrc: string;
  list: string[];
};

export default function ZigFeature({
  reverse,
  description,
  title,
  subtitle,
  list,
  imageSrc,
}: ZigFeatureProps) {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-16 items-center">
      <div
        className={cn(
          "max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0",
          reverse && "md:order-1"
        )}
        data-aos="fade-up"
      >
        <Image
          className="max-w-full mx-auto md:max-w-none h-auto"
          src={imageSrc}
          width={540}
          height={405}
          alt="Features 01"
        />
      </div>
      <div
        className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6"
        data-aos="fade-right"
      >
        <div className="md:pr-4 lg:pr-12 xl:pr-16">
          <div className="font-architects-daughter text-xl text-primary mb-2 font-bold italic">
            {description}
          </div>
          <h3 className="h3 mb-3 font-mono">{title}</h3>
          <p className="text-xl text-gray-400 mb-4">{subtitle}</p>
          <ul className="text-lg text-gray-400 -mb-2">
            {list.map((item, index) => (
              <li className="flex items-center mb-2" key={index}>
                <Check className=" text-green-500 mr-2 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
