typescript
export class Gemini {
  private apiKey: string;

  constructor(options: { key: string }) {
    this.apiKey = options.key;
  }

  async generate(prompt: string): Promise<string> {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${this.apiKey}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            contents: [{ role: "user", parts: [{ text: prompt }] }],
          }),
        }
      );

      const data = await response.json();
      if (data && data.candidates && data.candidates.length > 0) {
        return data.candidates[0].content.parts[0].text.trim();
      } else {
        console.error("Gemini API returned an unexpected response:", data);
        return "I have nothing to say right now...";
      }
    } catch (error) {
      console.error("Error generating text from Gemini API:", error);
      return "Sorry, I'm having trouble speaking right now.";
    }
  }
}
