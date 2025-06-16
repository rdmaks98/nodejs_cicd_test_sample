const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("🚀 Hello from DevOps World! step-1 Install docker in your system, step-2 build image step -3 run image step-4 render site manage web servide and connect git repository");
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
