import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

const endpoint = import.meta.env.VITE_AZURE_OPENAI_ENDPOINT;
const apiKey = import.meta.env.VITE_AZURE_OPENAI_API_KEY;
const deploymentName = import.meta.env.VITE_AZURE_OPENAI_DEPLOYMENT;

let client: OpenAIClient;

export const initializeOpenAI = () => {
  if (!endpoint || !apiKey || !deploymentName) {
    throw new Error("Azure OpenAI credentials not configured");
  }
  
  client = new OpenAIClient(endpoint, new AzureKeyCredential(apiKey));
};

export const getGiftRecommendations = async (
  name: string,
  age: string,
  hobbies: string,
  giftIdeas: string
) => {
  if (!client) {
    throw new Error("OpenAI client not initialized");
  }

  const messages = [
    {
      role: "system",
      content: "You are the Three Wise Men, known for giving meaningful and thoughtful gifts. Your task is to recommend gifts that are both practical and meaningful."
    },
    {
      role: "user",
      content: `Please recommend gifts for ${name}, who is ${age} years old.
Their hobbies and interests include: ${hobbies}
${giftIdeas ? `They have mentioned these gift ideas: ${giftIdeas}` : ""}

Please provide 3-5 thoughtful gift recommendations that align with their interests and age. Consider both practical and meaningful gifts that would bring joy during the holiday season.`
    }
  ];

  const response = await client.getChatCompletions(deploymentName, messages, {
    temperature: 0.7,
    maxTokens: 500
  });

  return response.choices[0].message?.content || "No recommendations available";
};