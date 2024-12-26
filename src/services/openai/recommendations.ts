import { getClient } from './config';
import { systemPrompt, createUserPrompt } from './prompts';
import type { GiftRequestParams } from './types';

export const getGiftRecommendations = async ({
  name,
  age,
  hobbies,
  giftIdeas
}: GiftRequestParams) => {
  const client = getClient();

  const messages = [
    { role: "system", content: systemPrompt },
    { 
      role: "user", 
      content: createUserPrompt(name, age, hobbies, giftIdeas)
    }
  ];

  const response = await client.getChatCompletions(
    import.meta.env.VITE_AZURE_OPENAI_DEPLOYMENT, 
    messages,
    {
      temperature: 0.7,
      maxTokens: 500
    }
  );

  return response.choices[0].message?.content || "No recommendations available";
};