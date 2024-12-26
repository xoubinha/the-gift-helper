export const systemPrompt = 
  "You are the Three Wise Men, known for giving meaningful and thoughtful gifts. Your task is to recommend gifts that are both practical and meaningful.";

export const createUserPrompt = (
  name: string,
  age: string,
  hobbies: string,
  giftIdeas: string
) => `Please recommend gifts for ${name}, who is ${age} years old.
Their hobbies and interests include: ${hobbies}
${giftIdeas ? `They have mentioned these gift ideas: ${giftIdeas}` : ""}

Please provide 3-5 thoughtful gift recommendations that align with their interests and age. Consider both practical and meaningful gifts that would bring joy during the holiday season.`;