const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('public')); // 'public' is the folder with your website files

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
