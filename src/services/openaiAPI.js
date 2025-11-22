const openaiAPI = async (prompt) => {
  try {
    const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

    if (!apiKey) {
      console.error(
        "Chave da API não configurada. Configure VITE_OPENAI_API_KEY no arquivo .env"
      );
      return "⚠️ Chave da API não configurada. Por favor, configure a variável VITE_OPENAI_API_KEY no arquivo .env";
    }

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "user",
            content: prompt,
          },
        ],
        max_tokens: 1000,
        temperature: 0.7,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("Erro na API:", errorData);
      return null;
    }

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.error("Erro na API:", error);
    return null;
  }
};

export { openaiAPI };
