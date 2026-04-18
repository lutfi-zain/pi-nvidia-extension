/**
 * Test file for NVIDIA API key validation
 * This demonstrates how the API key testing works
 */

import { testApiKey } from './index';

async function runTests() {
  console.log('Testing NVIDIA API key validation...\n');

  // Test 1: Invalid format (doesn't start with nvapi-)
  console.log('Test 1: Invalid format key');
  try {
    await testApiKey('invalid-key-format');
    console.log('❌ FAILED: Should have thrown an error for invalid format\n');
  } catch (error) {
    console.log('✅ PASSED: Correctly rejected invalid format');
    console.log(`   Error: ${(error as Error).message}\n`);
  }

  // Test 2: Valid format but invalid key
  console.log('Test 2: Valid format but invalid API key');
  try {
    await testApiKey('nvapi-invalid-key-12345');
    console.log('❌ FAILED: Should have thrown an error for invalid key\n');
  } catch (error) {
    console.log('✅ PASSED: Correctly rejected invalid API key');
    console.log(`   Error: ${(error as Error).message}\n`);
  }

  // Test 3: Valid API key (requires a real key for this test)
  console.log('Test 3: Valid API key (requires real key)');
  const realApiKey = process.env.NVIDIA_API_KEY;
  if (realApiKey) {
    try {
      await testApiKey(realApiKey);
      console.log('✅ PASSED: Successfully validated real API key\n');
    } catch (error) {
      console.log('❌ FAILED: Real API key validation failed');
      console.log(`   Error: ${(error as Error).message}\n`);
    }
  } else {
    console.log('⏭️  SKIPPED: No NVIDIA_API_KEY environment variable found\n');
  }

  console.log('Tests completed!');
}

// Run tests if this file is executed directly
if (require.main === module) {
  runTests().catch(console.error);
}

export { runTests };
