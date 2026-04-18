import type { ExtensionAPI } from "@mariozechner/pi-coding-agent";
import type { OAuthCredentials, OAuthLoginCallbacks } from "@mariozechner/pi-ai";

export default function (pi: ExtensionAPI) {
  pi.registerProvider("nvidia", {
    baseUrl: "https://integrate.api.nvidia.com/v1",
    apiKey: "NVIDIA_API_KEY", // Environment variable or auth.json key
    api: "openai-completions",
    oauth: {
      name: "NVIDIA NIM",
      async login(callbacks: OAuthLoginCallbacks): Promise<OAuthCredentials> {
        // Prompt user for their NVIDIA API key
        const apiKey = await callbacks.onPrompt({
          message: "Enter your NVIDIA API key (get one at https://build.nvidia.com):"
        });
        
        // Validate the key format (NVIDIA keys start with 'nvapi-')
        if (!apiKey.startsWith("nvapi-")) {
          throw new Error("Invalid NVIDIA API key format. Keys should start with 'nvapi-'");
        }
        
        // Return credentials (no expiration for API keys)
        return {
          refresh: apiKey,
          access: apiKey,
          expires: Date.now() + 365 * 24 * 60 * 60 * 1000 // 1 year from now
        };
      },
      async refreshToken(credentials: OAuthCredentials): Promise<OAuthCredentials> {
        // API keys don't expire, just return the same credentials
        return credentials;
      },
      getApiKey(credentials: OAuthCredentials): string {
        return credentials.access;
      }
    },
    models: [
      {
        id: "minimaxai/minimax-m2.5",
        name: "MiniMax M2.5 (SWE 80.2%, 204k)",
        reasoning: true,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 204800,
        maxTokens: 8192,
        compat: {
          maxTokensField: "max_tokens"
        }
      },
      {
        id: "moonshotai/kimi-k2.5",
        name: "Kimi K2.5 (SWE 76.8%, 200k)",
        reasoning: true,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 200000,
        maxTokens: 8192,
        compat: {
          maxTokensField: "max_tokens"
        }
      },
      {
        id: "z-ai/glm4.7",
        name: "GLM 4.7 (SWE 73.8%, 200k)",
        reasoning: true,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 200000,
        maxTokens: 16384,
        compat: {
          maxTokensField: "max_tokens",
          thinkingFormat: "qwen"
        }
      },
      {
        id: "moonshotai/kimi-k2-thinking",
        name: "Kimi K2 Thinking (SWE 71.3%, 256k)",
        reasoning: true,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 256000,
        maxTokens: 16384,
        compat: {
          maxTokensField: "max_tokens"
        }
      },
      {
        id: "mistralai/devstral-2-123b-instruct-2512",
        name: "Devstral 2 123B (SWE 72.2%, 262k)",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 262144,
        maxTokens: 8192,
        compat: {
          maxTokensField: "max_tokens"
        }
      },
      {
        id: "meta/llama-4-maverick-17b-128e-instruct",
        name: "Llama 4 Maverick 17B (SWE 62.0%, 1M)",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 1000000,
        maxTokens: 8192,
        compat: {
          maxTokensField: "max_tokens"
        }
      },
      {
        id: "qwen/qwen3-next-80b-a3b-instruct",
        name: "Qwen 3 Next 80B (SWE 65.0%, 262k)",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 262144,
        maxTokens: 8192,
        compat: {
          maxTokensField: "max_tokens"
        }
      },
      {
        id: "openai/gpt-oss-120b",
        name: "GPT OSS 120B (SWE 60.0%, 128k)",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 8192,
        compat: {
          maxTokensField: "max_tokens"
        }
      },
      {
        id: "mistralai/mistral-large-3-675b-instruct-2512",
        name: "Mistral Large 3 675B (SWE 58.0%, 32k)",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 32000,
        maxTokens: 8192,
        compat: {
          maxTokensField: "max_tokens"
        }
      },
      {
        id: "nvidia/llama-3.1-nemotron-ultra-253b-v1",
        name: "Nemotron Ultra 253B (SWE 56.0%, 128k)",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 128000,
        maxTokens: 8192,
        compat: {
          maxTokensField: "max_tokens"
        }
      }
    ]
  });
}
