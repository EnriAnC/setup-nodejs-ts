import * as express from "express"
import { Request, Response } from "express"
import Person from "./person"

const app = express()

app.get("/", (req: Request, res: Response) => {
  res.send(new Person().sayMyName())
})

app.listen(3000, () => {
  console.log("Server running on port 3000")
})
