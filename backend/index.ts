import { PrismaClient } from "@prisma/client";
import express from "express"

const prisma =new PrismaClient
const app = express()

app.use(express.json())

const PORT=5000

app.listen(PORT,()=>{
    console.log("server is running...")
})