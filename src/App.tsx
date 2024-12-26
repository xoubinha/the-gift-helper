import React, { useState, useEffect } from 'react';
import { Gift } from 'lucide-react';
import { GiftForm } from './components/GiftForm';
import { Recommendations } from './components/Recommendations';
import { initializeOpenAI, getGiftRecommendations } from './services/openai';

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    try {
      initializeOpenAI();
    } catch (err) {
      setError("Please configure Azure OpenAI credentials in your environment variables.");
    }
  }, []);

  const handleSubmit = async (data: {
    name: string;
    age: string;
    hobbies: string;
    giftIdeas: string;
  }) => {
    try {
      setIsLoading(true);
      setError(null);
      const result = await getGiftRecommendations(
        data.name,
        data.age,
        data.hobbies,
        data.giftIdeas
      );
      setRecommendations(result);
    } catch (err) {
      setError("Failed to get recommendations. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[url('https://images.unsplash.com/photo-1512389142860-9c449e58a543?ixlib=rb-4.0.3')] bg-cover bg-fixed">
      <div className="min-h-screen bg-black/40 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl p-8">
            <div className="text-center mb-8">
              <div className="flex justify-center">
                <Gift className="h-12 w-12 text-red-600" />
              </div>
              <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
                Three Wise Men Gift Finder
              </h1>
              <p className="mt-2 text-lg text-gray-600">
                Let the wisdom of the Magi guide your gift choices
              </p>
            </div>

            {error ? (
              <div className="bg-red-50 border-l-4 border-red-400 p-4 mb-6">
                <p className="text-red-700">{error}</p>
              </div>
            ) : null}

            <GiftForm onSubmit={handleSubmit} isLoading={isLoading} />
            <Recommendations recommendations={recommendations} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;