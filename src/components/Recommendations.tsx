import React from 'react';
import { Gift } from 'lucide-react';

interface RecommendationsProps {
  recommendations: string | null;
}

export function Recommendations({ recommendations }: RecommendationsProps) {
  if (!recommendations) return null;

  return (
    <div className="mt-8 bg-white p-6 rounded-lg shadow-lg border-2 border-red-100">
      <h2 className="text-xl font-semibold text-gray-800 flex items-center mb-4">
        <Gift className="mr-2 text-red-500" />
        Wise Recommendations
      </h2>
      <div className="prose prose-red">
        {recommendations.split('\n').map((paragraph, index) => (
          <p key={index} className="text-gray-600">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}