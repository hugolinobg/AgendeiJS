import express from 'express'
import cors from 'cors'
import router from './src/routes/routes.js'

const app = express()
const port = 3000

app.use(express.json())
app.use(cors())
app.use(router)

app.listen(port, () => {
  console.log(`Server running on the port: ${port}`)
})
