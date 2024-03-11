"use client";

export default function RightSide({ children }: any) {
  return (
    <div className="border-b border-gray-400 p-5 flex items-center">
      {children}
    </div>
  );
}
