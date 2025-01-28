const DB = require('./database/db')

const PORT = 3001;
const express = require ("express")

const ProjectsRoutes = require("./routes/routes");

const app = express();


//connect to my database
DB();

//middleware -> express.json()
app.use(express.json());

//routes here
app.use("/", ProjectsRoutes);

app.listen(PORT, () => {
  console.log(`Server is now running on port ${PORT}`);
});
