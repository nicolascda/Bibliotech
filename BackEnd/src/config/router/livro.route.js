import {listarLivros, buscarLivro} from "../config/controllers/livro.controller.js"
import express from "express"


const route = express.Router();


route.get("/", listarLivros);
route.get("/:id", buscarLivro);



export default route;
