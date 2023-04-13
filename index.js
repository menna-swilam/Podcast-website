const mongoose = require("mongoose");
const { app } = require("./app.js");

const port = process.env.PORT || 3000;

app.listen(port, async () => {
    await mongoose.connect('mongodb+srv://mennaswilam0:testtest@cluster0.d9gtlo0.mongodb.net/test');
    console.log(`listening on port ${port} ...`)
});
