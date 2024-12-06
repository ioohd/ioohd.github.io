const fs = require('fs');
const path = require('path');

// 获取当前文章文件路径（传入文件名）
const postFile = process.argv[2]; // 从命令行传入文章文件名

if (!postFile) {
    console.log("Please provide the post file name.");
    process.exit(1);
}

const postPath = path.join(__dirname, 'source/_posts', postFile);
const now = new Date();

// 读取文章内容
fs.readFile(postPath, 'utf8', (err, content) => {
    if (err) {
        console.error("Error reading file:", err);
        process.exit(1);
    }

    // 替换 `updated` 字段
    const updatedContent = content.replace(
        /updated: .*/g,
        `updated: ${now.toISOString()}`
    );

    // 写入新的内容
    fs.writeFile(postPath, updatedContent, 'utf8', (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log(`Updated the date for ${postFile}`);
        }
    });
});
