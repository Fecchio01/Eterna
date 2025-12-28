
import { GoogleGenAI, Type } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const generateViralCaption = async (category: string, mood: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: `Gere uma legenda viral e persuasiva para um vídeo de conteúdo dark no TikTok/Instagram.
      Categoria: ${category}
      Clima/Vibe: ${mood}
      Idioma: Português Brasileiro
      A legenda deve ser curta, impactante e usar a estética dark (luxo, mindset, aspiracional).`,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            text: { type: Type.STRING, description: "O texto da legenda" },
            hashtags: { 
              type: Type.ARRAY, 
              items: { type: Type.STRING },
              description: "3 a 5 hashtags relevantes"
            }
          },
          required: ["text", "hashtags"]
        }
      },
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Erro ao gerar legenda:", error);
    return {
      text: "O sucesso não é sorte, é estratégia. Construa seu império em silêncio.",
      hashtags: ["#mindset", "#sucesso", "#darkcontent", "#luxo"]
    };
  }
};
