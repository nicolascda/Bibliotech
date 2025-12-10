import express from "express";
import cors from "cors";

import livroRoute from "./config/router/livro.route.js"
import reservaRoute from "./config/router/reserva.route.js"
const PORT = 3000;

const app = express();
app.use(cors())

app.get("/", (req,res)=>{
    res.send({msg:"API funcionando"})
})

app.use("/livros", livroRoute)
app.use("/reservas", reservaRoute)
app.use("/reservas", usuarioRoute)

app.listen(PORT, ()=>{
    console.log("Servidor funcionando no http://localhost:3000")
})
