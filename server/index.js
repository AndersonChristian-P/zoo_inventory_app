const express = require("express")

const AnimalCtrl = require("./controllers/Animal")

const app = express()
const port = 5361

app.use(express.json())

app.get("/api/animals", AnimalCtrl.get)



app.listen(port, () => {
  console.log(`listening on port ${port}`)
})