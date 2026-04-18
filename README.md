# Pi NVIDIA Extension

A Pi extension that adds NVIDIA NIM provider support to the pi-coding-agent.

## Features

- Adds NVIDIA as a model provider to pi-coding-agent
- Enables access to NVIDIA NIM models
- Seamless integration with pi's model selection system

## Installation

### Via Git (Recommended)

```bash
pi install git:github.com/lutfi-zain/pi-nvidia-extension
```

### Via Local Path

```bash
pi install /path/to/pi-nvidia-extension
```

## Usage

Once installed, the NVIDIA provider will be available in pi's model selection. You can:

1. Use `/model` to select NVIDIA models
2. Configure NVIDIA API key in pi's settings
3. Use NVIDIA models directly in your coding sessions

## Available Models

This extension provides access to 10 high-performance NVIDIA NIM models, tested and verified to work correctly:

### S+ Tier (SWE-bench ≥70%)

| Model | SWE-bench | Context Window | Speed |
|-------|-----------|---------------|-------|
| MiniMax M2.5 | 80.2% | 200k | ~11s |
| Kimi K2.5 | 76.8% | 128k | ~1s |
| GLM 4.7 | 73.8% | 200k | ~1s |
| Kimi K2 Thinking | 71.3% | 256k | ~1s |
| Devstral 2 123B | 72.2% | 256k | ~1s |

### S Tier (SWE-bench 60-70%)

| Model | SWE-bench | Context Window | Speed |
|-------|-----------|---------------|-------|
| Qwen 3 Next 80B | 65.0% | 128k | ~1s |
| GPT OSS 120B | 60.0% | 128k | ~1s |
| Llama 4 Maverick 17B | 62.0% | 1M | ~1s |

### A+ Tier (SWE-bench 50-60%)

| Model | SWE-bench | Context Window | Speed |
|-------|-----------|---------------|-------|
| Mistral Large 3 675B | 58.0% | 256k | ~3s |
| Nemotron Ultra 253B | 56.0% | 128k | ~1s |

**Note:** All models are free to use with your NVIDIA API key. SWE-bench scores indicate coding task performance.

## Configuration

### Method 1: Using `/login` (Recommended)

After installing the extension, you can authenticate interactively:

```bash
pi
/login nvidia
```

You'll be prompted to enter your NVIDIA API key. Get your API key at [https://build.nvidia.com](https://build.nvidia.com).

### Method 2: Environment Variable

Set the `NVIDIA_API_KEY` environment variable:

```bash
export NVIDIA_API_KEY="your-nvidia-api-key"
```

### Method 3: Auth File

Add your NVIDIA API key to `~/.pi/agent/auth.json`:

```json
{
  "nvidia": {
    "type": "api_key",
    "key": "your-nvidia-api-key"
  }
}
```

### Priority Order

Pi checks for credentials in this order:
1. `/login` credentials (stored in `~/.pi/agent/auth.json`)
2. `NVIDIA_API_KEY` environment variable
3. `auth.json` entry

## Development

To test this extension locally:

```bash
pi -e ./index.ts
```

## Requirements

- pi-coding-agent
- NVIDIA API key

## License

MIT

## Author

Lutfi
