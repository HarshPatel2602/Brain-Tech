const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 64,
  maxOutputTokens: 8192,
  responseMimeType: "application/json",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Write a script to generate 30 seconds video on topic:Interesting historical story along with AI image prompt in Realistic format for each scene and give me result in JSON format with imagePrompt and ContentText as field, No Plain Text",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: '```json\n[\n  {\n    "imagePrompt": "A bustling medieval marketplace, people in colorful clothing, merchants selling their wares, a large wooden sign hanging above the scene reading \\"The Golden Lion Inn\\"",\n    "ContentText": "In the heart of medieval England, nestled amidst a bustling marketplace, stood the Golden Lion Inn. It was a place where travelers and locals alike gathered, sharing stories and ale under the watchful eyes of the innkeeper, a gruff but kind-hearted man named Thomas."\n  },\n  {\n    "imagePrompt": "A portrait of Thomas, middle-aged with a weathered face, wearing a leather apron and a kind smile, holding a tankard of ale",\n    "ContentText": "Thomas, a man with a heart as warm as his ale, had a secret – a hidden room behind the tavern’s fireplace, filled with treasures."\n  },\n  {\n    "imagePrompt": "A close-up of a dusty wooden door hidden behind the fireplace, with a small, ornate keyhole",\n    "ContentText": "It was rumored that the room held a forgotten treasure, a hoard of gold, jewels, and ancient artifacts, a legacy from a long-lost noble family."\n  },\n  {\n    "imagePrompt": "A montage of close-ups of gold coins, glittering jewels, and ancient scrolls, interspersed with shots of Thomas looking thoughtful",\n    "ContentText": "Thomas, who had inherited the inn from his father, knew the legend, but he had never dared to open the door, fearing what might lie within."\n  },\n  {\n    "imagePrompt": "A young woman in a simple dress, with a worried expression, entering the tavern, looking around nervously",\n    "ContentText": "One stormy evening, a young woman, her clothes tattered and her eyes filled with worry, stumbled into the inn."\n  },\n  {\n    "imagePrompt": "Thomas talking to the woman, his face filled with concern, while she clutches a small, worn leather bag",\n    "ContentText": "She was being pursued by bandits, desperate for shelter and safety. Thomas, ever the compassionate man, took her in, offering her food, warmth, and a place to rest."\n  },\n  {\n    "imagePrompt": "A close-up of the woman\'s hand reaching into the leather bag, revealing a small, ornate key",\n    "ContentText": "As the woman spoke, she reached into her bag, pulling out a small, ornate key. It was the key to the hidden room."\n  },\n  {\n    "imagePrompt": "Thomas staring at the key, his eyes widening in surprise, a realization dawning on his face",\n    "ContentText": "Thomas, recognizing the key, realized the woman was a descendant of the lost family."\n  },\n  {\n    "imagePrompt": "A montage of Thomas and the woman opening the hidden door, revealing a dusty and dimly lit room filled with treasure",\n    "ContentText": "Together, they unlocked the door, revealing the forgotten treasures within."\n  },\n  {\n    "imagePrompt": "Thomas and the woman standing in the room, looking at the treasure with awe and wonder, a glimmer of hope in their eyes",\n    "ContentText": "The discovery sparked a renewed sense of hope, a chance for the woman to reclaim her family\'s legacy."\n  }\n]\n```\n\n**Notes:**\n\n* This JSON structure includes two fields for each scene:\n    * `imagePrompt`: A detailed description for an AI image generator to create a realistic image for the scene.\n    * `ContentText`: The narration for the scene, providing context and moving the story forward.\n* You can adjust the image prompts and content text to fit your desired style and tone.\n* The script can be easily adapted for different video lengths by adding or removing scenes.\n* Consider adding music, sound effects, and transitions to enhance the video experience.\n* Use a professional AI image generator like DALL-E 2 or Midjourney to create high-quality images based on the prompts. \n',
        },
      ],
    },
  ],
});
