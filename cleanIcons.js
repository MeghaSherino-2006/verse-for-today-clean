const fs = require("fs");
const path = require("path");

const folderPath = "src/posts";

const files = fs.readdirSync(folderPath);

files.forEach(file => {
  const filePath = path.join(folderPath, file);

  let content = fs.readFileSync(filePath, "utf-8");

  // Remove emojis from headings
  content = content
    .replace(/### 📖/g, "###")
    .replace(/### ✨/g, "###")
    .replace(/### ✍️/g, "###");

  fs.writeFileSync(filePath, content);
});

console.log("✅ All icons removed successfully!");