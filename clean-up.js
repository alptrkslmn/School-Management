const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Directories to remove
const dirsToRemove = [
  '.next',
  '.turbo',
  'node_modules'
];

console.log('Cleaning up project...');

// Remove directories
dirsToRemove.forEach(dir => {
  const dirPath = path.join(__dirname, dir);
  if (fs.existsSync(dirPath)) {
    console.log(`Removing ${dir}...`);
    try {
      fs.rmSync(dirPath, { recursive: true, force: true });
      console.log(`✓ ${dir} removed`);
    } catch (err) {
      console.error(`Error removing ${dir}:`, err);
    }
  }
});

console.log('Installing dependencies...');
try {
  execSync('npm install', { stdio: 'inherit' });
  console.log('✓ Dependencies installed');
} catch (err) {
  console.error('Error installing dependencies:', err);
}

console.log('Cleanup complete. Run "npm run dev" to start the development server.');
