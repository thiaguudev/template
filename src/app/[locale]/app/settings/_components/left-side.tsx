"use client";

export default function LeftSide({ children }: any) {
  return (
    <div className="border-b border-r border-gray-400 p-5 flex flex-col items-start justify-center gap-3 grow">
      {children}
    </div>
  );
}
