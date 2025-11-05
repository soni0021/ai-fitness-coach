// Quick test script to verify Gemini API connectivity
const { GoogleGenerativeAI } = require('@google/generative-ai');

const API_KEY = 'AIzaSyBijux7gIp7G6JkwZEtdm8qxe1r4vWwOGs';

async function listAvailableModels() {
  try {
    console.log('Listing available models...');
    
    const genAI = new GoogleGenerativeAI(API_KEY);
    
    // Try to list models
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models?key=${API_KEY}`);
    const data = await response.json();
    
    if (data.models) {
      console.log('Available models:');
      data.models.forEach(model => {
        console.log(`- ${model.name} (${model.displayName})`);
      });
      
      // Try gemini-2.5-flash specifically
      const targetModel = data.models.find(model => model.name === 'models/gemini-2.5-flash');
      if (targetModel) {
        await testWithModel('gemini-2.5-flash');
      } else {
        console.log('gemini-2.5-flash not found, trying first available text model...');
        const textModel = data.models.find(model => 
          model.name.includes('gemini') && 
          !model.name.includes('embedding') && 
          !model.name.includes('imagen')
        );
        if (textModel) {
          await testWithModel(textModel.name.replace('models/', ''));
        }
      }
    } else {
      console.log('No models found or error:', data);
    }
    
  } catch (error) {
    console.error('Error listing models:', error.message);
  }
}

async function testWithModel(modelName) {
  try {
    console.log(`\nTesting with model: ${modelName}`);
    
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: modelName });
    
    const prompt = 'Say "Hello, AI Fitness Coach!" in a friendly way.';
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    console.log('✅ API Test Successful!');
    console.log('Response:', text);
    console.log(`\n✅ Working model found: ${modelName}`);
    
  } catch (error) {
    console.error(`❌ Model ${modelName} failed:`, error.message);
  }
}

async function testGeminiAPI() {
  await listAvailableModels();
}

testGeminiAPI();
