const fs = require('fs');
const path = require('path');

const docsDir = path.join('docs', 'historias');
const footer = '\n\n---\n[⬅️ Volver al Índice](./README.md) | [🏠 Volver al Inicio](../../README.md)\n';

fs.readdir(docsDir, (err, files) => {
    if (err) {
        console.error('Error reading directory:', err);
        return;
    }

    files.forEach(file => {
        if (path.extname(file) === '.md' && file !== 'README.md') {
            const filepath = path.join(docsDir, file);
            fs.readFile(filepath, 'utf8', (err, content) => {
                if (err) {
                    console.error(`Error reading ${file}:`, err);
                    return;
                }

                if (!content.includes('[⬅️ Volver al Índice](./README.md)')) {
                    fs.appendFile(filepath, footer, (err) => {
                        if (err) console.error(`Error updating ${file}:`, err);
                        else console.log(`Updated ${file}`);
                    });
                } else {
                    console.log(`Skipped ${file} (already updated)`);
                }
            });
        }
    });
});

