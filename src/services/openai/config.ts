import { OpenAIClient, AzureKeyCredential } from "@azure/openai";

export const config = {
  endpoint: import.meta.env.VITE_AZURE_OPENAI_ENDPOINT,
  apiKey: import.meta.env.VITE_AZURE_OPENAI_API_KEY,
  deploymentName: import.meta.env.VITE_AZURE_OPENAI_DEPLOYMENT
};

let client: OpenAIClient | null = null;

export const getClient = () => {
  if (!client) {
    if (!config.endpoint || !config.apiKey || !config.deploymentName) {
      throw new Error("Azure OpenAI credentials not configured");
    }
    client = new OpenAIClient(config.endpoint, new AzureKeyCredential(config.apiKey));
  }
  return client;
};