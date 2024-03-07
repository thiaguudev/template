"use client";

import TraningAnalysis from "@/components/training-analysis";

export default function AppPage() {
  return (
    <div className="p-4 md:p-6 space-y-4 columns-1 sm:columns-2 lg:columns-3">
      <div className="break-inside-avoid-column space-y-4">
        <TraningAnalysis />
      </div>

      <div className="break-inside-avoid-column space-y-4">
        {/* <CourseProgress /> */}
      </div>

      <div className="break-inside-avoid-column space-y-4">
        {/* <EmployeeSpotlight /> */}
      </div>

      <div className="break-inside-avoid-column space-y-4">
        {/* <TimeTracker /> */}
      </div>

      <div className="break-inside-avoid-column space-y-4">
        {/* <Notes /> */}
      </div>

      <div className="break-inside-avoid-column space-y-4">
        {/* <StatusTracker /> */}
      </div>

      <div className="break-inside-avoid-column space-y-4">
        {/* <CurrentProject /> */}
      </div>
    </div>
  );
}

// export default isAuth<any>(AppPage);
