const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post('/run-command', (req, res) => {
    const { command } = req.body;

    exec(command, (error, stdout, stderr) => {
        if (error) {
            return res.json({ output: stderr });
        }
        return res.json({ output: stdout });
    });
});

app.listen(port, () => {
    console.log(`ClassicCMD backend running on http://localhost:${port}`);
});
