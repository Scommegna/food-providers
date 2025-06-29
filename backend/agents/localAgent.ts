// agents/localAgent.ts
import axios from "axios";

export async function queryLocalAgent(
  prompt: string,
  signal?: AbortSignal
): Promise<string> {
  try {
    const response = await axios.post(
      "http://localhost:11434/api/generate",
      {
        model: "phi",
        prompt,
        stream: false,
      },
      { signal }
    );

    return response.data.response;
  } catch (error: any) {
    if (axios.isCancel(error)) {
      throw new Error("timeout");
    }
    console.error("Erro ao consultar LLM local:", error);
    throw new Error("Erro no modelo local");
  }
}
