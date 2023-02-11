require("dotenv").config()
const express = require("express")
const connectDB = require("./config/db")
const productRouters = require("./routers/productRouters")

connectDB();

const app = express()

app.use(express.json())

app.use("/api/products", productRouters)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on ${PORT}`))

app.get("/", (req, res, next) => {
    res.send("hi")
})