import { useState } from "react";
import { Navbar } from "@/components/navbar";

export function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);

  const handleIframeLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="min-h-full w-full items-start justify-start text-start">
      <div className="sticky top-0 bg-white shadow-lg">
        <Navbar />
      </div>
      <div className="px-2 mb-4 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-80 z-10">
            <div className="flex flex-col items-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-2"></div>
              <p className="text-gray-600">Loading dashboard...</p>
            </div>
          </div>
        )}
        <iframe
          width="1525"
          height="645"
          src="https://us-east-1.quicksight.aws.amazon.com/sn/embed/share/accounts/161338712555/dashboards/0a48dddc-dd43-4ec1-8291-1dd1af1bbdfa?directory_alias=intinium"
          onLoad={handleIframeLoad}
          style={{ visibility: isLoading ? "hidden" : "visible" }}
        ></iframe>
      </div>
    </div>
  );
}
