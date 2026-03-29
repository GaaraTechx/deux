const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// On demande à Express de servir tous les fichiers du dossier actuel
app.use(express.static(__dirname));

// Route principale qui envoie ton index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
    console.log(`✅ Site lancé sur http://localhost:${PORT}`);
});
