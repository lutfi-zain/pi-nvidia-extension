#!/usr/bin/env node

/**
 * Manual test script for NVIDIA API key validation
 * Usage: node test-manual.js [your-api-key]
 * 
 * If no API key is provided, it will prompt for one
 */

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

/**
 * Test the NVIDIA API key by making a simple API call
 * @param {string} apiKey - The NVIDIA API key to test
 * @throws {Error} if the API key is invalid or the API call fails
 */
async function testApiKey(apiKey) {
  try {
    console.log(`Testing API key: ${apiKey.substring(0, 10)}...`);
    
    const response = await fetch("https://integrate.api.nvidia.com/v1/models", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${apiKey}`,
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      const errorText = await response.text();
      if (response.status === 401) {
        throw new Error("Invalid NVIDIA API key. Please check your key and try again.");
      } else if (response.status === 403) {
        throw new Error("Access denied. Your NVIDIA API key may not have the required permissions.");
      } else {
        throw new Error(`API test failed with status ${response.status}: ${errorText}`);
      }
    }

    // Verify the response contains expected data
    const data = await response.json();
    if (!data || !Array.isArray(data.data)) {
      throw new Error("Unexpected API response format. Please contact support.");
    }

    console.log('✅ API key is valid!');
    console.log(`   Found ${data.data.length} available models`);
    return true;
  } catch (error) {
    if (error instanceof Error) {
      console.log('❌ API key test failed:');
      console.log(`   ${error.message}`);
      throw error;
    }
    throw new Error("Failed to test API key. Please check your internet connection and try again.");
  }
}

async function main() {
  const apiKey = process.argv[2];
  
  if (apiKey) {
    try {
      await testApiKey(apiKey);
      process.exit(0);
    } catch (error) {
      process.exit(1);
    }
  } else {
    rl.question('Enter your NVIDIA API key: ', async (input) => {
      try {
        await testApiKey(input.trim());
        rl.close();
        process.exit(0);
      } catch (error) {
        rl.close();
        process.exit(1);
      }
    });
  }
}

main().catch(console.error);
