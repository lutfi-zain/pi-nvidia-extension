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
