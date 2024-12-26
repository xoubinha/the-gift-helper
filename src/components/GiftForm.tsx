import React, { useState } from 'react';
import { Gift, Star, Send } from 'lucide-react';

interface FormData {
  name: string;
  age: string;
  hobbies: string;
  giftIdeas: string;
}

interface GiftFormProps {
  onSubmit: (data: FormData) => void;
  isLoading: boolean;
}

export function GiftForm({ onSubmit, isLoading }: GiftFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    age: '',
    hobbies: '',
    giftIdeas: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
          placeholder="Who is receiving the gift?"
        />
      </div>

      <div>
        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
          Age
        </label>
        <input
          type="number"
          name="age"
          id="age"
          required
          value={formData.age}
          onChange={handleChange}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
          placeholder="Age"
        />
      </div>

      <div>
        <label htmlFor="hobbies" className="block text-sm font-medium text-gray-700">
          Hobbies & Interests
        </label>
        <textarea
          name="hobbies"
          id="hobbies"
          required
          value={formData.hobbies}
          onChange={handleChange}
          rows={3}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
          placeholder="What does this person enjoy doing?"
        />
      </div>

      <div>
        <label htmlFor="giftIdeas" className="block text-sm font-medium text-gray-700">
          Gift Ideas (Optional)
        </label>
        <textarea
          name="giftIdeas"
          id="giftIdeas"
          value={formData.giftIdeas}
          onChange={handleChange}
          rows={2}
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-red-500 focus:ring-red-500 sm:text-sm"
          placeholder="Any specific gift ideas or wishes?"
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
      >
        {isLoading ? (
          <>
            <Star className="animate-spin -ml-1 mr-2 h-4 w-4" />
            Getting Wise Recommendations...
          </>
        ) : (
          <>
            <Send className="mr-2 h-4 w-4" />
            Get Gift Recommendations
          </>
        )}
      </button>
    </form>
  );
}