// fetch-data.js
const fs = require('fs');
const Airtable = require('airtable');

// GitHub will provide this environment variable during the build
const base = new Airtable({apiKey: process.env.AIRTABLE_API_TOKEN}).base('YOUR_BASE_ID');

async function getData() {
  const records = await base('Table Name').select().all();
  const data = records.map(reg => reg.fields);
  
  // Save data to a file your HTML can access
  fs.writeFileSync('./data.json', JSON.stringify(data));
}

getData();