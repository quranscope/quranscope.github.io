const deepl = require('deepl-node');
require('dotenv').config();

const DEEPL_API_KEY = process.env.DEEPL_API_KEY;
if (!DEEPL_API_KEY) {
  console.error('❌ Error: DEEPL_API_KEY not found in .env file');
  process.exit(1);
}

const translator = new deepl.Translator(DEEPL_API_KEY);

async function checkLanguages() {
  try {
    console.log('Checking available DeepL languages...\n');
    const langs = await translator.getTargetLanguages();
    console.log('Available target languages:');
    langs.forEach(l => {
      console.log(`  ${l.code.padEnd(8)} - ${l.name}`);
    });
  } catch (error) {
    console.error('Error:', error.message);
  }
}

checkLanguages();
