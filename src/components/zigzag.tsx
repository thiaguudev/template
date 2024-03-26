import Image from "next/image";

import { cn } from "@/lib/utils";
import { landingConfig } from "@/config/landing";

type ZigFeatureProps = {
  reverse?: boolean;
  description: string;
  title: string;
  subtitle: string;
  imageSrc: string;
};

function ZigFeature({
  reverse,
  description,
  title,
  subtitle,
  imageSrc,
}: ZigFeatureProps) {
  return (
    <div className="md:grid md:grid-cols-12 md:gap-6 items-center">
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
          <div className="font-architects-daughter text-xl text-purple-600 mb-2">
            {description}
          </div>
          <h3 className="h3 mb-3 font-mono">{title}</h3>
          <p className="text-xl text-gray-400 mb-4">{subtitle}</p>
          <ul className="text-lg text-gray-400 -mb-2">
            <li className="flex items-center mb-2">
              <svg
                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Duis aute irure dolor in reprehenderit</span>
            </li>
            <li className="flex items-center mb-2">
              <svg
                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Excepteur sint occaecat</span>
            </li>
            <li className="flex items-center">
              <svg
                className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                viewBox="0 0 12 12"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
              </svg>
              <span>Amet consectetur adipiscing elit</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Reach goals that matter
            </div>
            <h1 className="h2 mb-4 font-mono">
              One product, unlimited solutions.
            </h1>
            <p className="text-xl text-gray-400">
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit laborum — semper quis lectus nulla.
            </p>
          </div>

          <div className="grid gap-20">
            {landingConfig.zigzag.map((zigFeat, index) => (
              <ZigFeature key={index} {...zigFeat} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
