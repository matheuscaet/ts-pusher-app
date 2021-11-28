"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const path = __importStar(require("path"));
const pusher_1 = require("./pusher/pusher");
const app = express();
app.use(express.static(path.join(__dirname, "../public")));
app.set("views", path.join(__dirname, "../public"));
app.engine("html", require("ejs").renderFile);
app.set("viem engine", "html");
app.use(express.json());
app.post("/sendPusher", (req, res) => {
    try {
        let { msg, app } = req.body;
        console.log("Messagem received: " + msg);
        const pusher = new pusher_1.CPusher();
        pusher.createPusher();
        pusher.sendPusher(msg, app);
        console.log("Pusher created: " + pusher);
        res.status(201).send(pusher);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
app.use("/app1", (req, res) => {
    res.render("index.html");
});
app.use("/app2", (req, res) => {
    res.render("index2.html");
});
app.listen(5000, () => {
    console.log("Server running at 5000 port");
});
