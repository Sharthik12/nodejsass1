const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'demo.txt');

// 1. Write to a file (create or overwrite)
fs.writeFile(filePath, 'Hello, Node.js!\n', (err) => {
  if (err) return console.error('Error writing file:', err);
  console.log(' File created and written to.');

  // 2. Append to the file
  fs.appendFile(filePath, 'This is appended text.\n', (err) => {
    if (err) return console.error('Error appending file:', err);
    console.log(' Text appended.');

    // 3. Read the file
    fs.readFile(filePath, 'utf8', (err, data) => {
      if (err) return console.error('Error reading file:', err);
      console.log(' File content:\n', data);

      // 4. Rename the file
      const newPath = path.join(__dirname, 'renamed-demo.txt');
      fs.rename(filePath, newPath, (err) => {
        if (err) return console.error('Error renaming file:', err);
        console.log(' File renamed.');

        // 5. Check if file exists
        if (fs.existsSync(newPath)) {
          console.log(' File exists after renaming.');

          // 6. Delete the file
        //   fs.unlink(newPath, (err) => {
        //     if (err) return console.error('Error deleting file:', err);
        //     console.log(' File deleted successfully.');
        //   });
        }
      });
    });
  });
});
