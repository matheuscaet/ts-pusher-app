import express = require("express");
import * as path from "path";
import { CPusher } from "./pusher/pusher";

const app = express();

app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "../public"));
app.engine("html", require("ejs").renderFile);
app.set("viem engine", "html");

app.use(express.json());

app.post("/sendPusher", (req, res) => {
    try {
        let { msg, app } = req.body;
        console.log("Messagem received: " + msg)
        
        const pusher = new CPusher();
        pusher.createPusher();
        pusher.sendPusher(msg, app);
        console.log("Pusher created: " + pusher)

        res.status(201).send(pusher);
    }
    catch (err) {
        res.status(500).send(err);
    }
})


app.use("/app1", (req, res) => {
    res.render("index.html")
});
app.use("/app2", (req, res) => {
    res.render("index2.html")
});

app.listen(5000, () => {
    console.log("Server running at 5000 port");
})