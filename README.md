# ⚠️ DEPRECATED: Use pi-nvidia-nim Instead

**This extension is no longer maintained.** 

**Please use the superior [pi-nvidia-nim](https://www.npmjs.com/package/pi-nvidia-nim) package instead.**

---

# pi-nvidia-nim (Recommended Alternative)

A more complete and feature-rich NVIDIA NIM provider for pi-coding-agent.

## Why pi-nvidia-nim is Better

- **39+ curated models** with auto-discovery of even more
- **Full thinking/reasoning support** - properly enables thinking for DeepSeek, GLM, Kimi, Qwen models
- **Thinking level mapping** - supports off/minimal/low/medium/high
- **Vision models** support
- **Tool calling** validated and working
- **Auto-discovers** new models from NVIDIA API
- **Bug fixes** - fixes 500 errors (uses system role instead of developer)
- **Active development** - 17 releases and counting

## Installation

```bash
pi install npm:pi-nvidia-nim
```

## Configuration

Set your NVIDIA API key:

```bash
export NVIDIA_API_KEY="your-nvidia-api-key"
```

Get your API key at [https://build.nvidia.com](https://build.nvidia.com)

## Available Models

pi-nvidia-nim comes with 39+ curated models including:

- DeepSeek V3.2, V3.1, R1 distills
- Kimi K2.5, K2-thinking
- MiniMax M2.1, M2.5
- GLM-5, GLM-4.7
- Qwen3, QwQ models
- Llama 4 Maverick, Llama 3.1 405B
- Mistral Large 3, Devstral 2
- Nemotron models
- And many more...

Plus automatic discovery of additional models from NVIDIA API!

## Features

### Thinking Support
- Enables thinking/reasoning for DeepSeek, GLM, Kimi, Qwen models
- Maps thinking levels: off → minimal → low → medium → high
- Properly handles models that think by default

### Tool Calling
Tested and working with DeepSeek V3.2, GLM-5, GLM-4.7, Qwen3, Kimi K2.5, and more.

### Automatic Model Discovery
At startup, queries NVIDIA NIM API to discover additional models automatically.

---

# Original Extension (Deprecated)

This was my initial attempt at creating an NVIDIA NIM extension. It has been superseded by [pi-nvidia-nim](https://www.npmjs.com/package/pi-nvidia-nim) which is much more complete and feature-rich.

## Why I Recommend pi-nvidia-nim

1. **Better model support** - 39+ models vs our 10
2. **Thinking models** - Full support we couldn't figure out
3. **Auto-discovery** - Finds new models automatically
4. **Tool calling** - Tested and working
5. **Active development** - 17 releases vs our 1

## If You Still Want This Version

This extension provides access to 10 high-performance NVIDIA NIM models, tested and verified to work correctly:

### S+ Tier (SWE-bench ≥70%)

| Model | SWE-bench | Context Window | Speed |
|-------|-----------|---------------|-------|
| MiniMax M2.5 | 80.2% | 204k | ~11s |
| Kimi K2.5 | 76.8% | 200k | ~1s |
| GLM 4.7 | 73.8% | 200k | ~1s |
| Kimi K2 Thinking | 71.3% | 256k | ~1s |
| Devstral 2 123B | 72.2% | 262k | ~1s |

### S Tier (SWE-bench 60-70%)

| Model | SWE-bench | Context Window | Speed |
|-------|-----------|---------------|-------|
| Qwen 3 Next 80B | 65.0% | 262k | ~1s |
| GPT OSS 120B | 60.0% | 128k | ~1s |
| Llama 4 Maverick 17B | 62.0% | 1M | ~1s |

### A+ Tier (SWE-bench 50-60%)

| Model | SWE-bench | Context Window | Speed |
|-------|-----------|---------------|-------|
| Mistral Large 3 675B | 58.0% | 32k | ~3s |
| Nemotron Ultra 253B | 56.0% | 128k | ~1s |

## Installation (Deprecated - Use npm:pi-nvidia-nim instead)

```bash
pi install git:github.com/lutfi-zain/pi-nvidia-extension
```

## Configuration

Set the `NVIDIA_API_KEY` environment variable:

```bash
export NVIDIA_API_KEY="your-nvidia-api-key"
```

Get your API key at [https://build.nvidia.com](https://build.nvidia.com)

## License

MIT

## Author

Lutfi