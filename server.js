
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
const PORT = 5001;

app.use(express.json());
app.use(cors());

mongoose
    .connect(
        "mongodb+srv://jeetburman95:Meethi0802@college-server.vsxxr.mongodb.net/?retryWrites=true&w=majority&appName=college-server",
        {}
)

    .then(() => {
        console.log("Connected to the database");
});

// Routes
const userRoute = require("./routes/user.route");
const todoRoute = require("./routes/todo.route");
app.use("/user", userRoute);
app.use("/todo", todoRoute);

app.get("/", (req, res) => {
    res.send("Hello World");
// res.end();
});

app.listen(PORT,()=>{
    console.log(`Server is running on port http://localhost:${PORT}`);
});