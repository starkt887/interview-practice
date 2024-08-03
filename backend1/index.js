import { app } from "./app.js"
import "dotenv/config"

const PORT=process.env.PORT||8001

app.listen(PORT, () => {
    console.log("Server listening on port:", PORT)
})

