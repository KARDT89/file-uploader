import express from 'express';
import ejsLayouts from 'express-ejs-layouts';

const app = new express()
const PORT = 3000

app.use((req, res, next) => {
    console.log(`API Endpoint: ${req.method} ${req.originalUrl}`);
    next();
});

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.set("views", "./views");
app.set("view engine", "ejs");
// app.use(ejsLayouts);
// app.set("layout", "layouts/main");

app.get("/", (req, res) => {
    res.render("index")
})

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`running at http://localhost:${PORT}`);
});