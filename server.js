const express = require('express');
const path = require('path');
const app = express();
const PORT = 8000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    const menu = req.query.menu;
    let pageFile;

    switch (menu) {
        case 'about':
            pageFile = 'about.html';
            break;
        case 'student':
            pageFile = 'student.html';
            break;
        case 'home':
        case undefined:
        case '':
            pageFile = 'index.html';
            break;
        default:
            pageFile = '404notFound.html';
    }

    res.sendFile(path.join(__dirname, 'pages', pageFile));
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
