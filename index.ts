import express from "express"
import { projectRoutes } from "./api/project/project.routes.js"
import path from "path"
import { read } from "./api/project/project.service.js"

const app = express()
app.use(express.json())
const port = 3000
const __dirname = import.meta.dirname

app.use(express.static(path.resolve(__dirname, "browser")))
app.use("/api/project", projectRoutes)

app.get("/**", (req, res) => {
  res.sendFile(path.join(__dirname, "browser", "index.html"))
})

const keepServerSpun = () => {
  setInterval(async () => {
    // sending request to website making sure they stay availble
    const projects = await read()
    projects.data.forEach((project: { link: string }) => {
      fetch(project.link)
    })
    console.log("fetched")
  },300000)
}

app.listen(port, () => {
  keepServerSpun()
  console.log(`Server is up and listening to ${port}`)
})
