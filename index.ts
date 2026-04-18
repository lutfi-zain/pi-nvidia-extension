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
        id: "z-ai/glm4.7",
        name: "GLM 4.7",
        reasoning: true,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 16384,
        maxTokens: 16384,
        compat: {
          maxTokensField: "max_tokens",
          thinkingFormat: "qwen"
        }
      },
      {
        id: "minimaxai/minimax-m2.7",
        name: "MiniMax M2.7",
        reasoning: true,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 1000000,
        maxTokens: 8192,
        compat: {
          maxTokensField: "max_tokens"
        }
      },
      {
        id: "moonshotai/kimi-k2-thinking",
        name: "Kimi K2 Thinking",
        reasoning: true,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 131072,
        maxTokens: 16384,
        compat: {
          maxTokensField: "max_tokens"
        }
      },
      {
        id: "qwen/qwen3-coder-480b-a35b-instruct",
        name: "Qwen 3 Coder 480B",
        reasoning: false,
        input: ["text"],
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
        contextWindow: 262144,
        maxTokens: 4096,
        compat: {
          maxTokensField: "max_tokens"
        }
      }
    ]
  });
}
