import { landingConfig } from "@/config/landing";
import ZigFeature from "./zig-feature";

export default function Zigzag() {
  return (
    <section id="features">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-foreground bg-primary rounded-full mb-4">
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
