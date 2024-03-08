"use client";

import { EmojiHappy, EmojiNormal, EmojiSad, Message } from "iconsax-react";

import CardAnalytics from "@/components/card-analytics";

export default function AppPage() {
  return (
    // <div className="p-4 md:p-6 space-y-4 columns-1 sm:columns-2 lg:columns-3">
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 m-3">
      {/* <CardAnalytics
        title="Promoters"
        icon={
          <EmojiHappy
            className="text-green-500 w-7 h-7"
            width={40}
            height={40}
          />
        }
        value={12513}
        difference={5}
        today={34}
      />

      <CardAnalytics
        title="Neutrals"
        icon={<EmojiNormal className="text-yellow-500 w-7 h-7" />}
        value={521}
        difference={0}
        today={28}
      />

      <CardAnalytics
        title="Detractors"
        icon={<EmojiSad className="text-red-500 w-7 h-7" />}
        value={1574}
        difference={28}
        today={158}
      />

      <CardAnalytics
        title="Responses"
        icon={<Message className="text-primary w-7 h-7" />}
        value={15426}
        difference={58}
        today={19}
      /> */}
    </div>
  );
}
