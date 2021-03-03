const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(express.static(path.join(__dirname, "build")));

app.use((req, res, next) => {
    res.redirect("/")
})

app.listen(port, () => {
    console.log(`Server listening at port: ${port}`)
})