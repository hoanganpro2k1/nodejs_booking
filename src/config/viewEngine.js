import express from "express";

let configViewEngine = (app) => {
    // Bat buoc cau hinh, chi dinh file duoc lay ra
    app.use(express.static("./src/public"))
    app.set("view engine", "ejs");
    app.set("views", "./src/views")
}

module.exports = configViewEngine;