const app = require("./app");

const PORT = process.env.PORT || 3000; // Define the port

app.listen(PORT, () => {
    console.log(`Server is working on http://localhost:${PORT}`);
});
