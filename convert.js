const fs = require("fs");

const data = fs.readFileSync("chat.txt", "utf-8");

// Split messages using "Verse for Today"
const messages = data.split("Verse for Today");

messages.forEach((msg) => {
  if (!msg.includes("Dr. Mini Sherino")) return;

  // Extract date
  const dateMatch = msg.match(/\d{2}\/\d{2}\/\d{2}/);
  if (!dateMatch) return;

  const rawDate = dateMatch[0];
  const [day, month, year] = rawDate.split("/");
  const formattedDate = `20${year}-${month}-${day}`;

  // ✨ IMPORTANT: Cut content ONLY until author name
  const endIndex = msg.indexOf("Dr. Mini Sherino");
  const cleanMsg = msg.substring(0, endIndex).trim();

  
  // Extract verse ending with () OR []
    const verseMatch = cleanMsg.match(/([^\n]+?(\([^)]+\)|\[[^\]]+\]))/);
    const verse = verseMatch ? verseMatch[1].trim() : "";

    // Generate title from verse
let title = "Verse for Today";

if (verse) {
  title = verse
    .replace(/[\[\(].*?[\]\)]/, "") // remove reference
    .split(" ")
    .slice(0, 6)
    .join(" ")
    .trim();

  // Capitalize first letter
  title = title.charAt(0).toUpperCase() + title.slice(1);
}

  // Remove header + verse from content
  let content = cleanMsg
    .replace(/\d{2}\/\d{2}\/\d{2},.*?:/, "") // remove date header
    .replace(/([^\n]+?(\([^)]+\)|\[[^\]]+\]))/, "") // remove verse
    .trim();



  const fileContent = `---
title: "${title}"
date: "${formattedDate}"
layout: "layout.njk"
---

### 📖 Verse for Today

> ${verse}

---

### ✨ Reflection

${content}

---

### ✍️ Author  
**Dr. Mini Sherino**
`;

  fs.writeFileSync(`src/posts/${formattedDate}.md`, fileContent);
});

console.log("✅ Clean posts created!");