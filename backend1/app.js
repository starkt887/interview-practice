import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser"
import jwt from "jsonwebtoken"

export const app = express()


app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))
app.use(express.json({ limit: "16kb" }))
app.use(express.urlencoded({ limit: "16kb", extended: true }))
app.use(express.static("public"))
app.use(cookieParser())

app.get("/", (req, res) => {
    res.status(200).send({
        status: 200,
        message: "Server is OK"
    })
})

app.get("/encrypt", (req, res) => {
    const token = jwt
        .sign({
            id: 121,
            name: "Akshay",
            age: "29"
        },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d"
            })
    res.status(200)
    .cookie("accessToken",token,{
        httpOnly:true,
        secure:true,
    })
    .send({
        token
    })
})

app.get("/decrypt", (req, res) => {

})